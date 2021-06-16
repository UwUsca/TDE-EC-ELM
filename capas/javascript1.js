const card = document.querySelector('.card_inner');

card.addEventListener('mouseenter',function(){
    card.classList.toggle('is-flipped');
})
card.addEventListener('mouseleave',function(){
    card.classList.toggle('is-flipped');
})