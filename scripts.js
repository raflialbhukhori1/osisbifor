// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const modal = document.getElementById("photoModal");
    const modalImage = document.getElementById("modalImage");
    const modalDate = document.getElementById("modalDate");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.getElementsByClassName("close")[0];

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("day-mode")) {
            body.classList.remove("day-mode");
            body.classList.add("night-mode");
            themeToggle.textContent = "☀️";
        } else {
            body.classList.remove("night-mode");
            body.classList.add("day-mode");
            themeToggle.textContent = "🌙";
        }
    });

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    document.querySelectorAll(".photo-item img").forEach((img) => {
        img.addEventListener("click", function() {
            const photoItem = this.parentElement;
            modalImage.src = this.src;
            modalDate.textContent = `Tanggal: ${photoItem.getAttribute("data-date")}`;
            modalDescription.textContent = `Deskripsi: ${photoItem.getAttribute("data-description")}`;
            modal.style.display = "block";
            });
            });
            function setupScrollButtons(containerId, leftBtnId, rightBtnId) {
                const container = document.getElementById(containerId);
                const leftBtn = document.getElementById(leftBtnId);
                const rightBtn = document.getElementById(rightBtnId);
        
                leftBtn.addEventListener('click', () => {
                    container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
                });
        
                rightBtn.addEventListener('click', () => {
                    container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
                });
        
                function updateButtons() {
                    const scrollLeft = container.scrollLeft;
                    const maxScrollLeft = container.scrollWidth - container.clientWidth;
                    leftBtn.style.display = scrollLeft > 0 ? 'block' : 'none';
                    rightBtn.style.display = scrollLeft < maxScrollLeft ? 'block' : 'none';
                }
        
                container.addEventListener('scroll', updateButtons);
                updateButtons();
            }
        
            setupScrollButtons('photos2023', 'scrollLeft2023', 'scrollRight2023');
            setupScrollButtons('photos2024', 'scrollLeft2024', 'scrollRight2024');
        });
        
