const dataProject = [
     {
        images: './assets/image/flowchart.png',
        title: 'Landing page',
        url: 'https://dmitriy-1986.github.io/layout-course/'
    },
    // {
    //     images: './assets/image/flowchart.png',
    //     title: 'Landing page',
    //     url: 'https://dmitriy-1986.github.io/layout-course/'
    // }
];

let myPoject = document.querySelector('#my-project');
let ul = document.createElement('ul');
myPoject.append(ul);

for (let i = 0; i < dataProject.length; i++) {
    let li = document.createElement('li');
    li.classList.add('project-list');
    li.innerHTML = `<img src="${dataProject[i].images}" class="project-cart-img">
                        <h3 class="project-title"><a target="_blank" class="project-link" 
                        href="${dataProject[i].url}">
                              ${dataProject[i].title}</a></h3>`;
    ul.append(li);
}