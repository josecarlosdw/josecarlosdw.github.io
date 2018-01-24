//a primeira coisa é que o serviço técnico funciona apenas em modo seguro em https ou em localhost. 
//Não funciona em recursos locais como arquivo: // ou http.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}