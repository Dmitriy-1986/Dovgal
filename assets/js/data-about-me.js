let stringsArray = [' JavaScript', ' React.js', ' Bootstrap', ' PHP', ' MySQL'];

let showMessage = (name, courses, ...rest) => {
    let aboutMe = document.getElementById('#about-me');
    let p = document.createElement('p');
        p.innerHTML = `Hello, my name is ${name}. I finished ${courses}. I've learned ${rest}.`;
        aboutMe.append(p);
}

showMessage('Dima', 'ItStep', ...stringsArray);
