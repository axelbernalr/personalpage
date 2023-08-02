    function toggleMode() {
    const body = $("body");
    const currentMode = body.attr("data-mode");

    if (currentMode === "dark") {
      body.attr("data-mode", "light");
    } else {
      body.attr("data-mode", "dark");
    }
  }
