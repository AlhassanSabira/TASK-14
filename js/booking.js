let english=false;
const ar={
title:"احجز استشارتك الآن",sub:"اختر الوقت المناسب لك واحصل على استشارة احترافية",
types:"أنواع الاستشارات",online:"استشارة أونلاين",inperson:"استشارة حضورية",follow:"متابعة علاجية",urgent:"استشارة طارئة",
quick:"تواصل سريع",form:"نموذج الحجز",name:"الاسم الكامل",email:"البريد الإلكتروني",phone:"رقم الهاتف",
choose:"اختر نوع الاستشارة",notes:"ملاحظات إضافية",confirm:"☑ تأكيد الحجز",help:"هل تحتاج إلى مساعدة؟",
helpp:"للحصول على استشارة هاتفية تواصل معنا عبر الهاتف أو WhatsApp"
};
const en={
title:"Book Your Consultation Now",sub:"Choose a suitable time and get a professional consultation",
types:"Consultation Types",online:"Online Consultation",inperson:"In-Person Consultation",follow:"Follow-up",urgent:"Emergency Consultation",
quick:"Quick Contact",form:"Booking Form",name:"Full Name",email:"Email Address",phone:"Phone Number",
choose:"Choose consultation type",notes:"Additional notes",confirm:"☑ Confirm Booking",help:"Need Help?",
helpp:"For a phone consultation, contact us by phone or WhatsApp"
};
function setLang(){
 const d=english?en:ar;
 document.querySelector('.hero h1').textContent=d.title;
 document.querySelector('.hero p').textContent=d.sub;
 document.querySelectorAll('.card h2')[0].textContent=d.types;
 document.querySelectorAll('.card h2')[1].textContent=d.quick;
 document.querySelector('.form h2').textContent=d.form;
 document.querySelectorAll('.option span')[0].textContent=d.online;
 document.querySelectorAll('.option span')[1].textContent=d.inperson;
 document.querySelectorAll('.option span')[2].textContent=d.follow;
 document.querySelectorAll('.option span')[3].textContent=d.urgent;
 document.getElementById('name').placeholder=d.name;
 document.getElementById('email').placeholder=d.email;
 document.getElementById('phone').placeholder=d.phone;
 document.getElementById('notes').placeholder=d.notes;
 document.querySelector('#type option').textContent=d.choose;
 document.querySelector('.submit').textContent=d.confirm;
 document.querySelector('.help h2').textContent=d.help;
 document.querySelector('.help p').textContent=d.helpp;
 document.documentElement.dir=english?'ltr':'rtl';
 document.documentElement.lang=english?'en':'ar';
 document.getElementById('langBtn').textContent=english?'AR':'EN';
}
document.getElementById('langBtn').onclick=()=>{english=!english;setLang()};
document.getElementById('themeBtn').onclick=()=>{
 document.body.classList.toggle('dark');
 document.getElementById('themeBtn').textContent=document.body.classList.contains('dark')?'☀':'☾';
};
document.getElementById('bookingForm').addEventListener('submit',e=>{
 e.preventDefault();
 const msg=document.getElementById('msg');
 msg.textContent=english?'Your booking request has been submitted successfully ✓':'تم إرسال طلب الحجز بنجاح ✓';
});
