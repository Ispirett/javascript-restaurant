const sectionAboutUs = () => {
    const container = document.createElement("div");
    container.setAttribute("id", "about-us");
    container.classList.add("section", "about_us");

    const divOne = document.createElement("div");
    divOne.classList.add("center", "about_us-header", "m-l-a", "m-r-a", "s12");
    divOne.innerHTML = `
        <h4 class="heading">Get To Know Us</h4>
          <p class="w-p-8 m-l-a m-r-a">
                        We love restaurants as much as you do. 
                        That’s why we’ve been helping them fill 
                        tables since 1999. Welcome to elixir restaurant
        </p>
    `;

    const divTwo = document.createElement("div");
    divTwo.classList.add("row", "w-p-7", "about_us-article");
    divTwo.innerHTML = `
     <article class="col s12 m12 l6  ">
       <img class=" materialboxed responsive-img hoverable article-img" src="./dist/assets/img/nice.jpg" alt=img"">
    </article>
    
    <article class="col s12 m12 l6">
    <h1 class="heading">The History</h1>
    <p>
        We love restaurants as much as you do.
        That’s why we’ve been helping them fill tables since 1999. 
        Welcome to elixir restaurant We love restaurants as much as you do. 
        That’s why we’ve been helping them fill tables since 1999. Welcome to elixir restaurant
    </p>
    <p>
        We love restaurants as much as you do. 
        That’s why we’ve been helping them fill tables since 1999. 
        Welcome to elixir restaurant We love restaurants as much as you do. 
        That’s why we’ve been helping them fill tables since 1999. Welcome to elixir restaurant
    </p>
    </article>
    `;

    const divThree = document.createElement("div");
    divThree.classList.add("row", "w-p-7", "about_us-article");
    divThree.innerHTML = `
   

    <article class="col  s12 m12 l6">
        <h1 class="heading">The History</h1>
        <p>
            We love restaurants as much as you do. 
            That’s why we’ve been helping them fill tables since 1999. 
            Welcome to elixir restaurant We love restaurants as much as you do. 
            That’s why we’ve been helping them fill tables since 1999. Welcome to elixir restaurant
        </p>
        <p>
            We love restaurants as much as you do. 
            That’s why we’ve been helping them fill tables since 1999. 
            Welcome to elixir restaurant We love restaurants as much as you do. 
            That’s why we’ve been helping them fill tables since 1999. 
            Welcome to elixir restaurant

    </article>
    <article  class="col s12 m12 l6 ">
        <img class="materialboxed  responsive-img hoverable article-img" src="./dist/assets/img/free.jpg" alt="">
    </article>
   `;

    const appendList = [divOne, divTwo, divThree];
    container.append(...appendList);
    return container;
};

export default sectionAboutUs;