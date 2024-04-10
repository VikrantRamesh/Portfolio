
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
  console.log((scrollPos / maxScroll)*5/2.37)
  if(translateX < 50){
      // Move the object from right to left
      $('.about-me-image-container').css({
          'transform': 'translateX(' +Math.max(45 - translateX, 0)+ 'rem)',
          'opacity': Math.min((scrollPos / maxScroll)*5, 1)
      });
  }else{
      $('.about-me-image-container').css({
          'transform': 'translateX(' +Math.min(translateX-50, 50)+ 'rem)',
          'opacity': ((scrollPos / maxScroll)*5/2.37)
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
    if (translateY < 500) {
      $('.about-me-text').css({
        'transform': 'scale(' + Math.min(translateY / 500, 1) + ') ',
        'opacity': Math.min((scrollPos / maxScroll) * 5, 0.9)
      });
    } else {
      $('.about-me-text').css({
        'transform': 'translateX(' + Math.max(-1 * (translateY - 500), -1000) + 'px) ',
        'opacity': Math.min(3.4 - (scrollPos / maxScroll) * 5, 0.9)
      });
    }
  } else {
    if (translateY < 460) {
      $('.about-me-text').css({
        'transform': 'scale(' + Math.min(translateY / 460, 1) + ') ',
        'opacity': Math.min((scrollPos / maxScroll) * 5, 0.9)
      });
    } else {
      $('.about-me-text').css({
        'transform': 'translateX(' + Math.max(-1 * (translateY - 460), -1000) + 'px) ',
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


