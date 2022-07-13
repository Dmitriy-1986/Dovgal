let menuNav = document.querySelector('.menu-nav');

menuNav.addEventListener('click', tabs);

function tabs(event) {
    if (event.target.className == 'list') {
        let dataTab = event.target.getAttribute('data-tab');
        let list = document.getElementsByClassName('list');
        let welcomeMessage = document.querySelector('.welcome-message');
        welcomeMessage.classList.add('page-none');

        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
        }

        event.target.classList.add('active');
        let tabBody = document.getElementsByClassName('tab');

        for (let i = 0; i < tabBody.length; i++) {
            if (dataTab == i) {
                tabBody[i].style.display = 'block';
            } else {
                tabBody[i].style.display = 'none';
            }
        }
    }
}
