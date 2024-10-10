import React from 'react';
import { useTranslation } from 'react-i18next';



function LanguageToggle() {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English'},
    { code: 'ar-EG', name: 'Egyptian Arabic'},
    { code: 'ar-SA', name: 'Saudi Arabian Arabic' },
  ];

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (

      <select value={i18n.language} onChange={handleLanguageChange}>
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
          
            {language.name}
          </option>
        ))}
      </select>

  );
}

export default LanguageToggle;