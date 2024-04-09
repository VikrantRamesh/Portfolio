
var objTable = document.getElementById("main");
objTable.addEventListener("scroll", function () {

      var scrollPos = $(this).scrollTop();
      $('.parallax-fade-top').css({
        'top' : (scrollPos/2)+'px',
        'opacity' : 1-(scrollPos/400)
      });
     
    }, false);



// const observer2 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting ) {
//             entry.target.classList.add('in-view');
//             observer2.unobserve(entry.target);
//         return;
//         }
//     });
//     }, { threshold: [0.4] });

    // objTable.addEventListener("scroll", function () {
    //       var scrollPos = $(this).scrollTop();
    //       $('.about-me-image-container.animate').css({
    //         'top' : (scrollPos/2)+'px',
    //         'opacity' : 1-(scrollPos/400)
    //       });
        
    //     }, false);

        objTable.addEventListener("scroll", function () {
          var scrollPos = $(this).scrollTop();
          var maxScroll = $(this)[0].scrollHeight - $(this).outerHeight();

         
          // Calculate translation for right to left movement
          var translateX = (scrollPos / maxScroll) * 100;
          
          // Ensure translateX is within 0 to 100
          translateX = Math.min(Math.max(translateX, 0), 100);
          if(translateX < 29){
            // Move the object from right to left
            $('.about-me-image-container').css({
                'transform': 'translateX(' +Math.max(20 - translateX, 0)+ 'rem)',
                'opacity': Math.min((scrollPos / maxScroll)*5, 1)
            });
          }else{
            $('.about-me-image-container').css({
              'transform': 'translateX(' +Math.min(translateX-29, 20)+ 'rem)',
              'opacity': 3-Math.max((scrollPos / maxScroll)*6, 0)
          });
          }
        
      }, false);


    // // Use Intersection Observer to determine if objects are wisthin the viewport
    // const observer = new IntersectionObserver(entries => {
    // entries.forEach(entry => {
    //     if (entry.isIntersecting ) {
    //             entry.target.classList.add('in-view-text');
    //             observer.unobserve(entry.target);
    //     return;
    //     }
    // });
    // }, { threshold: [0.55] });



    objTable.addEventListener("scroll", function () {
      var scrollPos = $(this).scrollTop();
      var maxScroll = $(this)[0].scrollHeight - $(this).outerHeight();
      
      // Calculate scale for zoom effect
      var scale =  7*(scrollPos / maxScroll); // Adjust the scale factor as needed
      
      // Ensure scale is within desired bounds
      scale = Math.min(Math.max(scale, 0.8), 1); 
      
      // Calculate translateY for words movement
      var translateY = (scrollPos / maxScroll) * 100;
  
      // Ensure translateY is within 0 to 100
      translateY = Math.min(Math.max(translateY, 0)*10, 1000);
      if(translateY < 280){
        $('.about-me-text').css({
            'transform': 'scale('+Math.min(translateY/100-0.5, 1)+') ',
            'opacity': Math.min((scrollPos / maxScroll)*5, 0.9)
        });
      }else{
        $('.about-me-text').css({
            'transform': 'translateX('+Math.max(-1*(translateY-280), -500)+'px) ',
            'opacity': Math.min(2.5-(scrollPos / maxScroll)*5, 0.9)
        });
      }
  }, false);

    

    // Use Intersection Observer to determine if objects are within the viewport
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log("Hello1");
            if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
            return;
            }
        });
    }, { threshold: [0.6] });

    


document.addEventListener("DOMContentLoaded", () => {
    const allAnimatedElements2 = document.querySelectorAll('.about-me-image-container.animate');
    const allAnimatedElements = document.querySelectorAll('.about-me-text.animate');
    const allAnimatedElements3 = document.querySelectorAll('.timeline li');



    // allAnimatedElements2.forEach((element) => observer2.observe(element));
    // allAnimatedElements.forEach((element) => observer.observe(element));
    allAnimatedElements3.forEach((element) => observer3.observe(element));
    
    });







const words = [ 'Story', 'Adventures', 'Tale', 'Biography', 'Track'],
wordWrapper = document.getElementById('hero_word');
let wordWrapperContent = wordWrapper.innerHTML,
  addingWord = false,
  counter = 1;

setInterval(() => {
deleteWord()
addWord()
if(counter == words.length) {
  counter = 0;
}
}, 100);

function deleteWord() {
if(wordWrapperContent.length > 0 && !addingWord ) {
  wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
  wordWrapperContent = wordWrapper.innerHTML;
} else {
  addingWord = true;
}
}

function addWord() {
if(addingWord){
  if(wordWrapperContent.length < words[counter].length) {
    wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    if(counter < words.length) {
      counter ++
    }
    addingWord = false;
  }
}
}


//scrolling text


const scrollingText = document.getElementById('scrollingText');

var objTable = document.getElementById("main");

objTable.addEventListener("scroll", function () {
  
  var scrollPosition = objTable.scrollTop;
  console.log(scrollPosition);
  gsap.to("#scrollingText", {
    x: scrollPosition,
    duration: 0.5, // Adjust the duration as needed
    // ease: "power2.inOut" // Adjust the easing function as needed
  });
}, false);


// gsap.timeline()
//   .to(scrollingText, {
//     xPercent: 15,
//     scrollTrigger: {
//       trigger: mainElement,
//       start: 'top 25%', // Change the start point to be higher
//       end: 'bottom 75%', // Change the end point to be lower
//       scrub: 1,
//       markers: {
//         startColor: 'red',
//         endColor: 'green',
//         fontSize: '14px',
//       },
//     },
//   });


// const gra = function(min, max) {
//   return Math.random() * (max - min) + min;
// }
// const init = function(){
// let items = document.querySelectorAll('.y-scroll-align');
// for (let i = 0; i < items.length; i++){
//   items[i].style.background = randomColor({luminosity: 'light'});
// }
// cssScrollSnapPolyfill()
// }
// init();


// const container = document.querySelector('.y-scroll-snap ');
// const items = document.querySelectorAll('.y-scroll-align');

// container.addEventListener('wheel', (event) => {
//   event.preventDefault();
//   const delta = event.deltaY;

//   container.scrollBy({
//     top: delta,
//     behavior: 'smooth'
//   });
// });