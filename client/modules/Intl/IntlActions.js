import { localizationData } from '../../../Intl/setup';
import callApi from '../../util/apiCaller';

// Export Constants
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const ADD_LOCALIZATION_LABELS = 'ADD_LOCALIZATION_LABELS';

export function switchLanguage(newLang) {
  return {
    type: SWITCH_LANGUAGE,
    ...localizationData[newLang],
  };
}

export function addLocalizationLabels(labels) {
  return {
    type: ADD_LOCALIZATION_LABELS,
    labels,
  };
}

export function fetchLocalizationLabels(language) {
  return (dispatch) => {
    return callApi(`localizationLabels/${language}`).then(res =>
      dispatch(addLocalizationLabels(res.labels)));
  };
}
