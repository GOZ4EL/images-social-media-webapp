(function () {
  let jquery_version = "3.4.1";
  let site_url = "https://127.0.0.1:8000/";
  let static_url = site_url + "static/";
  let min_width = 100;
  let min_height = 100;

  function bookmarklet(msg) {}

  // Check if jquery is loaded
  if (typeof window.jQuery != "undefined") {
    bookmarklet();
  } else {
    // Check for conflicts
    let conflict = typeof window.$ != "undefined";
    // Create the script and point to google API
    let script = document.createElement("script");
    script.src =
      "//ajax.googleapis.com/ajax/libs/jquery/" +
      jquery_version +
      "/jquery.min.js";
    // Add the script to the 'head' for processing
    document.head.appendChild(script);
    // Create a way to wait until script loading
    let attempts = 15;
    (function () {
      // Check again if jquery is undefined
      if (typeof window.jQuery == "undefined") {
        if (--attempts > 0) {
          // Calls himself in a few milliseconds
          window.setTimeout(arguments.callee, 250);
        } else {
          // Too much attempts to load, send error
          alert("An error occurred while loading jQuery");
        }
      } else {
        bookmarklet();
      }
    })();
  }
})();
