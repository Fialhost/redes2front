if($(window).width() < 768 ){
    $('#logoBanner').removeClass('d-flex');
    $('#logoBanner').addClass('hidden');
}else{
    $('#logoBanner').removeClass('hidden');
    $('#logoBanner').addClass('d-flex');
}

window.onresize = function() {
    if($(window).width() < 768 ){
        $('#logoBanner').removeClass('d-flex');
        $('#logoBanner').addClass('hidden');
    }else{
        $('#logoBanner').removeClass('hidden');
        $('#logoBanner').addClass('d-flex');
    }
}