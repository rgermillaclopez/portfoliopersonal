


const typed = new Typed('.typed', {
    strings: ['WE', 'WORK', 'TOGETHER?'
    ],

        //stringElement: '#cadenas-texto',
        typeSpeed: 80,
        startDelay: 300,
        backSpeed: 75,
        //smartBackspace: true,
        shuffle: false,
        backDelay: 500,
        loop: true,
        loopCount: false,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html',


    }
);

'use strict'

const container     = document.querySelector('.container')
const punto         = document.querySelectorAll('.punto')

punto.forEach(( cadaPunto, i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion = i;
        let operacion = posicion * -33;

        container.style.transform =`translateX(${ operacion }%)`;

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo');

    })

})