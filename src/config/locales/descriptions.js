/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import * as locales from './supported-types';
import NAMES_MAP from './names-map';

const DESCRIPTIONS = Object.freeze(
  Object.values(locales).map((type) => {
    return {
      type,
      name: NAMES_MAP[type],
      icon: require(`@/assets/img/locales/${type}.svg`),
    };
  }),
);

export default DESCRIPTIONS;
