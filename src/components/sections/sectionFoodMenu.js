const sectionFoodMenu = () => {
    const container = document.createElement('div');
    container.setAttribute('id','food-menu');
    container.classList.add('section', 'food-menu');

    const foodTabs = document.createElement('div');
    foodTabs.classList.add('row','food-tabs');
    foodTabs.innerHTML =`
    <div class="col s12">
        <ul class="tabs">
            <li class="tab col s3"><a href="#best-selling">Best Selling</a></li>
            <li class="tab col s3"><a class="active" href="#top-meals">Top Meals</a></li>
            <li class="tab col s3 "><a href="#finest-picks">Finest Picks</a></li>
            <li class="tab col s3"><a href="#deserts">Deserts</a></li>
        </ul>
    </div>
    `;

    const bestSelling = document.createElement('div');
    bestSelling.setAttribute('id', 'best-selling');
    bestSelling.classList.add('col', 's12');
    bestSelling.innerHTML = `
      <div class="row">        
        <section class="white-text col s12 m12  l6 t-center meals ">
            <h1 class="">Best Meals</h1>
            <h3 class="">World class chefs</h3>
            <div class="meals_article-container  d-flex justify-c ">
                <article class="w-2 ">

                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>
                <article class="w-2 ">

                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>

            </div>

            <div class="meals  d-flex justify-c ">
                <article class="w-2 ">

                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>
                <article class="w-2 ">

                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>

            </div>
        </section>
        <!-- end dishes -->
        <section class="white-text col s12 m12 l6 t-center meals  ">

            <h1 class="">Best Meals</h1>
            <h3 class="">World class chefs</h3>
            <div class="meals_article-container  d-flex justify-c ">
                <article class="w-2 ">
                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>
                <article class="w-2 ">
                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>

            </div>

            <div class="meals  d-flex justify-c ">
                <article class="w-2 ">
                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>
                <article class="w-2 ">
                    <h5>English Breakfast..... <i>$100.00</i></h5>
                    <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                </article>

            </div>
        </section>
    </div>
    `;

    const topMeals = document.createElement('div');
    topMeals.setAttribute('id','best-selling');
    topMeals.classList.add('col','s12');
    topMeals.innerHTML = `
        <div class="row">
                            <!-- dishes -->
                            <section class="white-text col s12 m12  l6 t-center meals ">
                                <h1 class="">Best Meals</h1>
                                <h3 class="">World class chefs</h3>
                                <div class="meals_article-container  d-flex justify-c ">
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>

                                <div class="meals  d-flex justify-c ">
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>



                            </section>
                            <!-- end dishes -->
                            <section class="white-text col s12 m12 l6 t-center meals  ">

                                <h1 class="">Best Meals</h1>
                                <h3 class="">World class chefs</h3>
                                <div class="meals_article-container  d-flex justify-c ">
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>

                                <div class="meals  d-flex justify-c ">
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>
                            </section>
                        </div>
    `;

    const finestPicks = document.createElement('div');
    finestPicks.setAttribute('id','finest-picks');
    finestPicks.classList.add('col','s12');
    finestPicks.innerHTML = `
        <div class="row">
                            <!-- dishes -->
                            <section class="white-text col s12 m12  l6 t-center meals ">
                                <h1 class="">Best Meals</h1>
                                <h3 class="">World class chefs</h3>
                                <div class="meals_article-container  d-flex justify-c ">
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>

                                <div class="meals  d-flex justify-c ">
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>



                            </section>
                            <!-- end dishes -->
                            <section class="white-text col s12 m12 l6 t-center meals  ">

                                <h1 class="">Best Meals</h1>
                                <h3 class="">World class chefs</h3>
                                <div class="meals_article-container  d-flex justify-c ">
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>

                                <div class="meals  d-flex justify-c ">
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>
                            </section>
                        </div>
    `;

    const deserts = document.createElement('div');
    deserts.setAttribute('id','deserts');
    deserts.classList.add('col','s12');
    deserts.innerHTML = `
        <div class="row">
                            <!-- dishes -->
                            <section class="white-text col s12 m12  l6 t-center meals ">
                                <h1 class="">Best Meals</h1>
                                <h3 class="">World class chefs</h3>
                                <div class="meals_article-container  d-flex justify-c ">
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>

                                <div class="meals  d-flex justify-c ">
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">

                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>



                            </section>
                            <!-- end dishes -->
                            <section class="white-text col s12 m12 l6 t-center meals  ">

                                <h1 class="">Best Meals</h1>
                                <h3 class="">World class chefs</h3>
                                <div class="meals_article-container  d-flex justify-c ">
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>

                                <div class="meals  d-flex justify-c ">
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>
                                    <article class="w-2 ">
                                        <h5>English Breakfast..... <i>$100.00</i></h5>
                                        <p>Scrambled eggs with crispy bacon, sausage, black pudding, tomato & mushroom.</p>
                                    </article>

                                </div>
                            </section>
                        </div>
    `;
    const tabList = [bestSelling, topMeals, finestPicks, deserts];
    foodTabs.append(...tabList);
    container.appendChild(foodTabs);
    return container
};


export default sectionFoodMenu