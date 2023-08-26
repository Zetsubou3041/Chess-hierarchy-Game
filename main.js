// For all pieces including the center container
let challenger_1 = document.querySelector('.challenger-1');
let challenger_2 = document.querySelector('.challenger-2');

let left_pawn = document.querySelector('.pawn-1'); 
let left_queen = document.querySelector('.queen-1');
let left_king = document.querySelector('.king-1');
let left_rook= document.querySelector('.rook-1');
let left_knight = document.querySelector('.knight-1');
let left_bishop = document.querySelector('.bishop-1');

let right_pawn = document.querySelector('.pawn-2'); 
let right_queen = document.querySelector('.queen-2');
let right_king = document.querySelector('.king-2');
let right_rook= document.querySelector('.rook-2');
let right_knight = document.querySelector('.knight-2');
let right_bishop = document.querySelector('.bishop-2');

let points1 = 0;
let points2 = 0;


left_pawn.addEventListener('click', () => {
    challenger_1.setAttribute('src', "images/pawn-1.jpg");
    points1 = 1;
})
left_queen.addEventListener('click', () => {
    challenger_1.setAttribute('src', "images/queen-1.jpg");
    points1 = 10;
})
left_king.addEventListener('click', () => {
    challenger_1.setAttribute('src', "images/king-1.png");
    points1 = 3;
})
left_rook.addEventListener('click', () => {
    challenger_1.setAttribute('src', "images/rook-1.png");
    points1 = 4;
})
left_knight.addEventListener('click', () => {
    challenger_1.setAttribute('src', "images/knight-1.png");
    points1 = 6;
})
left_bishop.addEventListener('click', () => {
    challenger_1.setAttribute('src', "images/bishop-1.png");
    points1 = 5;
})


right_pawn.addEventListener('click', () => {
    challenger_2.setAttribute('src', "images/pawn-1.jpg");
    points2 = 1;
})
right_queen.addEventListener('click', () => {
    challenger_2.setAttribute('src', "images/queen-1.jpg");
    points2 = 10;
})
right_king.addEventListener('click', () => {
    challenger_2.setAttribute('src', "images/king-1.png");
    points2 = 3;
})
right_rook.addEventListener('click', () => {
    challenger_2.setAttribute('src', "images/rook-1.png");
    points2 = 4;
})
right_bishop.addEventListener('click', () => {
    challenger_2.setAttribute('src', "images/bishop-1.png");
    points2 = 5;
})
right_knight.addEventListener('click', () => {
    challenger_2.setAttribute('src', "images/knight-1.png");
    points2 = 6;
})

// For Decide and Reset Button 
let decideBut = document.querySelector('.decide-button');
let resetBut = document.querySelector('.reset-button');


resetBut.addEventListener('click', () => {
    challenger_1.setAttribute('src', " ");
    challenger_2.setAttribute('src', " ");
    points1 = 0;
    points2 = 0;
    document.querySelector('.vs-text').innerHTML = 'VS';
    document.querySelector('.chal2').innerHTML = '';
    document.querySelector('.chal1').innerHTML = '';
})
let decided = false;
decideBut.addEventListener('click', () => {
    if (points1 > points2) {
        document.querySelector('.vs-text').innerHTML = '<= WIN';
        decided = true;
    }else if (points1 < points2){
        document.querySelector('.vs-text').innerHTML = 'WIN =>';
        decided = true;
        
    }else {
        document.querySelector('.vs-text').innerHTML = 'DRAW';
        decided = true;

    }
})
