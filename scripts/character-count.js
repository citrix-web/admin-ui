$( document ).ready(function() {

var supportOnInput = 'oninput' in document.createElement('input');

$("textarea[maxlength]").each(function() {

    var $this = $(this);
    var maxLength = parseInt($this.attr('maxlength'));
    $this.attr('maxlength', null);

    var el = $("<p class=\"character-count\">" + maxLength + " characters left.</p>");
    el.insertBefore($this);

    $this.bind(supportOnInput ? 'input' : 'keyup', function() {
        var cc = $this.val().length;
        if(maxLength > cc) {
            el.text((maxLength - cc) + " characters left.");
            el.css('color', 'black');

        }
        if(maxLength < cc) {
            el.text(Math.abs(maxLength - cc) + " characters over the limit.");
            el.css('color', 'red');
        } else {
            el.css('color', null);
        }
    });
});

});
