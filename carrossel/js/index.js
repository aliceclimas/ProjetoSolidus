$(function () {
  var $carrossel = $("#imagens-slider");
  var imagens = $carrossel.children().length;
  var imagem_width = imagens * 2000;
  $carrossel.css("width", imagem_width);
  var proximo = true;
  var velocidade_slide = 1800;
  var ver_imagens = setInterval(proximaImagem, velocidade_slide);
  $(document).on(
    {
      mouseenter: function () {
        proximo = false;
      },
      mouseleave: function () {
        proximo = true;
      },
    },
    "#carrossel-imagens"
  );
  function proximaImagem() {
    if (proximo != false) {
      var $first = $("#imagens-slider li:first");
      $first.animate(
        {
          "margin-left": "-300px",
        },
        2000,
        function () {
          $first.remove().css({
            "margin-left": "0px",
          });
          $("#imagens-slider li:last").after($first);
        }
      );
    }
  }
});
