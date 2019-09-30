const footer = () => {
    const footerContainer = document.createElement('footer');
    footerContainer.setAttribute('id', 'footer');
    footerContainer.classList.add('section' ,'footer', 'd-flex');

    const dummy = document.createElement('div');
    dummy.classList.add('dummy');

    const section = document.createElement('section');
    section.classList.add('footer-container');
    const h2 = document.createElement('h2');
    h2.innerText = `Get in contact with us!`;
    const h3 = document.createElement('h3');
    h3.innerText = ` Plenty Gardens sweet rose street`;

    const form = document.createElement('form');
    form.classList.add('col', 's12');

    const nameInput =  document.createElement('div');
    nameInput.classList.add('row');
    nameInput.innerHTML = `
        <div class="input-field col s12 m6 l6">
            <input placeholder="first name" id="first_name" type="text" class="validate">
            <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s12 m6 l6">
            <input placeholder="last name" id="last_name" type="text" class="validate">
            <label for="last_name">Last Name</label>
        </div>
    `;

    const contact = document.createElement('div');
    contact.classList.add('row');
    contact.innerHTML = `
      <div class="input-field col s12 m12 l6">
        <input value="Enter your email" id="email" type="email" class="validate">
        <label for="email">Email</label>
     </div>
    <div class="input-field col s12 m12 l6">
        <input id="msg" type="text" class="validate">
        <label for="msg"> Enter you message</label>
    </div>
    `;
    const formAppend = [nameInput, contact];
    form.append(...formAppend);

    const map = () => {
        const iframe = document.createElement('iframe')
        iframe.classList.add('map');
        iframe.setAttribute('src',
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.018370430327!2d-74.00073800007976!3d40.717612090418015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598aba48babb%3A0x85834f8875278bbc!2sFrenchette!5e0!3m2!1sen!2sus!4v1569445105800!5m2!1sen!2sus')
        iframe.setAttribute('allowfullscreen', '');

        return iframe
    };

    const copyright = document.createElement('div');
    copyright.classList.add('footer-container');
    const p = document.createElement('p');
    p.classList.add('footer-container');
    p.innerText = '©2019 The read affair';
    copyright.appendChild(p);


    section.append(h2,h3,form);
    const appendList = [dummy,section, map(), copyright];
    footerContainer.append(...appendList);
    return footerContainer

};


export default footer