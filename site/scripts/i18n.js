// Simple i18n implementation for MARHABA
(function() {
  'use strict';

  let translations = {};

  function loadTranslations(path, locale) {
    return fetch(path)
      .then(response => response.json())
      .then(data => {
        translations = data;
        return data;
      })
      .catch(error => {
        console.warn('Failed to load translations:', error);
        return {};
      });
  }

  function translate(key, replacements = {}) {
    let text = translations[key] || key;
    
    // Handle template replacements like {{year}}
    Object.keys(replacements).forEach(placeholder => {
      text = text.replace(new RegExp(`{{${placeholder}}}`, 'g'), replacements[placeholder]);
    });
    
    return text;
  }

  function translateElement(element) {
    const key = element.getAttribute('data-i18n');
    if (key) {
      const replacements = {};
      
      // Handle year replacement for footer
      if (key.includes('footer.rights')) {
        replacements.year = new Date().getFullYear();
      }
      
      element.textContent = translate(key, replacements);
    }

    // Handle placeholder translations
    const placeholderKey = element.getAttribute('data-i18n-placeholder');
    if (placeholderKey) {
      element.setAttribute('placeholder', translate(placeholderKey));
    }
  }

  function translatePage() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(translateElement);
    
    // Translate all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(translateElement);
  }

  function init() {
    const script = document.querySelector('script[data-i18n-auto]');
    if (!script) return;

    const locale = script.getAttribute('data-locale') || 'ar';
    const path = script.getAttribute('data-path') || './i18n/ar.json';

    loadTranslations(path, locale).then(() => {
      translatePage();
    });
  }

  // Auto-initialize if script has data-i18n-auto attribute
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for manual usage
  window.i18n = {
    loadTranslations,
    translate,
    translatePage
  };
})();