// import './style.css'

const navbarButtonHoverCursor =
  document.getElementsByClassName("hover-cursor")[0]; // Select the first element with class 'hover-cursor'
const navbarButtons = document.querySelectorAll(".navbar a");

gsap.registerPlugin(TextPlugin);

gsap.to(".navbar-content", {
  paddingTop: "2em",
  duration: 2,
});

gsap.fromTo(
  "#heading1",
  { x: -100, opacity: 0 },
  { x: 0, duration: 0.5, opacity: 1 }
);
gsap.fromTo(
  "#heading2",
  { x: 100, opacity: 0 },
  { x: 0, duration: 0.5, opacity: 1 }
);
gsap.fromTo(
  "#heading3",
  { x: -100, opacity: 0 },
  { x: 0, duration: 0.5, opacity: 1 }
);

gsap.from(".tbc-bkg-img", { opacity: 0, scale: 0.3 });
gsap.to(".tbc-bkg-img", { opacity: 1.0, scale: 1, duration: 0.5 });

// Names to cycle through
const names = ["Strategy", "Design", "Website", "Branding", "Campaign"];

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".screen2",
    markers: true,
    start: "top top",
    end: '300% -100%',
    scrub: 1,
    toggleActions: 'reverse pause',
    pin: true,
    pinSpacing: true,
  }
});

// tl.to("#word-1", { opacity: 1, duration: 5, blur: 0}).to('#word-1', {opacity: 0, duration: 5, blur: 5})
//   .to("#word-2", { opacity: 1, duration: 5, blur: 0}).to('#word-2', {opacity: 0, duration: 5, blur: 5})
//   .to("#word-3", { opacity: 1, duration: 5, blur: 0}).to('#word-3', {opacity: 0, duration: 5, blur: 5})
//   .to("#word-4", { opacity: 1, duration: 5, blur: 0}).to('#word-4', {opacity: 0, duration: 5, blur: 5})
//   .to("#word-5", { opacity: 1, duration: 5, blur: 0})

names.forEach((name, index) => {
  const wordSelector = `#word-${index + 1}`; // Constructing the selector based on the index
  tl.to(wordSelector, { opacity: 0, filter: 'blur(5px)', duration: 0 }) // Ensure it starts invisible and blurred
    .to(wordSelector, { opacity: 1, filter: 'blur(0px)', duration: 0.5 }) // Fade in and remove blur
    .to(wordSelector, { opacity: 1, filter: 'blur(0px)', duration: 1 }, "+=1") // Stay visible and clear
    .to(wordSelector, { opacity: 0, filter: 'blur(5px)', duration: 0.5 }); // Fade out and apply blur
});


  // .to('#word-5', {opacity: 0, duration: 10})

// gsap.to('.screen2', {
//   scrollTrigger: {
//     trigger: '.screen2',
//     start: 'top top',
//     // end: 'bottom 0%',
//     scrub:true,
//     pin: true,
//     pinSpacing:true,
//     toggleActions: 'reverse pause none none',
//     toggleClass: 'pink',
//     markers: true,
//   }
// })

// let currentIndex = 0;

// function changeName() {
//   // Select the name element
//   let nameElement = document.getElementById("name");

//   // Animate the current name out
//   gsap.to(nameElement, {
//     y: '-100%', // Move up to hide
//     duration: 0.5,
//     ease: "power2.in",
//     onComplete: () => {
//       // Update the name after the animation completes
//       currentIndex = (currentIndex + 1) % names.length; // Move to the next name
//       nameElement.textContent = names[currentIndex];

//       // Immediately move the next name below the viewable area without animation
//       gsap.set(nameElement, {y: '100%'});

//       // Animate the next name in
//       gsap.to(nameElement, {
//         y: '0%', // Move back into view
//         duration: 0.5,
//         ease: "power2.out",
//         onComplete: () => {
//           // Pause at the end of the cycle to ensure the name is visible for 3 seconds in total
//           gsap.to(nameElement, {duration: 3});
//         }
//       });
//     }
//   });
// }

// // Start the initial animation
// changeName();

// // Set the function to repeat with the appropriate timing
// // Note: Adjusted the interval to account for the animation duration and the 3-second pause.
// setInterval(changeName, 3000); // 0.5s out, 0.5s in, 3s pause
