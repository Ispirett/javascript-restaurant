

const Main = (() =>{
    const main = document.createElement('main');
    main.setAttribute('id','wrapper');

    const mainWrapper = (elementList) => {
        main.append(...elementList);
        return main

    };

    return {
        mainWrapper
    }

})();


export default Main