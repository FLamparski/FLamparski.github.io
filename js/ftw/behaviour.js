var mailhideUrl = "http://www.google.com/recaptcha/mailhide/d?k=01RoRwk7kvt6QqYgJXWG6BBQ==&c=NxtBO2k5gJqQDB2IYZfM3mi4ibkrDTT6uJWWvMx9t20=";

function args_to_array () {
  return Array.prototype.slice(arguments);
}

$(function() {
  var rgbaEx = /rgba?\((.*)\)/i;
    $("a[href='#email']").click(function(obj) {
        window.open(mailhideUrl, '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300');
    });
    if (window.jekyll && jekyll.page.masthead && jekyll.page.masthead.background === '##geopattern##') {
      var pattern = GeoPattern.generate(jekyll.page.title);
      $('.masthead-wrapper').css('background-image', pattern.toDataUrl());
      $('#headerbar').css('background-color', pattern.color);
      $(document).on('scroll', function(evt) {
        var rawScrollTop = $(evt.currentTarget).scrollTop();
        var targetOpacity = rawScrollTop > 300 ? 1 : rawScrollTop / 300;
        var currentBg = rgbaEx.exec($('#headerbar').css('background-color'))[1].split(', ');
        var currentShadow = $('#headerbar').css('box-shadow');
        currentBg[3] = targetOpacity;
        var targetBg = 'rgba(' + currentBg.join(', ') + ')';
        var currentShadowColour = rgbaEx.exec(currentShadow)[1].split(', ');
        currentShadowColour[3] = 0.5 * targetOpacity;
        var targetShadowColour = 'rgba(' + currentShadowColour.join(', ') + ')';
        $('#headerbar').css('background-color', targetBg);
        $('#headerbar').css('box-shadow', targetShadowColour + currentShadow.replace(rgbaEx, ''));
      });
      $(document).trigger('scroll');
    }
});
