const banner = document.querySelector('.home_banner_area');
const header = document.querySelector('.header_area');
const footer = document.querySelector('.footer');

banner.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.closest('.primary-btn2')) {
        form.scrollIntoView({block: "center", behavior: "smooth"});
    }
})

header.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.closest('.navbar-brand')) {
        location="index.html";
    } else if (e.target.closest('.nav-link')) {
        footer.scrollIntoView({block: "center", behavior: "smooth"});
    }
})