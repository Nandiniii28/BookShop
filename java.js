  document.querySelectorAll(".accordion").forEach(button => {
  button.addEventListener("click", () => {
    // Toggle active class
    button.classList.toggle("active");

    // Get the corresponding panel (the next element)
    const panel = button.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Collapse
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Expand
    }
  });
});

   
   
   
   
   
  