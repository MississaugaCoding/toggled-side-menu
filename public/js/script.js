var sidemenu = document.querySelector('.sidemenu');
var menutoggle = document.querySelector('.menutoggle');

menutoggle.addEventListener('click',toggleSideMenu);

function toggleSideMenu() {
    
    if ( sidemenu.style.marginLeft === '0px' ) {
        sidemenu.style.marginLeft = '-200px';
        menutoggle.innerHTML = '>';
    } else {
        sidemenu.style.marginLeft = '0px';
        menutoggle.innerHTML = '<';
    }
    
}