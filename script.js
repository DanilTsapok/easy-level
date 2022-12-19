    const button = document.getElementById('button');
    document.getElementById('correct').innerHTML=0;
    document.getElementById('wrong').innerHTML=0;
    window.onload=function start(){
    prompt('Як вас звати')
  
    let array=['Кішка','Собака','Ручка','Книга','Мишка','Чашка','Папір','Комп`ютер','Стілець','Гроші']; 
    let array1=['Cat', 'Dog', 'Pen', 'Book', 'Mouse', 'Cup', 'Paper', 'Computer', 'Chair', 'Money']
    let a= Math.floor(Math.random()*array.length);
    console.log(a);
   
  

$(document).ready(function ran(){ 

    $('.next').click(function next(){
        let currentSlide=$('.img.curry'),
        currentSlideIndex=currentSlide.index();
        nextSlideIndex = currentSlideIndex+1;
        nextSlide= $('.img').eq(nextSlideIndex);
        currentSlide.fadeOut(1000);
        currentSlide.removeClass('curry');
        if (nextSlideIndex==($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        }else{
            nextSlide.fadeIn(1000);
            nextSlide.addClass('curry');
        }

    });  
  
    $('.prev').click(function Pref(){
        let currentSlide=$('.img.curry'),
        currentSlideIndex=currentSlide.index();
        nextSlideIndex = currentSlideIndex-1;
        nextSlide= $('.img').eq(nextSlideIndex);
        currentSlide.fadeOut(1000);
        currentSlide.removeClass('curry');
        if (nextSlideIndex==($('.img:last').index()-1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
        }else{
            nextSlide.fadeIn(1000);
            nextSlide.addClass('curry');
        } 
    })
})

  

 let correct = 0;
 let wrong = 0;
button.onclick = function click() {
    let b = document.getElementById('answer').value;
   
    let currentSlide = $('.img.curry');
    console.log('b:', b);
    console.log('currentSlide: ',currentSlide[0].innerHTML);
    console.log('array: ', array)
    console.log('array1: ', array1)
    console.log('find UKR: ', array.indexOf(b));
    console.log('find ENG: ', array1.indexOf(b));


    if(b == '') {
        wrong ++;
        document.getElementById('wrong').innerHTML = wrong;

    } else if (b == array[array.indexOf(b)]) {
        let a = currentSlide[0].innerHTML
        let c = array.indexOf(b)
        console.log('find: ', array1.indexOf(a));
        if(array1.indexOf(a) == c) {
            correct++;
            document.getElementById('correct').innerHTML = correct;
  
        } else if (array1.indexOf(a) !== c) {
            wrong ++;
            document.getElementById('wrong').innerHTML = wrong;
        
        }
    } else {
        console.log('it has not')
        wrong ++;
        document.getElementById('wrong').innerHTML = wrong;
    }
    if (correct == 10 ||wrong == 10 ){
    button.style.display="none";
}
  function hide(){
    if(b!=''){
    button.style.visibility="hidden";
} 
}
function visibile(){
    button.style.visibility="visible";
} 
    setTimeout(hide,100)
    setTimeout(visibile,2500)
}   
}




