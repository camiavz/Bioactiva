$(document).ready(function() {
    $("#logo-text").click(function() {
        $("#banner").toggleClass("expanded");
    });
});




$(document).ready(function() {
    // Manejar clics en preguntas
    $('.faq-item').click(function() {
        // Obtener la respuesta correspondiente al data-answer
        var answer = $(this).data('answer');

        // Buscar si ya hay una respuesta visible
        var existingAnswer = $(this).next('.faq-answer');

        if (existingAnswer.length > 0) {
            // Si hay una respuesta visible, ocultarla
            existingAnswer.slideToggle();
        } else {
            // Si no hay una respuesta visible, crearla y mostrarla
            var answerElement = $('<div class="faq-answer">' + answer + '</div>');
            answerElement.insertAfter($(this)).slideToggle();
        }
    });
});
