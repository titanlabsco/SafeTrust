import i18n from 'i18next';

function switchLanguage(language: string) {
  localStorage.setItem('LngPreference', language);
  i18n.changeLanguage(language);
}

export default switchLanguage;
