window.onload = function (){

    var elemMenuBtn = document.querySelector('.global-menu__btn');
    var elemMenu = document.querySelector('.global-menu');
    var menuState = false;

    function activateMenu(){
        document.body.classList.add('global-menu--on');
        menuState = true;
    }

    function inactivateMenu(){
        document.body.classList.remove('global-menu--on');
        menuState = false;
    }

    elemMenuBtn.addEventListener('click', function(){
        if (menuState) {
            inactivateMenu();
        } else {
            activateMenu();
        }
    });

    
    
    
    
    
    
    // About
    function scrollCheckerY() {
        
        var elemScenes = document.querySelectorAll('.scene');
        var elemMainDots = document.querySelectorAll('.scene__content');
        var elemArrows = document.querySelectorAll('.arrow');


        var characterY = document.querySelector('.character').offsetTop;
        var yVal = 0;
 
        for (var i = 0; i < elemMainDots.length; i++) {
            yVal = elemMainDots[i].getBoundingClientRect().y;
    
            if (yVal < window.innerHeight * 0.2 || yVal > window.innerHeight * 0.8) {
                elemScenes[i].classList.remove('scene--active');
                elemScenes[i].lastElementChild.lastElementChild.classList.remove('dots--active');

            } else {
                elemScenes[i].classList.add('scene--active');
                elemScenes[i].lastElementChild.lastElementChild.classList.add('dots--active');
            }
    
            if (Math.abs(characterY - yVal) < 300) {
                elemArrows[i].classList.add('arrow--active');
            }
        }

        var elemSceneLast = elemScenes[elemScenes.length-1];
        if (elemSceneLast.classList.contains('scene--active')) {
            document.querySelector('.epilogue').classList.add('epilogue--active');
        }
    }
    
    window.addEventListener('scroll', function () {
        scrollCheckerY();
    })
    
    
}