
window.addEventListener("scroll", function () {

      var scrollPos = window.scrollY;

      $('.parallax-fade-top').css({
        'top' : (scrollPos/2)+'px',
        'opacity' : 1-(scrollPos/400)
      });
      // console.log(scrollPos)
    }, false);



window.addEventListener("scroll", function () {
  var scrollPos = $(this).scrollTop();
  var maxScroll = $(document).height() - $(window).height();

  // Calculate translation for right to left movement
  var translateX = (scrollPos / maxScroll) * 100;
  
  // Ensure translateX is within 0 to 100
  translateX = Math.min(Math.max(translateX, 0), 100);
  
  if(translateX < 32){
      // Move the object from right to left
      $('.about-me-image-container').css({
          'transform': 'translateX(' +Math.max(33 - translateX, 0)+ 'rem)',
          'opacity': Math.min((scrollPos / maxScroll)*5, 1)
      });
  }else{
      $('.about-me-image-container').css({
          'transform': 'translateX(' +Math.min(translateX-32, 32)+ 'rem)',
          'opacity': 1/((scrollPos / maxScroll)*5/1.56)
      });
  }
}, false);


window.addEventListener("scroll", function () {
  var scrollPos = $(this).scrollTop();
  var maxScroll = $(document).height() - $(window).height();
  
  // Calculate scale for zoom effect
  var scale =  7*(scrollPos / maxScroll); // Adjust the scale factor as needed
  
  // Ensure scale is within desired bounds
  scale = Math.min(Math.max(scale, 0.8), 1); 
  
  // Calculate translateY for words movement
  var translateY = (scrollPos / maxScroll) * 100;

  // Ensure translateY is within 0 to 100
  translateY = Math.min(Math.max(translateY, 0)*10, 1000);

  if (window.matchMedia("(max-width: 600px)").matches) {
    if (translateY < 350) {
      $('.about-me-text').css({
        'transform': 'scale(' + Math.min(translateY / 350, 1) + ') ',
        'opacity': Math.min((scrollPos / maxScroll) * 5, 0.9)
      });
    } else {
      $('.about-me-text').css({
        'transform': 'translateX(' + Math.max(-1 * (translateY - 350), -1000) + 'px) ',
        'opacity': Math.min(3.4 - (scrollPos / maxScroll) * 5, 0.9)
      });
    }
  } else {
    if (translateY < 320) {
      $('.about-me-text').css({
        'transform': 'scale(' + Math.min(translateY / 320, 1) + ') ',
        'opacity': Math.min((scrollPos / maxScroll) * 5, 0.9)
      });
    } else {
      $('.about-me-text').css({
        'transform': 'translateX(' + Math.max(-1 * (translateY - 320), -1000) + 'px) ',
        'opacity': Math.min(3.4 - (scrollPos / maxScroll) * 5, 0.9)
      });
    }
  }
}, false);



// Use Intersection Observer to determine if objects are within the viewport
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
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

// var objTable = document.getElementById("main");

window.addEventListener("scroll", function () {
  
  var scrollPosition = $(this).scrollTop();
  // console.log(scrollPosition);

  gsap.to("#scrollingText", {
    x: scrollPosition,
    duration: 0.5, // Adjust the duration as needed
    // ease: "power2.inOut" // Adjust the easing function as needed
  });
}, false);



const scrollingText1 = document.getElementById('scrollingText1');

// var objTable = document.getElementById("main");

window.addEventListener("scroll", function () {
  
  var scrollPosition = $(this).scrollTop();
  // console.log(scrollPosition);

  gsap.to("#scrollingText1", {
    x: -scrollPosition,
    duration: 0.5, // Adjust the duration as needed
    // ease: "power2.inOut" // Adjust the easing function as needed
  });
}, false);

gsap.registerPlugin(ScrollTrigger)

let boxes = gsap.utils.toArray("#main .boxed"),
    container = document.querySelector("#main"),
    padding = gsap.getProperty(container, "paddingTop", "px"),
    snapTriggers = boxes.map(box => ScrollTrigger.create({
      trigger: box,
      start: "top " + padding + "px"
    })),
    snaps = [];

