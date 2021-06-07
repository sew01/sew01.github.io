$(document).ready(function(){
    // get the tab from url
    var hash = window.location.hash;
    // if a hash is present (when you come to this page)
    if (hash !='') {
        // show the tab
        $('.nav-pills a[href="' + hash + '"]').tab('show');
    }
});