const themeBtn=document.getElementById('themeBtn');
themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  themeBtn.textContent=document.body.classList.contains('dark')?'☀':'☾';
});

document.querySelectorAll('.action').forEach(btn=>{
  btn.addEventListener('click',()=>{
    if(btn.textContent.trim()==='إعجاب'){
      btn.classList.toggle('active');
      btn.textContent=btn.classList.contains('active')?'♥ تم الإعجاب':'إعجاب';
    }else if(btn.textContent.trim()==='مشاركة'){
      const card=btn.closest('.article');
      const title=card.querySelector('h2').textContent;
      if(navigator.share){
        navigator.share({title, text:title, url:location.href}).catch(()=>{});
      }else if(navigator.clipboard){
        navigator.clipboard.writeText(location.href);
        btn.textContent='تم النسخ ✓';
        setTimeout(()=>btn.textContent='مشاركة',1200);
      }
    }else{
      const card=btn.closest('.article');
      const title=card.querySelector('h2').textContent;
      window.location.hash='comment';
      alert('يمكن إضافة التعليق على مقال: '+title);
    }
  });
});

const langBtn=document.getElementById('langBtn');
let english=false;
langBtn.addEventListener('click',()=>{
  english=!english;
  document.documentElement.dir=english?'ltr':'rtl';
  document.documentElement.lang=english?'en':'ar';
  langBtn.textContent=english?'AR':'EN';
  document.getElementById('pageTitle').textContent=english?'All Articles':'جميع المقالات';
  document.getElementById('pageSub').textContent=english?'Discover psychological articles and advice from Dr. Mohamed Essam':'اكتشف المقالات والنصائح النفسية التي يقدمها الدكتور محمد عصام';
});
