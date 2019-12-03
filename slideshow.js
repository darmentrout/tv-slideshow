window.onload = () => {

    var interval = 5000; // 5 seconds
    var slides = document.querySelectorAll('.slide');

    function rotate(){
        slides.forEach( (slide, index) => {
            window.setTimeout( () => {
                    // do nothing if the first slide is visible…
                    if( typeof slides[index - 1] != 'undefined' ){
                        // …otherwise, remove the 'visible' class from the previous slide
                        slides[index - 1].classList.remove('visible');
                    }
                    slide.classList.add('visible');
                },
                interval * index
            );
        });
        // clear the last visible slide
        document.querySelector('.visible').classList.remove('visible');
    }

    // initiate the first round of rotation
    rotate();
    // set up rotations after the first round
    window.setInterval( rotate, interval * [slides.length] );

}
