function toggleBox(parent, boxClass) {
    isOpen = parent.find(boxClass+'.open').length;
    $(".abstract.hidden.open").toggleClass('open'); // close all abstracts
    $(".bibtex.hidden.open").toggleClass('open'); // close all bibtex
    if (!isOpen) { parent.find(boxClass).toggleClass('open'); }
};

$(document).ready(function() {
    $(".delete-li").contents().unwrap();
    $('a.abstract').click(function() {
        toggleBox($(this).parent().parent().parent(), ".abstract.hidden");
    });
    $('a.bibtex').click(function() {
        toggleBox($(this).parent().parent().parent(), "span.bibtex.hidden");
    });
});
