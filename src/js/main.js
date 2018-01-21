
const toggleClassesOnMenuClick = () => {
    $('#menu-icon').click(()=>{
        $('#menu-icon').toggleClass('open');
        $('#navigation').toggleClass('is-open');
        $('#projects-li').removeClass('is-open');
        $('#search-form').removeClass('is-open');
        
        //$('#navigation').hasClass('is-open') ? toggleClassOnElement('#navigation','is-closed'):'';
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

//initiates click functions on document ready.
$(document).ready(()=>{
    toggleClassesOnMenuClick();
    toggleClassesOnSearchIconClick();
    toggleClassOnSubMenuClick();
});
