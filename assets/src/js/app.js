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
   * most_popular slider home page
   */

  var slider = tns({
    container: ".most_popular-slider",
    controlsText: [
      '<img src="/assets/src/img/arrow-left.png" />',
      '<img src="/assets/src/img/arrow-right.png" />',
    ],
    items: 3,
    slideBy: "page",
    fixedWidth: 272,
    gutter: 24,
    responsive: {
      768: {
        fixedWidth: 306,
        gutter: 40,
      },
    },
  });

  var slider = tns({
    container: ".new_article-slider",
    controlsText: [
      '<img src="/assets/src/img/arrow-left.png" />',
      '<img src="/assets/src/img/arrow-right.png" />',
    ],
    items: 3,
    slideBy: "page",
    fixedWidth: 272,
    gutter: 24,
    responsive: {
      768: {
        fixedWidth: 306,
        gutter: 40,
      },
    },
  });

  var slider = tns({
    container: ".new_sportbook_slider",
    controls: false,
    items: 3,
    slideBy: "page",
    fixedWidth: 300,
    gutter: 10,
    responsive: {
      768: {
        fixedWidth: 326,
      },
    },
  });

  /*  
toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
});
