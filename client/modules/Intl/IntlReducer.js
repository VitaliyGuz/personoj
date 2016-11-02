import { enabledLanguages, localizationData } from '../../../Intl/setup';
import { SWITCH_LANGUAGE, ADD_LOCALIZATION_LABELS } from './IntlActions';

const initLocale = global.navigator && global.navigator.language || 'ru';

const initialState = {
  locale: initLocale,
  enabledLanguages,
  ...(localizationData[initLocale] || {}),
  labels: {}
};

const IntlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      const { type, ...actionWithoutType } = action; // eslint-disable-line
      return { ...state, ...actionWithoutType };
    }

    case ADD_LOCALIZATION_LABELS: {
      return {
        ...state,
        labels: action.labels
      };
    }

    default:
      return state;
  }
};

export default IntlReducer;
