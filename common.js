// Common helpers used across pages
function showModal(html, buttons){
  const root = document.createElement('div');
  root.className = 'popup';
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = html;
  const btnWrap = document.createElement('div');
  btnWrap.style.marginTop = '14px';
  buttons.forEach(b=>{
    const btn = document.createElement('button');
    btn.className='btn';
    btn.textContent = b.label;
    btn.style.margin='6px';
    btn.onclick = ()=>{ if(b.onClick){ b.onClick(); } document.body.removeChild(root); };
    btnWrap.appendChild(btn);
  });
  modal.appendChild(btnWrap);
  root.appendChild(modal);
  document.body.appendChild(root);
}