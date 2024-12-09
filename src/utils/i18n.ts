import i18n from 'i18next';

function switchLanguage(language: string) {
  i18n.changeLanguage(language);
}

export default switchLanguage;
