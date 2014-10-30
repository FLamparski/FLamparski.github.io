var mailhideUrl = "http://www.google.com/recaptcha/mailhide/d?k=01RoRwk7kvt6QqYgJXWG6BBQ==&c=NxtBO2k5gJqQDB2IYZfM3mi4ibkrDTT6uJWWvMx9t20=";

$(function() {
    $("a[href='#email']").click(function(obj) {
        window.open(mailhideUrl, '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300');
    });
});