ScrollTrigger.create({
  trigger: '#main',
  markers: true,
  pinSpacing: false,
  start: "top top",
  end: () => "+=" + (boxes[boxes.length-1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().top),
  onRefresh: self => {
    let distance = self.end - self.start;
    snapTriggers.forEach((trigger, i) => snaps[i] = (trigger.start - self.start) / distance);
  },
  snap: {
    snapTo:snaps,
    duration: { min: 6, max: 8 }
  },
});


ScrollTrigger.create({
  trigger: '#main',
  markers: true,
  pinSpacing: false,
  start: "top top",
  end: () => "+=" + (boxes[boxes.length-1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().top),
  snap: {
    snapTo:snaps,
    duration: { min: 6, max: 8 }
  },
});

//capsule

const initialTranslateY = gsap.utils.toArray('.scroll-smooth-effects__circle.layer1').map(circle => gsap.getProperty(circle, 'y'));

gsap.utils.toArray('.scroll-smooth-effects__circle').forEach((circle, index) => {
  gsap.to(circle, {
    scrollTrigger: {
      trigger: circle,
      start: 'top bottom', // Trigger animation when the top of the element hits the bottom of the viewport
      end: '+=400%',
      scrub: true,
      toggleActions: 'play none none reverse',
      onUpdate: self => {
        const progress = self.progress;
        const translateY = initialTranslateY[index] + (-2000 * progress); // Adjust the factor (-50) based on the desired translation range
        gsap.set(circle, { y: translateY });
      }
    },
    ease: 'power2.out'
  });
});

// window.addEventListener('scroll', function() {
//   console.log(window.scrollY);
// });
// const initialTranslateY2 = gsap.utils.toArray('.scroll-smooth-effects__circle.layer2').map(circle => gsap.getProperty(circle, 'y'));
// gsap.utils.toArray('.scroll-smooth-effects__circle').forEach((circle, index) => {
//   gsap.to(circle, {
//     scrollTrigger: {
//       trigger: circle,
//       start: 'top bottom', // Trigger animation when the top of the element hits the bottom of the viewport
//       end: '+=400%',
//       scrub: true,
//       toggleActions: 'play none none reverse',
//       onUpdate: self => {
//         const progress = self.progress;
//         const translateY = initialTranslateY2[index] + (-2000 * progress); // Adjust the factor (-50) based on the desired translation range
//         gsap.set(circle, { y: translateY });
//       }
//     },
//     height: '50vh',
//     ease: 'power2.out'
//   });
// });

// ScrollTrigger for height adjustment
const initialHeight = gsap.utils.toArray('.scroll-smooth-effects__circle').map(circle => gsap.getProperty(circle, 'height'));
gsap.utils.toArray('.scroll-smooth-effects__circle').forEach((circle, index) => {
  gsap.to(circle, {
    scrollTrigger: {
      trigger: circle,
      start: () => window.scrollY >= 3000? 'top top' : '+=10', // Start animation when window.scrollY is equal to 3000
      end: '+=400%', // Extend the height adjustment by 400% of the viewport height
      scrub: true,
      toggleActions: 'play none none reverse',
      onUpdate: self => {
        const progress = self.progress;
        const newHeight = initialHeight[index] * (1 + progress * 20); // Adjust the factor (3) based on the desired height increase range
        gsap.set(circle, { height: newHeight });
      }
    },
    ease: 'power2.out'
  });
});
// const lastCircle = document.querySelector('.scroll-smooth-effects__circle:last-of-type');

// // Pin the .info section and #main1 section until the lastCircle exits the viewport
// gsap.to('.info, #main1', {
//   scrollTrigger: {
//     trigger: '#curtain', // Trigger on the #curtain element
//     start: 'top top',
//     endTrigger: lastCircle, // End trigger on the last .scroll-smooth-effects__circle element
//     end: 'bottom bottom', // End pinning when the bottom of the last circle element exits the viewport
//     pin: true,
//     pinSpacing: false,
//     scrub: true,
//     toggleActions: 'play none none reverse'
//   }
// });

// ScrollTrigger.create({
//   trigger: ".info",
//   pin: true,
//   start: "center center",
//   end: "+=200%",
//   markers: true
// });


console.clear();
    document.addEventListener("DOMContentLoaded", function (event) {
      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: "#container2",
          pin: true,
          start: "top",
          end: "bottom",
          scrub: 1,
          markers: false,
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