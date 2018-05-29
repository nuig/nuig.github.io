$(document).ready(function() {
    $(".delete-li").contents().unwrap();
    $('a.abstract').click(function() {
        $(this).parent().parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().parent().find("span.bibtex.hidden").toggleClass('open');
    });
});
