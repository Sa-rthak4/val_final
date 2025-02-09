// // const track = document.getElementById("image-track");

// // const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// // const handleOnUp = () => {
// //   track.dataset.mouseDownAt = "0";  
// //   track.dataset.prevPercentage = track.dataset.percentage;
// // }

// // const handleOnMove = e => {
// //   if(track.dataset.mouseDownAt === "0") return;
  
// //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
// //         maxDelta = window.innerWidth / 2;
  
// //   const percentage = (mouseDelta / maxDelta) * -100,
// //         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
// //         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
// //   track.dataset.percentage = nextPercentage;
  
// //   track.animate({
// //     transform: `translate(${nextPercentage}%, -50%)`
// //   }, { duration: 1200, fill: "forwards" });
  
// //   for(const image of track.getElementsByClassName("image")) {
// //     image.animate({
// //       objectPosition: `${100 + nextPercentage}% center`
// //     }, { duration: 1200, fill: "forwards" });
// //   }
// // }

// // /* -- Had to add extra lines for touch events -- */

// // window.onmousedown = e => handleOnDown(e);

// // window.ontouchstart = e => handleOnDown(e.touches[0]);

// // window.onmouseup = e => handleOnUp(e);

// // window.ontouchend = e => handleOnUp(e.touches[0]);

// // window.onmousemove = e => handleOnMove(e);

// // window.ontouchmove = e => handleOnMove(e.touches[0]);

// const track = document.getElementById("image-track");
// let percentage = 0; // Track the scroll percentage

// const handleScroll = (e) => {
//     const delta = e.deltaY || -e.wheelDelta || e.detail; // Get scroll direction
//     const maxDelta = window.innerWidth / 2;

//     percentage -= (delta / maxDelta) * 50; // Adjust speed
//     percentage = Math.max(Math.min(percentage, 0), -100); // Clamp between -100 and 0

//     track.dataset.percentage = percentage;

//     track.animate(
//         { transform: `translate(${percentage}%, -50%)` },
//         { duration: 1200, fill: "forwards" }
//     );

//     for (const image of track.getElementsByClassName("image")) {
//         image.animate(
//             { objectPosition: `${100 + percentage}% center` },
//             { duration: 1200, fill: "forwards" }
//         );
//     }
// };

// // Attach the scroll event listener
// document.addEventListener("wheel", handleScroll);
const track = document.getElementById("image-track");
let percentage = -50; // Start centered

const handleScroll = (e) => {
    const delta = e.deltaY || -e.wheelDelta || e.detail;
    const maxDelta = window.innerWidth / 2;

    percentage -= (delta / maxDelta) * 50;
    percentage = Math.max(Math.min(percentage, 0), -100);

    track.style.transform = `translate(${percentage}%, -50%)`;

    for (const image of track.getElementsByClassName("image")) {
        image.style.objectPosition = `${100 + percentage}% center`;
    }
};

// Attach the smooth scroll event listener
document.addEventListener("wheel", handleScroll);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".container").classList.add("fade-in");
});

