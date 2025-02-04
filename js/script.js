// $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     centerMode: true,        
//     centerPadding: '40px',
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true
//   });



  
//   $('.slider-part').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     centerMode: true,        
//     centerPadding: '40px',
//     slidesToShow: 1,
//     centerMode: true,
//     variableWidth: true
//   });





function openNav(){

    document.getElementById("myNav").style.width = "100%";

  }

  function closeNav(){

    document.getElementById("myNav").style.width = "0%";

  }

















const createOdometer = (el, value) => {

    const odometer = new Odometer({

        el: el,
        value: 0,
    });

    odometer.update(value);
};

const subscribersOdometer = document.querySelector(".subscriber-odometer");
createOdometer(subscribersOdometer, 15);


const videosodometer = document.querySelector(".videos-odometer");
createOdometer(videosodometer, 15);



const liveprojectsodometer = document.querySelector(".live-projects-odometer");
createOdometer(liveprojectsodometer, 650);



const projectsodometer = document.querySelector(".projects-odometer");
createOdometer(projectsodometer, 2);


