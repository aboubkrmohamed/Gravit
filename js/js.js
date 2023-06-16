 
    $('.multiple-items').slick({
        autoplay: true,

        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });


    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      });

      
    //   navbar in small screen 
    let show = document.getElementById("show");
let menuecontent = document.getElementById("menuecontent");
let close = document.getElementById("close");



show.addEventListener("click", showside)

function showside() {
    menuecontent.style.left = "0";
 }



close.addEventListener("click", closeSlide)
function closeSlide() {
    menuecontent.style.left = "100%";

}