// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}


// Get galleryFilter & galleryItems
const galleryFilter = document.querySelector(".gallery-filter"),
  galleryItems = document.querySelectorAll(".gallery-item");

// On event perform
galleryFilter.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    // Deactivate existing active 'filter-item'
    galleryFilter.querySelector(".active").classList.remove("active");

    // Activate new 'filter-item'
    event.target.classList.add("active");

    // Get the filtered value
    const filterValue = event.target.getAttribute("data-filter");

    // Filter the gallery items
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }
});
