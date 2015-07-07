// NB: translated to avoid using JQuery, since we don't need it for anything else
function powerOff() {
  document.body.style.display = 'none';
  document.getElementsByTagName('html')[0].style.backgroundColor = 'black';
  setTimeout(function(){
    document.body.style.display = 'block';
    document.getElementsByTagName('html')[0].style.backgroundColor = 'none';
  }, 1000);
}
