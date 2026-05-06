document.addEventListener("DOMContentLoaded", () => {
    const cards = [...document.querySelectorAll(".experience-card")];
    const dots = [...document.querySelectorAll(".experience-dot")];
    const prevBtn = document.getElementById("prevExperience");
    const nextBtn = document.getElementById("nextExperience");
  
    const title = document.getElementById("experienceTitle");
    const text = document.getElementById("experienceText");
    const tag = document.getElementById("experienceTag");
  
    let currentIndex = 0;
  
    function updateExperience(index) {
      currentIndex = index;
  
      cards.forEach((card, i) => {
        card.classList.toggle("active", i === currentIndex);
      });
  
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
  
      const activeCard = cards[currentIndex];
      title.textContent = activeCard.dataset.title;
      text.textContent = activeCard.dataset.text;
      tag.textContent = activeCard.dataset.tag;
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => updateExperience(index));
    });
  
    prevBtn.addEventListener("click", () => {
      const index = (currentIndex - 1 + cards.length) % cards.length;
      updateExperience(index);
    });
  
    nextBtn.addEventListener("click", () => {
      const index = (currentIndex + 1) % cards.length;
      updateExperience(index);
    });
  
    cards.forEach((card, index) => {
      card.addEventListener("click", () => updateExperience(index));
    });
  
    updateExperience(0);
  });