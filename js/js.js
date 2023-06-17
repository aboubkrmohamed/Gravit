 
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
AnimationEvent

function showside() {
    menuecontent.style.left = "0";
    menuecontent.style.opacity = "1";
 }


 

close.addEventListener("click", closeSlide)
function closeSlide() {
    menuecontent.style.left = "100%";
    menuecontent.style.opacity = "0";


}


// fixed navbar 

function bgchange (){
    let logo=document.getElementById('logo');
    let scrollvalue=window.scrollY;
     if(scrollvalue >200)
    {
        logo?.classList.add('action');

    }
    else 
    {
        logo?.classList.remove('action'); 
    }
 
  }
  window.addEventListener('scroll',bgchange);

  
 // center side 

  function centerSide (){
    let  center=document.getElementById('center');
    let scrollvalue=window.scrollY;
     if(scrollvalue >200)
    {
        center?.classList.add('hidden');

    }
    else 
    {
        center?.classList.remove('hidden'); 
    }
 
  }
  window.addEventListener('scroll',centerSide);

  // right side 
  
  function rightSide (){
    let  right=document.getElementById('right');
    let scrollvalue=window.scrollY;
     if(scrollvalue >200)
    {
        right?.classList.add('hidden');

    }
    else 
    {
        right?.classList.remove('hidden'); 
    }
 
  }
  window.addEventListener('scroll',rightSide);
