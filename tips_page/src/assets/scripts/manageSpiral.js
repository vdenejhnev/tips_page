const sp = document.querySelector('.thanks_box > svg');
const h = 16 + document.querySelector('.thanks_box').scrollHeight;
if (h > 100){
    sp.setAttribute('viewBox', '0 0 332 ' + h.toString());
}
