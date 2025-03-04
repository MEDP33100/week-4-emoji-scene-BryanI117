const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startAnimations);


function startAnimations() {

    gsap.to(".sun", {
      duration: 5,
      rotation: 360,
      repeat: -1,  
      ease: "linear" 
    });

    
    gsap.to(".cloud1", {
      duration: 10,
      x: "100%",  
        xPercent: -50,
      repeat: -1,
      yoyo: true, 
      ease: "power1.inOut"
    });
     gsap.to(".cloud2", {
      duration: 12,
      x: "-100%",  
       xPercent: 50,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".animal", {
      duration: 0.5,
      y: -100,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
     gsap.fromTo(".water",
      {
          innerText: "🌊🌊🌊"
      },
      {
        duration: 3,
        innerText: "〰️〰️〰️",
        repeat: -1,
        yoyo: true
      }
    );
}
