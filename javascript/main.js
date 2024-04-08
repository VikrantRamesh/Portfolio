
var objTable = document.getElementById("main");
objTable.addEventListener("scroll", function () {

      var scrollPos = $(this).scrollTop();
      $('.parallax-fade-top').css({
        'top' : (scrollPos/2)+'px',
        'opacity' : 1-(scrollPos/400)
      });
     
    }, false);



const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting ) {
            entry.target.classList.add('in-view');
            observer2.unobserve(entry.target);
        return;
        }
    });
    }, { threshold: [0.4] });

    // Use Intersection Observer to determine if objects are wisthin the viewport
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting ) {
                entry.target.classList.add('in-view-text');
                observer.unobserve(entry.target);
        return;
        }
    });
    }, { threshold: [0.55] });

    // Use Intersection Observer to determine if objects are within the viewport
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log("Hello1");
            if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
            return;
            }
        });
    }, { threshold: [0.6] });

    


document.addEventListener("DOMContentLoaded", () => {
    const allAnimatedElements2 = document.querySelectorAll('.about-me-image-container.animate');
    const allAnimatedElements = document.querySelectorAll('.about-me-text.animate');
    const allAnimatedElements3 = document.querySelectorAll('.timeline li');



    allAnimatedElements2.forEach((element) => observer2.observe(element));
    allAnimatedElements.forEach((element) => observer.observe(element));
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

