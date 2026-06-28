
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(a=>{ if(a.getAttribute('href')===path) a.classList.add('active'); });
document.querySelectorAll('.copy-btn').forEach(btn=>btn.addEventListener('click', async()=>{
  const code = btn.closest('.code-card').querySelector('code').innerText;
  try{ await navigator.clipboard.writeText(code); btn.classList.add('done'); btn.innerHTML='<i class="bi bi-check2"></i> تم النسخ'; setTimeout(()=>{btn.classList.remove('done');btn.innerHTML='<i class="bi bi-clipboard"></i> نسخ'},1400);}catch{btn.textContent='خطأ'}
}));
const search = document.querySelector('#navSearch');
if(search){search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll('.nav-link').forEach(a=>{a.classList.toggle('hidden', q && !a.textContent.toLowerCase().includes(q));});});}
document.querySelectorAll('.checklist input').forEach(cb=>cb.addEventListener('change',()=>{
  cb.closest('label').classList.toggle('done',cb.checked);
  const all=[...document.querySelectorAll('.checklist input')]; const done=all.filter(x=>x.checked).length;
  const bar=document.querySelector('.check-progress div'); const label=document.querySelector('.check-label');
  if(bar) bar.style.width=(done/all.length*100)+'%'; if(label) label.textContent=`${done} / ${all.length} مكتمل`;
}));
const side=document.querySelector('.sidebar');
document.querySelectorAll('[data-menu]').forEach(b=>b.addEventListener('click',()=>side.classList.toggle('open')));
document.querySelector('[data-print]')?.addEventListener('click',()=>window.print());
