const Nav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const div = document.createElement("div");
    div.classList.add("pulse");
    div.setAttribute("id", "logo");
    div.innerHTML = `<h2>A <span> Red</span> Affair</h2>`;

    const ul = document.createElement("ul");
    ul.setAttribute("id", "phone-menu");

    const liOne = document.createElement("li");
    liOne.innerHTML = '<li><a href="#home">Home</a></li>';
    const liTwo = document.createElement("li");
    liTwo.innerHTML = '<li><a href="#food-menu"> Menu</a>';
    const liThree = document.createElement("li");
    liThree.innerHTML = '<li><a href="#footer"> contact us</a></li>';
    const liFour = document.createElement("li");
    liFour.innerHTML = '<li><a href="#about-us"> about us</a></li>';
    const li = [liOne, liTwo, liThree, liFour];
    ul.append(...li);

    nav.appendChild(div);
    nav.appendChild(ul);
    return nav;
};

export default Nav;