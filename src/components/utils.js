import materialize from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

window.onload = () => {
    materialize.AutoInit();
    fullpage("#wrapper", {
        sectionsColor: ["grey", "white", "orange", "purple"],
        navigation: true,
        navigationTooltips: ["Home", "main", "main", "footer"],
        showActiveTooltip: true,
        slidesNavigation: true
    });
};

const toggleNav = (() => {
    const logo = document.getElementById("logo");
    const ul = document.getElementById("phone-menu");

    const init = () =>
        (logo.onclick = () => {
            let style = getComputedStyle(ul);
            if (style.top === "-175px") {
                ul.style.top = "175px";
            } else {
                ul.style.top = "-175px";
            }
        });
    return {
        init
    };
})();

toggleNav.init();