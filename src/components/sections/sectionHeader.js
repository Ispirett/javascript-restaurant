const sectionHeader = () =>{
    const header = document.createElement('header');
    header.setAttribute('id', 'home');
    header.classList.add('section', 'header');

    const headerDiv = document.createElement('div');
    headerDiv.classList.add('hero', 'center', 'bloom');

    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = 'A <span class="dance italiano">Red </span> Affair';

    const h3 = document.createElement('h3');
    h3.innerText = 'UNPRETENTIOUS FOOD AND WINE SERVED WITH TOP-NOTCH HOSPITALITY';
    const p =  document.createElement('p');
    p.innerText = 'Sweetness in the heart of every serve';

    const content = [h1,h3,p];
    headerDiv.append(...content);
    header.appendChild(headerDiv);

    return header
};


export default sectionHeader