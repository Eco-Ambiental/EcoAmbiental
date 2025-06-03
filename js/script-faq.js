document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq-item");
    items.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        items.forEach((el) => el.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    });
  });