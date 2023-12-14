let dataContact = {
  facebook: {
    title: 'Facebook',
    url: 'https://www.facebook.com/dovgaldima'
  },
  twitter: {
    title: 'Twitter',
    url: 'https://twitter.com/DovgalDmitriy'
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/dmitriy_dovgal'
  },
  linkedin: {
     title: 'LinkedIn',
     url: 'https://www.linkedin.com/mwlite/in/dmitriy-dovgal-2672141a2'
  },
};

let myContact = document.querySelector('#my-contact');
let socialMedia = document.createElement('div');
let socialMediaList = document.createElement('p');
socialMediaList.classList.add('social-links-container');
myContact.append(socialMedia);
socialMedia.append(socialMediaList);

socialMediaList.innerHTML  = `<a href="${dataContact.facebook.url}" title="${dataContact.facebook.title}" class="social-media">${dataContact.facebook.title}</a>`;
socialMediaList.innerHTML += `<a href="${dataContact.twitter.url}" title="${dataContact.twitter.title}" class="social-media">${dataContact.twitter.title}</a>`;
socialMediaList.innerHTML += `<a href="${dataContact.instagram.url}" title="${dataContact.instagram.title}" class="social-media">${dataContact.instagram.title}</a>`;
socialMediaList.innerHTML += `<a href="${dataContact.linkedin.url}" title="${dataContact.linkedin.title}" class="social-media">${dataContact.linkedin.title}</a>`;
socialMediaList.innerHTML += `<br><br><a href="https://ru.stackoverflow.com/users/441480/dovgal-dima" style="margin-top: 10px; text-decoration: none;">
                                <img src="https://ru.stackoverflow.com/users/flair/441480.png?theme=dark" width="208" height="58" alt="Профиль участника Dovgal Dima на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов" title="Профиль участника Dovgal Dima на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов">
                              </a>`;
socialMediaList.innerHTML += `<br><br><img src="https://www.codewars.com/users/Dovgal_Dima/badges/small" alt="Codewars Badge">`;
socialMediaList.innerHTML += `<a href="mailto: dovgal.dima.86@gmail.com?subject=Feedback&body=Message:">
                                <button type="button" class="btn btn-light">                     
                                  Send Feedback 
                                </button>
                              </a>`;






