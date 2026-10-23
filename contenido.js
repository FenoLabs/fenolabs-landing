// «Configurar cookies», en el pie: vuelve a mostrar el aviso de cookies para cambiar la elección.
// Solo reabre el aviso que ya existe (#cookieNotice, clase .on). Guardar la elección sigue a cargo
// de sus propios botones, así que esto no duplica ni toca esa lógica.
(function(){
  var btn = document.querySelector('[data-abrir-cookies]');
  var aviso = document.getElementById('cookieNotice');
  if(!btn || !aviso) return;
  btn.addEventListener('click', function(){
    aviso.classList.add('on');
    var primero = aviso.querySelector('button');
    if(primero) primero.focus();
  });
})();
