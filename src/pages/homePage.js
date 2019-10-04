import Nav from "../components/nav";
import Main from "../components/main";
import sectionHeader from "../components/sections/sectionHeader";
import sectionAboutUs from "../components/sections/sectionAboutUs";
import sectionFoodMenu from "../components/sections/sectionFoodMenu";
import footer from "../components/sections/footer";


const root = document.getElementById("root");

const mainContent = [
    sectionHeader(),
    sectionAboutUs(),
    sectionFoodMenu(),
    footer()
];

const appendList = [Nav(), Main.mainWrapper(mainContent)];
root.append(...appendList);