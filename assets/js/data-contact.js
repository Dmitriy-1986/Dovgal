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
};

let myContact = document.querySelector('#my-contact');
let socialMedia = document.createElement('ul');
let socialMediaList = document.createElement('li');
myContact.append(socialMedia);
socialMedia.append(socialMediaList);

socialMediaList.innerHTML  = `<a href="${dataContact.facebook.url}" title="${dataContact.facebook.title}">${dataContact.facebook.title}</a>`;
socialMediaList.innerHTML += `<a href="${dataContact.twitter.url}" title="${dataContact.twitter.title}">${dataContact.twitter.title}</a>`;
socialMediaList.innerHTML += `<a href="${dataContact.instagram.url}" title="${dataContact.instagram.title}">${dataContact.instagram.title}</a>`;
