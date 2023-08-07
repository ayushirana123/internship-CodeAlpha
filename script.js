document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("survey-form");
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;
  const formData = {};

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Implement backend submission here (not covered in this example)
    console.log("Form data to be submitted:", formData);
    alert("Survey submitted!");
  });

  function showPage(pageIndex) {
    pages.forEach((page, index) => {
      if (index === pageIndex) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });
  }

  document.querySelectorAll(".next-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage++;
      if (currentPage >= pages.length) {
        currentPage = pages.length - 1;
      }
      showPage(currentPage);
    });
  });

  document.querySelectorAll(".prev-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage--;
      if (currentPage < 0) {
        currentPage = 0;
      }
      showPage(currentPage);
    });
  });

  form.addEventListener("input", (e) => {
    const inputField = e.target;
    formData[inputField.id] = inputField.value;
  });

  showPage(currentPage);
});
