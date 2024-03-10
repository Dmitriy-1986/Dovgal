const myInfo = (() => {
    const stringsArray = [' JavaScript', ' React.js', ' Bootstrap', ' PHP', ' MySQL'];
  
    const showMessage = (name, courses, ...rest) => {
      return `My name is ${name}. I finished ${courses}. I've learned ${rest.join(', ')}...`;       
    };
  
    const renderAboutMe = () => {
      const aboutMe = document.querySelector('#about-me');
      
      const p = document.createElement('p');
      p.innerHTML = showMessage('Dima', 'ItStep', ...stringsArray);
      aboutMe.append(p);
  
      const linkGitHub = document.createElement('a');
      linkGitHub.classList.add('social-media');
      linkGitHub.setAttribute('href', 'https://github.com/Dmitriy-1986');
      linkGitHub.innerHTML = 'GitHub';
      aboutMe.append(linkGitHub);
    };
  
    return {
      init: () => {
        document.addEventListener('DOMContentLoaded', () => {
          renderAboutMe();
        });
      }
    };
})();
  
myInfo.init();
  
