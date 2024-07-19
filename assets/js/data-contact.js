(function() {
  const elementContact = document.querySelector('#my-contact');
  const myContact = {
    socialMedia: {
      data: {
        facebook: {
          title: 'Facebook',
          url: 'https://www.facebook.com/dovgaldima'
        },
        vk: {
          title: 'VK',
          url: 'https://m.vk.com/id790847045'
        },
        ok: {
          title: 'OK',
          url: 'https://ok.ru/profile/582209131417'
        },
        twitter: {
          title: 'Twitter',
          url: 'https://twitter.com/DovgalDmitriy'
        },
        instagram: {
          title: 'Instagram',
          url: 'https://www.instagram.com/dmitriy_dovgal'
        },
        telegram: {
          title: 'Telegram',
          url: 'https://t.me/Dovgal_Dima'
        },
        linkedin: {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/dmitriy-dovgal-2672141a2/'
        }
      },
      render: function () {
        let socialMedia = document.createElement('div');
        let socialMediaList = document.createElement('p');
        socialMediaList.classList.add('social-links-container');
        elementContact.append(socialMedia);
        socialMedia.append(socialMediaList);

        for (let key in this.data) {
          socialMediaList.innerHTML += `<a href="${this.data[key].url}" title="${this.data[key].title}" class="social-media">${this.data[key].title}</a>`;
        }
      }
    },
    stackoverflow: {
      url: 'https://ru.stackoverflow.com/users/441480/dovgal-dima',
      img: 'https://ru.stackoverflow.com/users/flair/441480.png?theme=dark',
      render: function () {
        elementContact.innerHTML += `<p><a href="${this.url}" style="margin-top: 10px; text-decoration: none;">
                                      <img src="${this.img}" width="208" height="58" alt="Профиль участника Dovgal Dima на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов" title="Профиль участника Dovgal Dima на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов">
                                    </a></p>`;
      }
    },
    codewars: {
      url: 'https://www.codewars.com/users/Dovgal_Dima',
      badge: 'https://www.codewars.com/users/Dovgal_Dima/badges/small',
      render: function () {
        elementContact.innerHTML += `<p><a href="${this.url}"><img src="${this.badge}" alt="Codewars Badge"></a></p>`;
      }
    },
    feedback: {
      email: 'dovgal.dima.86@gmail.com',
      render: function () {
        elementContact.innerHTML += `<a href="mailto: ${this.email}?subject=Feedback&body=Message:">
                                      <button type="button" class="btn btn-light">
                                        Send Feedback 
                                      </button>
                                    </a>`;
      }
    },
    init: function () {
      this.socialMedia.render();
      this.stackoverflow.render();
      this.codewars.render();
      this.feedback.render();
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    myContact.init();
  });
})();
