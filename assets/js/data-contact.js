let dataContact = {
  facebook: {
    title: 'Facebook',
    //url: 'javascript:void(0)'
    url: 'https://www.facebook.com/dovgaldima'
  },
  twitter: {
    title: 'Twitter',
    //url: 'javascript:void(0)'
    url: 'https://twitter.com/DovgalDmitriy'
  },
  instagram: {
    title: 'Instagram',
    //url: 'javascript:void(0)'
    url: 'https://www.instagram.com/dmitriy_dovgal'
  },
};

let myContact = document.querySelector('#my-contact');
let socialMedia = document.createElement('div');
let socialMediaList = document.createElement('p');
myContact.append(socialMedia);
socialMedia.append(socialMediaList);

socialMediaList.innerHTML  = `<a href="${dataContact.facebook.url}" title="${dataContact.facebook.title}" class="social-media">${dataContact.facebook.title}</a>`;
socialMediaList.innerHTML += `<a href="${dataContact.twitter.url}" title="${dataContact.twitter.title}" class="social-media">${dataContact.twitter.title}</a>`;
socialMediaList.innerHTML += `<a href="${dataContact.instagram.url}" title="${dataContact.instagram.title}" class="social-media">${dataContact.instagram.title}</a>`;
socialMediaList.innerHTML += `<br><a href="mailto: dovgal.dima.86@gmail.com?subject=Feedback&body=Message:">
                                <button type="button" class="btn btn-light">                     
                                  Send Feedback 
                                </button>
                              </a>`;
