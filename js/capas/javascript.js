const card = document.querySelector('.card_inner');


card.addEventListener('mouseenter',function(){
    card.classList.toggle('is-flipped');
})
card.addEventListener('mouseleave',function(){
    card.classList.toggle('is-flipped');
})

const card2 = document.querySelector('.card2');
card2.addEventListener('mouseenter',function(){
    card2.classList.toggle('is-flipped');
})
card2.addEventListener('mouseleave',function(){
    card2.classList.toggle('is-flipped');
})