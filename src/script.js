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
    var arrAll = [];
    var arr;
    var elem;
    var elemDots = document.querySelectorAll('.dots');
    var dotMain = document.querySelectorAll('.dot-main');
    var dot__container;
    var dot__text;
    var dotTexts;
    
    for (var i = 0; i < dotMain.length; i++) {
        arr = [];
    
        for (var j = 0; j < 5; j++) {
            dotTexts = [];
            dotTexts[0] = [
                'My father taught me <a href="https://g.co/kgs/dtFRaU" target="_blank">Korean chess</a>.',
                'Eveyday I played it with him, which is the most delightful memory.',
                'He gave me a present. It was a PC!!',
                'Internet access available in Korea.',
                'Pocket Monsters hit Korean kids.(<- me)'
            ];
            dotTexts[1] = [
                'Pikachu.HTML',
                'Friends enjoyed my website and left messages. I was really happy with them.',
                'Learned Adobe Photoshop & Illustrator to edit website images.',
                'My high school teacher looked for an assistant who can deal with Photoshop and I was in.',
                'Thanks to it, I won a prize for the computer youngster in early rising.'
            ];
            dotTexts[2] = [
                'I beleived I needed to study design in order to become "someone" who builds web pages.',
                'Ki-tae, my best class mate, was in an art group.',
                'He let me see Taehong Park, the best art teacher ever.',
                'Became a huge fan of him and joined his art group.',
                'Entered Visual Design department of Incheon National University. 2005'
            ];
            dotTexts[3] = [
                'It was not as I expected how life was going as a designer.',
                'Made a journey to Rome to have some break for a month.',
                'I totally forgot what I wanted to become and decided to have more time to know who I am and really want to be.',
                'Entered Pusan National University Psychology dep. Feb 2011.',
                'Hooked on Congnitive psychology, Human Factors(Ergonomics) and UI/UX.'
            ];
            dotTexts[4] = [
                '<a href="https://books.google.co.kr/books/about/%EC%96%B4%EB%96%BB%EA%B2%8C_%EC%82%B4_%EA%B2%83%EC%9D%B8%EA%B0%80.html?id=TXL_CAAAQBAJ&redir_esc=y&hl=ko" target="_blank">"How to Live"</a> - Simin Yoo, <a href="https://g.co/kgs/M1sYor" target="_blank">"Lazy Hitchhikers Tour De Europe"</a> - Surplus',
                '<a href="https://opentutorials.org" target="_blank">Opentutorials.org</a> Night Coding season 1 with Google Korea.',
                'Study Group with Back-end developers and designers.',
                '<a href="https://nomadcoders.co" target="_blank">NomadCoders.co</a> React/React Native On-line course.',
                '<a href="http://studiomeal.com" target="_blank">StudioMeal.com</a> Interaction web Workshop season 1 in Jeju.'
            ];
    
    
            dot__container = document.createElement('div');
            dot__container.classList.add('dot__container');
    
            dot__text = document.createElement('span');
            dot__text.classList.add('dot__text');
            dot__text.innerHTML = dotTexts[i][j];
    
            dot__container.appendChild(dot__text);
    
    
            elemDots[i].appendChild(dot__container);
            arr.push(dot__container);
        }
        arrAll.push(arr);
    }
    
    
    
    
    
    function scrollCheckerY() {
    
        var mainDots = document.querySelectorAll('.scene__content');
        var scene = document.querySelectorAll('.scene');
        var character = document.querySelector('.character').offsetTop;
        var arrow = document.querySelectorAll('.arrow');
        var yVal = 0;
        var temp = [];
    
        for (var i = 0; i < mainDots.length; i++) {
            yVal = mainDots[i].getBoundingClientRect().y;
    
            if (yVal < window.innerHeight * 0.2 || yVal > window.innerHeight * 0.8) {
                scene[i].classList.remove('scene--active');
                for (var j = 0; j < arrAll[i].length; j++) {
                    arrAll[i][j].classList.remove('dot__container-active');
                    // arrow[i].classList.remove('arrow--active');
                }
            } else {
                scene[i].classList.add('scene--active');
            }
    
            if (Math.abs(character - yVal) < 300) {
                arrow[i].classList.add('arrow--active');
                for (var j = 0; j < arrAll[i].length; j++) {
                    arrAll[i][j].classList.add('dot__container--active');
                }
            }
        }
        var elemSceneLast = document.querySelector('.scene--last');
        if (elemSceneLast.classList.contains('scene--active')) {
            document.querySelector('.epilogue').classList.add('epilogue--active');
        }
    }
    
    window.addEventListener('scroll', function () {
        scrollCheckerY();
    })
    
    
}