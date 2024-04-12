



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".scrollContainer"),
  smooth: true,
  // smoothMobile: true, 
  getSpeed: true, 
  getDirection: true, 
  useKeyboard: true, 
  smooth: true, 
  inertia: 0.65,
}); 

gsap.registerPlugin(ScrollTrigger);


locoScroll.on("scroll", ScrollTrigger.update);



// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".scrollContainer", {
      	scrollTop(value) {
    			return arguments.length ? locoScroll.scrollTo(value, 0, 0) : 		locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});








function updateParallaxFadeTop() {
  locoScroll.on('scroll', (obj) => {
    const scrollPosition = obj.scroll.y;

    $('.parallax-fade-top').css({
      'top': (scrollPosition / 2) + 'px',
      'opacity': 1 - (scrollPosition / 400)
    });
  });
}

updateParallaxFadeTop();

function updateAboutMeImageContainer() {
  locoScroll.on('scroll', (obj) => {
    const scrollPosition = obj.scroll.y;
    const maxScroll = $(document).height() - $(window).height();

    // Calculate translation for right to left movement
    var translateX = (scrollPosition / maxScroll) * 100;

    // Ensure translateX is within 0 to 100
    translateX = Math.min(Math.max(translateX, 0), 100);

    if (translateX < 55) {
      // Move the object from right to left
      $('.about-me-image-container').css({
        'transform': 'translateX(' + Math.max(48 - translateX, 0) + 'rem)',
        'opacity': Math.min((scrollPosition / maxScroll) * 5, 1)
      });
    } else {
      $('.about-me-image-container').css({
        'transform': 'translateX(' + Math.min(translateX - 55, 55) + 'rem)',
        'opacity': 1 / ((scrollPosition / maxScroll) * 5 / 1.56)
      });
    }
  });
}

updateAboutMeImageContainer();

function updateAboutMeText() {
  locoScroll.on('scroll', (obj) => {
    const scrollPosition = obj.scroll.y;
    const maxScroll = $(document).height() - $(window).height();

    // Calculate scale for zoom effect
    var scale = 7 * (scrollPosition / maxScroll); // Adjust the scale factor as needed

    // Ensure scale is within desired bounds
    scale = Math.min(Math.max(scale, 0.8), 1);

    // Calculate translateY for words movement
    let translateY = (scrollPosition / maxScroll) * 100;

    // Ensure translateY is within 0 to 100
    translateY = Math.min(Math.max(translateY, 0) * 10, 1000);

    if (window.matchMedia("(max-width: 600px)").matches) {
      if (translateY < 400) {
        $('.about-me-text').css({
          'transform': 'scale(' + Math.min(translateY / 400, 1) + ') ',
          'opacity': Math.min((scrollPosition / maxScroll) * 5, 0.9)
        });
      } else {
        $('.about-me-text').css({
          'transform': 'translateX(' + Math.max(-1 * (translateY - 400), -1000) + 'px) ',
          'opacity': Math.min(3.4 - (scrollPosition / maxScroll) * 5, 0.9)
        });
      }
    } else {
      if (translateY < 520) {
        $('.about-me-text').css({
          'transform': 'scale(' + Math.min(translateY / 520, 1) + ') ',
          'opacity': Math.min((scrollPosition / maxScroll) * 5, 0.9)
        });
      } else {
        $('.about-me-text').css({
          'transform': 'translateX(' + Math.max(-1 * (translateY - 520), -1000) + 'px) ',
          'opacity': Math.min(3.4 - (scrollPosition / maxScroll) * 5, 0.9)
        });
      }
    }
  });
}

updateAboutMeText();

function updateIntersectionObserver() {
  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        return;
      }
    });
  }, { threshold: [0.6] });

  const allAnimatedElements3 = document.querySelectorAll('.timeline li');
  allAnimatedElements3.forEach((element) => observer3.observe(element));
}

updateIntersectionObserver();
    

