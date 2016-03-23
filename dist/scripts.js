$(document).ready(function() {
    var webData = {
        labels: ["Frontend", "Backend", "Servers", "Design"],
        datasets: [
            {
                label: "Skills",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [75, 90, 60, 50]
            }
        ]
    };

    var devData = {
        labels: ["Java", "Python", "Databases", "Testing"],
        datasets: [
            {
                label: "Skills",
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,0.8)",
                highlightFill: "rgba(151,187,205,0.75)",
                highlightStroke: "rgba(151,187,205,1)",
                data: [90, 65, 70, 50]
            }
        ]
    };

    var options = {
        scaleOverride: true,
        scaleSteps: 4,
        scaleStepWidth : 25,
        scaleStartValue : 0
    };

    var ctx = document.getElementById('webSkillsChart').getContext('2d');
    var webChart = new Chart(ctx).Bar(webData, options);

    var ctx2 = document.getElementById('devSkillsChart').getContext('2d');
    var devChart = new Chart(ctx2).Bar(devData, options);
});
$(document).ready(function() {

    $('.contact-form').submit(function(e) {

        if (validateForm()) {
            $.ajax({
              method: 'POST',
              url: '/dist/sendmail.php',
              data: {
                name: $('#name-field').val(),
                email: $('#email-field').val(),
                phone: $('#phone-field').val(),
                message: $('#message-field').val(),
              },
              success: function(data) {
                $('#name-field').val('');
                $('#email-field').val('');
                $('#phone-field').val('');
                $('#message-field').val('');
                $('#success-message').fadeIn().delay(3000).fadeOut();
              }
            });
        }
        return false;
    });

});

function validateForm() {
    var name = $('#name-field').val();
    var email = $('#email-field').val();
    var phone = $('#phone-field').val();
    var message = $('#message-field').val();
    var validForm = true;
    var l = 10;
    if (!name) {
        for( var i = 0; i < 10; i++ ) {  
            $('#name-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
        }
        validForm = false;
    }
    
    if (!email) {
        for(var j = 0; j < 10; j++ ) {  
            $('#email-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
        }
        validForm = false;
    } else {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!re.test(email)) {
            for(k = 0; k < 10; k++ ) {  
                $('#email-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
            }
            validForm = false;
            console.log('fail');
        }
    }
    
    if (!message) {
        for(x = 0; x < 10; x++ ) {  
            $('#message-field').animate({'margin-left': "+=" + (l = -l) + 'px'}, 35); 
        }
        validForm = false;
    }
    return validForm;
}
// Thanks to Chris Covier on https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});