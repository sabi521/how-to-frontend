/**
 * Verify if the DOM is ready
 * @param {function} fn
 * @return {void}
 */
function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

/**
 * Application entrypoint
 */
domReady(() => {
  console.log("The Dom is ready! 🚀");

  /**
   * search bar in the banner
   */
  const searchInput = document.getElementById("default-search");
  const searchButton = document.getElementById("search-icon");
  searchInput.addEventListener("input", function () {
    if (searchInput.value.length > 0) {
      searchButton.classList.add("hidden");
    } else {
      searchButton.classList.remove("hidden");
    }
  });

  /**
   * tabs for the home page
   */
  let tabs = document.querySelectorAll(".tab");
  let panels = document.querySelectorAll(".tab-panel");

  // Set the first tab and panel as selected by default
  tabs[0].querySelector("h3").classList.add("selected-heading");
  tabs[0].classList.add("selected-tab");
  panels[0].classList.add("block");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      let tabTarget = tab.getAttribute("aria-controls");

      // Change the selected tab heading color and border
      tabs.forEach((t) => {
        t.querySelector("h3").classList.remove("selected-heading");
        t.classList.remove("selected-tab");
        t.setAttribute("aria-selected", "false");
      });
      tab.querySelector("h3").classList.add("selected-heading");
      tab.classList.add("selected-tab");
      tab.setAttribute("aria-selected", "true");

      // Show/Hide the content panels
      panels.forEach((panel) => {
        let panelId = panel.getAttribute("id");
        if (tabTarget === panelId) {
          panel.classList.remove("hidden");
          panel.classList.add("block");
        } else {
          panel.classList.remove("block");
          panel.classList.add("hidden");
        }
      });
    });
  });

  /** Slider for The most popular section */

  var splide1 = new Splide("#splide1", {
    type: "loop", // slide loop fade
    perPage: 4,
    gap: 40,
    fixedWidth: 306,
    pagination: false,
    arrows: false,
    easing: "ease",
  });
  splide1.mount();

  /** Slider for New Articles section */

  var splide2 = new Splide("#splide2", {
    type: "loop", // slide loop fade
    perPage: 4,
    gap: 40,
    fixedWidth: 306,
    pagination: false,
    arrows: false,
    easing: "ease",
  });
  splide2.mount();

  /** Slider for whats new on sportsbook section */

  var splide = new Splide("#splide3", {
    type: "loop",
    gap: 10,
    fixedWidth: 326,
    pagination: false,
    arrows: false,
    easing: "ease",
  });
  splide.mount();

  // Function to handle slider navigation
  function handleSliderNavigation(event, direction) {
    var sliderId = event.currentTarget.getAttribute("data-slider-id");
    var splide = sliderId === "splide1" ? splide1 : splide2;
    splide.go(direction);
  }

  // Adding event listeners to the SVG buttons
  document.querySelectorAll(".slider-prev-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      handleSliderNavigation(event, "-1");
    });
  });

  document.querySelectorAll(".slider-next-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      handleSliderNavigation(event, "+1");
    });
  });
});
