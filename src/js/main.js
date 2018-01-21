const toggleClassOnElement = (selector, className) => {
    $(selector).toggleClass(className);
}

const handleMenuClick = () => {
    $(document).ready(()=>{
        $('#menu-icon').click(()=>{
            toggleClassOnElement('#menu-icon','open');
            toggleClassOnElement('#navigation','is-open');
            toggleClassOnElement('#search-icon','is-open');
            //$('#navigation').hasClass('is-open') ? toggleClassOnElement('#navigation','is-closed'):'';
        });
    });
} 

handleMenuClick();