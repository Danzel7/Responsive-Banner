function flip() {
    document.getElementById('banner_wrapper').classList.toggle('flip');
    
    setTimeout(function() {
        document.getElementById('banner_front').classList.toggle('hide');
        document.getElementById('banner_back').classList.toggle('hide');
    }, 500);
}