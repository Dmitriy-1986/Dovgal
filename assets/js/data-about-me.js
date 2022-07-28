let stringsArray = [' JavaScript', ' React.js', ' Bootstrap', ' PHP', ' MySQL'];

let showMessage = (name, courses, ...rest) => {
    return `Hello, my name is ${name}. I finished ${courses}. I've learned ${rest}...`;       
}

let aboutMe = document.querySelector('#about-me');
let p = document.createElement('p');
p.innerHTML = showMessage('Dima', 'ItStep', ...stringsArray);
aboutMe.append(p);

let linkGitHub = document.createElement('a');
linkGitHub.classList.add('social-media');
linkGitHub.setAttribute('href', 'https://github.com/Dmitriy-1986');
linkGitHub.innerHTML = 'GitHub';
aboutMe.append(linkGitHub);
