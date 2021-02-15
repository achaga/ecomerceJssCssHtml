$(document).ready(function () {
    $('.count').prop('disabled', true);
    $(document).on('click', '.mas', function () {
        $('.count').val(parseInt($('.count').val()) + 1);
        sacarSubtotal()
    });
    $(document).on('click', '.menos', function () {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
        sacarSubtotal()
    });
});

$('#botoon').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

var subtotal = document.getElementById('cantxPrecio');
var unit = document.getElementById('precioUnitario');
unit = parseInt(unit.textContent);
sacarSubtotal()

function sacarSubtotal() {
    debugger
    var cant = cantidad.value;
    subtotal.innerHTML = unit * cant;

}



$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });
  });
