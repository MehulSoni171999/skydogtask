gsap.set(".background video", { filter: "blur(0px)" });
gsap.from(".logo,.nav_btn,.hamburger",{
   y:-50,
   duration:1,
   opacity:0,
   ease:Expo.easeInOut,
   stagger:"0.5",
//    filter: "blur(10px)",
});
gsap.to('.logo,.nav_btn,.hamburger',{
    filter: "blur(10px)",
    scrollTrigger:{
       trigger: ".leftsides",
       start: "top 80%",
       end: "top top",
       scrub: true,
     }
   });

gsap.from(" .viewport_header",{
  
  opacity:0,
  duration:1,
  delay:1,
  ease:Expo.easeInOut,
  stagger:"0.10"
});
gsap.to('.background video',{
 filter: "blur(8px)",
 scrollTrigger:{
    trigger: ".leftsides",
    start: "top 90%",
    end: "top top",
    scrub: true,
  }
});
