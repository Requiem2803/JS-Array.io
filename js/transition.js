//hides the main display whilst ensuring the page is still useable without javascript.
$("body").css("display","none");

//reveals the content as soon as the page is done loading.
$(function() {
    $("body").fadeIn(1500);
    $("h2, #assigned-images").css("display","none");
});