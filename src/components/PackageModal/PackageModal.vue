<script>
import { mapActions } from 'vuex';

export default {
  name: 'PackageModal',

  props: {
    value: { type: Boolean, default: false },
    packageName: { type: String, required: true },
  },

  data: () => ({
    isOpened: false,
    isLoading: true,
    packageData: null,
  }),

  computed: {
    description() {
      if (!this.packageData) return '';
      return this.packageData.description;
    },

    license() {
      if (!this.packageData) return '';
      return this.packageData.license;
    },

    maintainers() {
      if (!this.packageData) return [];
      return this.packageData.maintainers;
    },
  },

  watch: {
    value: {
      handler(newValue) {
        if (newValue !== this.isOpened) {
          this.isOpened = newValue;
        }
      },
      immediate: true,
    },

    isOpened: {
      handler(newValue) {
        if (newValue !== this.value) {
          this.$emit('input', newValue);
          if (!newValue) this.$emit('close');
        }

        if (newValue) this.getPackageData();
      },
      immediate: true,
    },
  },

  methods: {
    ...mapActions('packages', ['getPackage']),

    close() {
      this.isOpened = false;
      this.packageData = null;
    },

    async getPackageData() {
      try {
        this.setLoading(true);
        this.packageData = await this.getPackage({
          packageName: this.packageName,
        });
      } catch (error) {
        this.close();
        // this.setError();
      } finally {
        this.setLoading(false);
      }
    },

    setLoading(value) {
      this.isLoading = value;
    },
  },
};
</script>

<template>
  <v-dialog v-model="isOpened" :max-width="800">
    <v-card :loading="isLoading">
      <v-card-title>
        <div
          class="d-flex justify-space-between align-center"
          style="width: 100%"
        >
          <div>
            <span class="headline">{{ packageName }}</span>
          </div>

          <div>
            <v-btn icon small color="red" @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <div>
          <span class="text-subtitle-1 font-weight-bold">
            {{ $t('description') }}:
          </span>
          <br />
          {{ $filters.capitalizeFirst(description) }}
        </div>

        <div v-if="license" class="mt-4">
          <span class="text-subtitle-1 font-weight-bold">
            {{ $t('license') }}:
          </span>
          {{ license }}
        </div>

        <div v-if="maintainers.length" class="mt-4">
          <span class="text-subtitle-1 font-weight-bold">
            {{ $t('maintainers') }}:
          </span>
          <ul>
            <li v-for="maintainer in maintainers" :key="maintainer.name">
              <div>
                <span class="font-weight-bold">{{ $t('name') }}:&nbsp;</span>
                <span>{{ maintainer.name }}</span>
                <br />

                <span class="font-weight-bold">{{ $t('email') }}:&nbsp;</span>
                <span>{{ maintainer.email }}</span>
              </div>
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped></style>

<i18n>
{
  "en": {
    "description": "Description",
    "license": "License",
    "maintainers": "Maintainers",
    "name": "Name",
    "email": "E-mail"
  },
  "ru": {
    "description": "Описание",
    "license": "Права",
    "maintainers": "Команда поддержки",
    "name": "Имя",
    "email": "Почта"
  }
}
</i18n>
