$(document).ready(function() {

    var nameInput = $('#form-name');
    var emailInput = $('#form-email');
    var messageInput = $('#form-message');
    var successMessage = $('#success-message');
    var errorMessage = $('#error-message');

    $('#contact-form').submit(function(event) {
        $.ajax({
            type: 'POST',
            url: '/dist/sendmail.php',
            data: {
                name: nameInput.val(),
                email: emailInput.val(),
                message: messageInput.val()
            },
            success: function(data) {
                nameInput.val('');
                emailInput.val('');
                messageInput.val('');
                successMessage.fadeIn().delay(10000).fadeOut();
            },
            error: function(err) {
                errorMessage.fadeIn().delay(10000).fadeOut();
            }
        });

        return false; // Keep page state
    });
});
