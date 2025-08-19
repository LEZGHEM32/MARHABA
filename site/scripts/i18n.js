// بسيط: تحميل قاموس i18n وتطبيقه على عناصر تملك data-i18n
(() => {
  const I18N = (() => {
    let dict = {};
    let locale = 'ar';

    const interpolate = (str, params = {}) =>
      String(str).replace(/{{\s*([\w.]+)\s*}}/g, (_, k) => {
        if (k === 'year' && params.year == null) return new Date().getFullYear();
        return params[k] != null ? params[k] : '';
      });

    const t = (key, params) => {
      const val = dict[key];
      if (typeof val === 'string') return interpolate(val, params);
      return key; // fallback إلى المفتاح نفسه
    };

    const apply = (root = document) => {
      // نصوص العناصر
      root.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        let params = {};
        const p = el.getAttribute('data-i18n-params');
        if (p) { try { params = JSON.parse(p); } catch (_) {} }
        const useHTML = el.hasAttribute('data-i18n-html');
        const result = t(key, params);
        if (useHTML) el.innerHTML = result;
        else el.textContent = result;
      });

      // ترجمة سمات مثل placeholder, title, aria-label...
      root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
        const attrs = el.getAttribute('data-i18n-attr')
          .split(',').map(s => s.trim()).filter(Boolean);
        attrs.forEach((attr) => {
          const attrKeyAttr = `data-i18n-${attr}`;
          const key = el.getAttribute(attrKeyAttr) || el.getAttribute('data-i18n');
          if (!key) return;
          let params = {};
          const p = el.getAttribute(`${attrKeyAttr}-params`) || el.getAttribute('data-i18n-params');
          if (p) { try { params = JSON.parse(p); } catch (_) {} }
          el.setAttribute(attr, t(key, params));
        });
      });
    };

    const load = async (newLocale = 'ar', path = `./i18n/${newLocale}.json`) => {
      locale = newLocale;
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Failed to load i18n file: ${path}`);
      dict = await res.json();
      return dict;
    };

    return {
      load, apply, t,
      get locale() { return locale; },
      get dict() { return dict; }
    };
  })();

  window.I18N = I18N;

  // تحميل تلقائي عند وجود سمة data-i18n-auto على السكربت
  const currentScript = document.currentScript;
  if (currentScript && currentScript.hasAttribute('data-i18n-auto')) {
    const loc = currentScript.getAttribute('data-locale') || 'ar';
    const path = currentScript.getAttribute('data-path') || `./i18n/${loc}.json`;
    I18N.load(loc, path).then(() => I18N.apply()).catch(console.error);
  }
})();