# موقع مشروع MARHABA عبر GitHub Pages

## أين توجد ملفات الموقع؟
- كل ملفات الموقع موجودة داخل المجلد `site/`.
- الملف الرئيسي هو `site/index.html` مع الأنماط في `site/styles.css`.

## كيفية النشر
1. ادفع أي تعديل إلى الفرع `main`.
2. سيقوم GitHub Actions ببناء ونشر محتوى `site/` تلقائياً.
3. رابط الموقع سيكون: `https://LEZGHEM32.github.io/MARHABA` (بعد أوّل نشر ناجح).
4. تجد رابط النتيجة أيضاً في تبويب **Actions** أو **Settings > Pages**.

## نطاق مخصص (اختياري)
- لإعداد نطاق مخصص أضف ملفًا باسم `CNAME` داخل مجلد `site/` يحتوي سطرًا واحدًا هو اسم نطاقك مثل: `www.example.com`.
- حدّث سجلات DNS لدى مزوّدك:
  - لـ subdomain مثل `www.example.com`: أنشئ سجل `CNAME` يشير إلى `LEZGHEM32.github.io`.
  - لـ apex مثل `example.com`: استخدم `ALIAS/ANAME` إن توفر، أو سجلات `A` الخاصة بـ GitHub Pages حسب الوثائق الرسمية.
- بعد تفعيل النطاق في **Settings > Pages**، فعّل خيار **Enforce HTTPS**.

## نصائح
- صفحة 404 مخصّصة: أضف ملف `site/404.html`.
- خريطة الموقع: أضف `site/sitemap.xml` لتحسين الأرشفة.
