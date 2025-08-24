# موقع مشروع MARHABA عبر GitHub Pages

## أين توجد ملفات الموقع؟
- كل ملفات الموقع موجودة داخل المجلد `site/`.
- الملف الرئيسي هو `site/index.html` مع الأنماط في `site/styles.css`.

## حالة النشر
- النشر مُعطّل تلقائيًا الآن (workflow يدوي فقط).
- عند الجاهزية، يمكن تشغيل النشر يدويًا من تبويب **Actions** بتشغيل Workflow باسم "Deploy GitHub Pages".

## كيفية النشر يدويًا (لاحقًا)
1. ادفع التغييرات إلى الفرع `main`.
2. من **Actions** اختر Workflow "Deploy GitHub Pages".
3. اضغط **Run workflow** لتفعيل النشر.
4. بعد نجاح التنفيذ، سيكون الرابط: `https://LEZGHEM32.github.io/MARHABA`.
5. يمكنك العثور على الرابط أيضًا في **Settings > Pages**.

## نطاق مخصص (اختياري)
- لإعداد نطاق مخصص أضف ملفًا باسم `CNAME` داخل مجلد `site/` يحتوي سطرًا واحدًا هو اسم نطاقك مثل: `www.example.com`.
- حدّث سجلات DNS لدى مزوّدك:
  - لـ subdomain مثل `www.example.com`: أنشئ سجل `CNAME` يشير إلى `LEZGHEM32.github.io`.
  - لـ apex مثل `example.com`: استخدم `ALIAS/ANAME` إن توفر، أو سجلات `A` الخاصة بـ GitHub Pages حسب الوثائق الرسمية.
- بعد تفعيل النطاق في **Settings > Pages**، فعّل خيار **Enforce HTTPS**.

## نصائح
- صفحة 404 مخصّصة: أضف ملف `site/404.html`.
- خريطة الموقع: أضف `site/sitemap.xml` لتحسين الأرشفة.
