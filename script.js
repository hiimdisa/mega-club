// Tabs functionality
const dayTab = document.getElementById('day-tab');
const nightTab = document.getElementById('night-tab');
const dayPrices = document.getElementById('day-prices');
const nightPrices = document.getElementById('night-prices');

dayTab.addEventListener('click', function() {
    dayTab.classList.add('tab-active');
    dayTab.classList.remove('bg-zinc-800');
    nightTab.classList.remove('tab-active');
    nightTab.classList.add('bg-zinc-800');
    dayPrices.classList.remove('hidden');
    nightPrices.classList.add('hidden');
});

nightTab.addEventListener('click', function() {
    nightTab.classList.add('tab-active');
    nightTab.classList.remove('bg-zinc-800');
    dayTab.classList.remove('tab-active');
    dayTab.classList.add('bg-zinc-800');
    nightPrices.classList.remove('hidden');
    dayPrices.classList.add('hidden');
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
