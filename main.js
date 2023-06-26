    function toggleMode() {
      const body = document.body;
      const currentMode = body.getAttribute("data-mode");

      if (currentMode === "dark") {
        body.setAttribute("data-mode", "light");
      } else {
        body.setAttribute("data-mode", "dark");
      }
    }
