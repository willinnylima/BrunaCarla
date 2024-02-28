var btn = document.querySelector(".no");
var position = 0;
var isAnimating = false;

btn.addEventListener("click", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

btn.addEventListener("mouseover", function() {
    if (!isAnimating) {
        isAnimating = true;
        position = position === 0 ? 150 : 0;
        btn.style.transform = `translate(0px, ${position}px)`;
        btn.style.transition = "all 0.2s ease";

        setTimeout(function() {
            isAnimating = false;
        }, 200);
    }
});

const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
  title: 'Te amo 😍',
  html: 'Prometo lhe fazer muito feliz. 💘',
  timer: 8000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
});
          // Espera o carregamento completo da página
          window.addEventListener('load', function() {
            // Obtém o elemento do iframe do SoundCloud
            var widget = document.getElementById('soundcloud-widget');
        
            // Adiciona um ouvinte de eventos para detectar quando o iframe é carregado
            widget.onload = function() {
              // Obtém o widget do SoundCloud
              var widgetIframe = document.getElementById('soundcloud-widget');
              var widget = SC.Widget(widgetIframe);
        
              // Reproduz o áudio
              widget.play();
            };
          });