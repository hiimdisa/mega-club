// Переключение День/Вечер
const btns = document.querySelectorAll('.toggle-btn');
const lists = document.querySelectorAll('.tariffs-list');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        lists.forEach(l => l.classList.remove('active'));
        const type = btn.getAttribute('data-toggle');
        document.querySelector('.tariffs-list.'+type).classList.add('active');
    });
});

// Flip карточки на мобиле по клику
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (window.innerWidth <= 780) {
            this.classList.toggle('flipped');
        }
    });
});
