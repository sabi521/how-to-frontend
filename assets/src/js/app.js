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

  /** Slider for The most popular section */

  // Function to initialize a Splide slider if it exists
  function initializeSplide(selector, options) {
    var element = document.querySelector(selector);
    if (element) {
      var splide = new Splide(selector, options);
      splide.mount();
      return splide;
    }
    return null;
  }

  // Initialize sliders if they exist on the page
  var splide1 = initializeSplide("#splide1", {
    type: "loop", // slide loop fade
    perPage: 4,
    gap: 40,
    fixedWidth: 306,
    pagination: false,
    arrows: false,
    easing: "ease",
  });

  var splide2 = initializeSplide("#splide2", {
    type: "loop", // slide loop fade
    perPage: 4,
    gap: 40,
    fixedWidth: 306,
    pagination: false,
    arrows: false,
    easing: "ease",
  });

  var splide3 = initializeSplide("#splide3", {
    type: "loop",
    gap: 10,
    fixedWidth: 326,
    pagination: false,
    arrows: false,
    easing: "ease",
  });

  // Function to handle slider navigation
  function handleSliderNavigation(event, direction) {
    var sliderId = event.currentTarget.getAttribute("data-slider-id");
    var splide = sliderId === "splide1" ? splide1 : splide2;
    if (splide) {
      splide.go(direction);
    }
  }

  // Adding event listeners to the SVG buttons if they exist
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

  /**
   * Tabs for the home page
   */
  let tabs = document.querySelectorAll(".tab");
  let panels = document.querySelectorAll(".tab-panel");

  if (tabs.length > 0 && panels.length > 0) {
    // Set the first tab and panel as selected by default
    tabs[0].querySelector("h3").classList.add("selected-heading");
    tabs[0].querySelector("p").classList.add("selected-paragraph");
    tabs[0].classList.add("selected-tab");
    panels[0].classList.add("block");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        // Change the selected tab heading color and border
        tabs.forEach((t) => {
          t.querySelector("h3").classList.remove("selected-heading");
          t.querySelector("p").classList.remove("selected-paragraph");
          t.classList.remove("selected-tab");
          t.setAttribute("aria-selected", "false");
        });
        tab.querySelector("h3").classList.add("selected-heading");
        tab.querySelector("p").classList.add("selected-paragraph");
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
  }

  /**
   * Search bar in the banner
   */
  const searchInput = document.getElementById("default-search");
  const searchButton = document.getElementById("search-icon");

  if (searchInput && searchButton) {
    searchInput.addEventListener("input", function () {
      if (searchInput.value.length > 0) {
        searchButton.classList.add("hidden");
      } else {
        searchButton.classList.remove("hidden");
      }
    });
  }

  /**
   * How to bet search form
   */
  function expandSearch() {
    var headerSearchInput = document.getElementById("headerSearchInput");
    var headerSearchForm = document.getElementById("headerSearchForm");
    var headerSearchBtn = document.getElementById("headerSearchBtn");
    var headerCloseBtn = document.getElementById("headerCloseBtn");

    if (
      headerSearchForm &&
      headerSearchForm.classList.contains("max-w-[278px]")
    ) {
      headerSearchForm.classList.remove("max-w-[278px]");
      headerSearchForm.classList.add("max-w-full");
      headerSearchInput.classList.remove("hidden");
      headerSearchInput.placeholder = "";
      headerSearchInput.focus();
      headerSearchInput.classList.add("pl-14");
      headerSearchBtn.classList.add("left-5"); // Move search button to the left
      headerCloseBtn.classList.remove("hidden"); // Show close button
    }
  }

  function collapseSearch() {
    var headerSearchInput = document.getElementById("headerSearchInput");
    var headerSearchForm = document.getElementById("headerSearchForm");
    var headerSearchBtn = document.getElementById("headerSearchBtn");
    var headerCloseBtn = document.getElementById("headerCloseBtn");

    if (headerSearchForm && headerSearchForm.classList.contains("max-w-full")) {
      headerSearchForm.classList.remove("max-w-full");
      headerSearchForm.classList.add("max-w-[278px]");
      headerSearchInput.classList.add("hidden");
      headerSearchInput.classList.remove("pl-14");
      headerSearchInput.placeholder = "search"; // Restore the placeholder
      headerSearchBtn.classList.remove("left-5"); // Move search button back
      headerCloseBtn.classList.add("hidden"); // Hide close button
      headerSearchBtn.classList.remove("hidden"); // Show search button
    }
  }

  var headerSearchBtn = document.getElementById("headerSearchBtn");
  var headerSearchInput = document.getElementById("headerSearchInput");
  var headerCloseBtn = document.getElementById("headerCloseBtn");

  if (headerSearchBtn && headerSearchInput && headerCloseBtn) {
    headerSearchBtn.addEventListener("click", expandSearch);
    headerSearchInput.addEventListener("focus", expandSearch);
    headerCloseBtn.addEventListener("click", collapseSearch);
  }

  /** Search functionality show and hide 404 page */

  const customSearchInput = document.getElementById("custom-search-input");
  const customSearchIcon = document.getElementById("custom-search-icon");
  const customCloseIcon = document.getElementById("custom-close-icon");

  if (customSearchInput && customSearchIcon && customCloseIcon) {
    const placeholderText = customSearchInput.getAttribute("placeholder");

    customSearchInput.addEventListener("focus", function () {
      customSearchIcon.classList.add("hidden");
      customCloseIcon.classList.remove("hidden");
      customSearchInput.setAttribute("placeholder", "");
    });

    customSearchInput.addEventListener("blur", function () {
      if (customSearchInput.value.length === 0) {
        customSearchIcon.classList.remove("hidden");
        customCloseIcon.classList.add("hidden");
      }
      customSearchInput.setAttribute("placeholder", placeholderText);
    });

    customCloseIcon.addEventListener("click", function () {
      customSearchInput.value = "";
      customSearchIcon.classList.remove("hidden");
      customCloseIcon.classList.add("hidden");
      customSearchInput.setAttribute("placeholder", placeholderText);
      customSearchInput.focus();
    });

    document.addEventListener("click", function (event) {
      if (
        event.target !== customSearchInput &&
        event.target !== customCloseIcon
      ) {
        if (customSearchInput.value.length === 0) {
          customSearchIcon.classList.remove("hidden");
          customCloseIcon.classList.add("hidden");
          customSearchInput.setAttribute("placeholder", placeholderText);
        }
      }
    });
  }

  /**
   * Dropdown menu
   */
  const dropdownBtn = document.querySelector(".agent_dropdown_btn");
  const dropdownMenu = document.getElementById("agentDropdown");

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener("click", function () {
      dropdownMenu.classList.toggle("hidden");
    });
  }

  /**
   * Dropdown options desktop terms page
   */

  const options = document.querySelectorAll(".option");

  if (options.length > 0) {
    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Remove 'selected' class from all options
        options.forEach((opt) => opt.classList.remove("selected"));

        // Add 'selected' class to the clicked option
        this.classList.add("selected");
      });
    });
  }
});