function updateScrollingText() {
  locoScroll.on('scroll', (obj) => {
    const scrollPosition = obj.scroll.y;

    gsap.to("#scrollingText", {
      x: scrollPosition,
      duration: 0.5, // Adjust the duration as needed
      // ease: "power2.inOut" // Adjust the easing function as needed
    });
  });
}

updateScrollingText();







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

// var objTable = document.getElementById("main");

window.addEventListener("scroll", function () {
  
  var scrollPosition = $(this).scrollTop();
  // console.log(scrollPosition);

  gsap.to("#scrollingText", {
    x: scrollPosition,
    duration: 1, // Adjust the duration as needed
    // ease: "power2.inOut" // Adjust the easing function as needed
  });
}, false);



const scrollingText1 = document.getElementById('scrollingText1');


locoScroll.on('scroll', (obj) => {
  const scrollPosition = obj.scroll.y;
  gsap.to("#scrollingText1", {
    x: -scrollPosition,
    duration: 0.5, // Adjust the duration as needed
    // ease: "power2.inOut" // Adjust the easing function as needed
  });
});






//GSAP Begins


//auto snap

// gsap.registerPlugin(ScrollTrigger)

// let boxes = gsap.utils.toArray("#main .boxed"),
//     container = document.querySelector("#main"),
//     padding = gsap.getProperty(container, "paddingTop", "px"),
//     snapTriggers = boxes.map(box => ScrollTrigger.create({
//       trigger: box,
//       start: "top " + padding + "px"
//     })),
//     snaps = [];

// // Create ScrollTrigger
// ScrollTrigger.create({
//   trigger: '#main',
//   scroller: '.scrollContainer', // Use Locomotive Scroll's scroll container
//   pinSpacing: false,
//   start: "top top",
//   end: () => "+=" + (boxes[boxes.length-1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().top),
//   onRefresh: self => {
//     let distance = self.end - self.start;
//     console.log(distance);
//     snapTriggers.forEach((trigger, i) => snaps[i] = (trigger.start - self.start) / distance);
//     console.log(snapTriggers);
//   },
//   snap: {
//     snapTo: snaps,
//     duration: { min: 6, max: 8 }
//   }
// });

// ScrollTrigger.create({
//   trigger: '#main',
//   markers: false,
//   scroller:".scrollContainer",
//   pinSpacing: false,
//   start: "top top",
//   end: () => "+=" + (boxes[boxes.length-1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().top),
//   snap: {
//     snapTo:snaps,
//     duration: { min: 6, max: 8 }
//   },
// });



const section2 = document.querySelector('#about');

if (window.innerWidth >= 1000) {
  const scrollTrigger = ScrollTrigger.create({
      trigger: "#header1",
      start: "100% 90%",
      scroller: ".scrollContainer",
      // end: "bottom bottom",
      onEnter: () => {
          console.log(locoScroll.scroll.instance.scroll.y, section2.getBoundingClientRect().top, section2.getBoundingClientRect().height);
          const section2Offset = locoScroll.scroll.instance.scroll.y + section2.getBoundingClientRect().top;
          console.log(section2Offset);
          locoScroll.scrollTo(section2Offset, {
              duration: 5000, // Duration of the scroll animation in milliseconds
              easing: [0.1, 0.0, 0.58, 1.0]
          });
      },
  });
}







//circular reveal

document.addEventListener("DOMContentLoaded", function (event) {
const timeline = gsap.timeline({

  scrollTrigger: {
    trigger: "#container2",
    pin: true,
    start: "top",
    scroller:".scrollContainer",
    end: "bottom",
    scrub: 1,
    // markers: true,
  },
});

const circles = gsap.utils.toArray('section.circle');
circles.forEach(circle => {      
      timeline.from(circle, {
        clipPath: "circle(0% at 50% 50%)",
        stagger: 1,
      });
  })
});






//capsules

const initialTranslateY = gsap.utils.toArray('.scroll-smooth-effects__circle.layer1').map(circle => gsap.getProperty(circle, 'y'));

