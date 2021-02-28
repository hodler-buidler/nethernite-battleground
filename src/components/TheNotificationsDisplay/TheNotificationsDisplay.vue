<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'TheNotificationsDisplay',

  computed: {
    ...mapState('system', ['errorMessage']),

    systemError: {
      get() {
        return this.errorMessage;
      },

      set(value) {
        if (!value) {
          this.setErrorMessage('');
        }
      },
    },
  },

  methods: {
    ...mapActions('system', ['setErrorMessage']),
  },
};
</script>

<template>
  <v-snackbar v-model="systemError">
    {{ $filters.capitalizeFirst(systemError) }}

    <template #action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="systemError = false">
        {{ $t('close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style lang="scss" scoped></style>

<i18n>
{
  "en": {
    "close": "Close"
  },
  "ru": {
    "close": "Закрыть"
  }
}
</i18n>
