# MARHABA — Static Site

هذا المستودع يُنشر تلقائيًا عبر GitHub Pages.

- الإنتاج (بعد دمج التغييرات إلى `main`):
  - https://lezghem32.github.io/MARHABA/
- معاينة أي طلب سحب:
  - افتح طلب السحب ثم انتقل إلى تبويب **Checks** وابحث عن مهمة **Deploy static site to GitHub Pages** واضغط **View deployment** لفتح رابط المعاينة.

الموقع موجود في المجلد `site/` ويتم النشر مباشرة منه، وتستخدم الصفحات روابط نسبية (`./page.html`) المتوافقة مع مسار Pages. إذا لم يظهر زر View deployment، تأكّد من إعداد Settings → Pages وأن خيار Build and deployment مضبوط على GitHub Actions.