gsap.utils.toArray('.scroll-smooth-effects__circle.layer1').forEach((circle, index) => {
  gsap.to(circle, {
    scrollTrigger: {
      trigger: circle,
      start: 'top bottom', // Trigger animation when the top of the element hits the bottom of the viewport
      end: '+=400%',
      scrub: true,
      scroller:".scrollContainer",
      toggleActions: 'play none none reverse',
      onUpdate: self => {
        const progress = self.progress;
        const translateY = initialTranslateY[index] + (-1500 * progress); // Adjust the factor (-50) based on the desired translation range
        gsap.set(circle, { y: translateY });
      }
    },
    ease: 'power2.out'
  });
});


const initialTranslateY2 = gsap.utils.toArray('.scroll-smooth-effects__circle.layer2').map(circle => gsap.getProperty(circle, 'y'));

gsap.utils.toArray('.scroll-smooth-effects__circle.layer2').forEach((circle, index) => {
  gsap.to(circle, {
    scrollTrigger: {
      trigger: circle,
      start: 'top bottom', // Trigger animation when the top of the element hits the bottom of the viewport
      end: '+=400%',
      scroller:".scrollContainer",
      scrub: true,
      toggleActions: 'play none none reverse',
      onUpdate: self => {
        const progress = self.progress;
        const translateY = initialTranslateY2[index] + (-200 * progress); // Adjust the factor (-50) based on the desired translation range
        gsap.set(circle, { y: translateY });
      }
    },
    ease: 'power2.out'
  });
});


var start = 0;
// ScrollTrigger for height adjustment
const initialHeight = gsap.utils.toArray('.scroll-smooth-effects__circle.layer1').map(circle => gsap.getProperty(circle, 'height'));
var start = Array.apply(null, Array(initialHeight.length)).map(() => 0);
gsap.utils.toArray('.scroll-smooth-effects__circle').forEach((circle, index) => {
  gsap.to(circle, {
    scrollTrigger: {
      trigger: circle,
      start: () => window.scrollY >= 4000? 'top top' : '+=10', // Start animation when window.scrollY is equal to 3000
      end: '+=400%', // Extend the height adjustment by 400% of the viewport height
      scrub: true,
      scroller:".scrollContainer",
      toggleActions: 'play none none reverse',
      onUpdate: self => {
        
        var progress = self.progress;
        // console.log(locoScroll.scroll.instance.scroll.y);
        var newOpacity = 1;
        var newHeight = 0;
        if(locoScroll.scroll.instance.scroll.y <= 100){
          
           newHeight = initialHeight[index];
           start[index] = progress;
          //  console.log(1 - (progress-start[index])*2);
           newOpacity = 1 - (progress)*2.5;
        }else{
          
           newHeight = initialHeight[index] + ((progress-start[index])*50);
           newOpacity = 1 - (progress)*4; 
        }
        gsap.set(circle, { height: newHeight + "rem",  opacity: newOpacity });
      }
    },
    ease: 'power2.out'
  });
});



const initialHeight2 = gsap.utils.toArray('.scroll-smooth-effects__circle.layer2').map(circle => gsap.getProperty(circle, 'height'));
var start2 = Array.apply(null, Array(initialHeight.length)).map(() => 0);
gsap.utils.toArray('.scroll-smooth-effects__circle.layer2').forEach((circle, index) => {
  gsap.to(circle, {
    scrollTrigger: {
      trigger: circle,
      start: () => window.scrollY >= 4000? 'top top' : '+=10', // Start animation when window.scrollY is equal to 3000
      end: '+=400%', // Extend the height adjustment by 400% of the viewport height
      scrub: true,
      scroller:".scrollContainer",
      toggleActions: 'play none none reverse',
      onUpdate: self => {
        
        var progress = self.progress;
        
        
        var newHeight = 0;
        if(window.scrollY <= 3800){
           newHeight = initialHeight2[index];
           start2[index] = progress;
        }else{
           newHeight = initialHeight2[index] + ((progress-start2[index])*20); // Adjust the factor (3) based on the desired height increase range
        }
        gsap.set(circle, { height: newHeight + "rem" });
      }
    },
    ease: 'power2.out'
  });
});












// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/