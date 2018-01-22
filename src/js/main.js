const toggleClassesOnMenuClick = () => {
    $('#menu-icon').click(()=>{
        $('#menu-icon').toggleClass('open');
        $('#navigation').toggleClass('is-open');
        $('#projects-li').removeClass('is-open');
        $('#search-form').removeClass('is-open');
    });
}

const toggleClassOnSubMenuClick = () => {
    $('#projects-li').click(()=>{
        $('#projects-li').toggleClass('is-open');
    });
}

const toggleClassesOnSearchIconClick = () => {
    $('#search-icon').click(()=>{
        $('#search-form').toggleClass('is-open');
        $('#menu-icon').removeClass('open');
        $('#navigation').removeClass('is-open');
        $('#projects-li').removeClass('is-open');
    });
}

const smoothScrollToAHref = () => {
    $('a[href*=\\#]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
}


//initiates click functions on document ready.
$(document).ready(()=>{
    toggleClassesOnMenuClick();
    toggleClassesOnSearchIconClick();
    toggleClassOnSubMenuClick();
    smoothScrollToAHref();
});

