const openDrawerIcon = document.getElementById("nav-drawer-div");
const closeDrawerIcon = document.getElementById("close-icon");
const drawerDiv = document.getElementById("drawer-menu");

// Function to handle the drawer toggle
let isDrawerShown = false;
const openDrawer = () => {
    drawerDiv.classList.remove("hidden-drawer-menu");
    drawerDiv.classList.add("drawer-menu");
    isDrawerShown = true
}

const closeDrawer = () => {
    drawerDiv.classList.remove("drawer-menu");
    drawerDiv.classList.add("hidden-drawer-menu");
    isDrawerShown = false
}

openDrawerIcon.addEventListener('click', openDrawer)

closeDrawerIcon.addEventListener('click', closeDrawer)