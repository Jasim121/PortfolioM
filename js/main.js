// var slider = tns({
//     container: '.slider-wrap',
//     items:1,
//     slideBy: 'page',
//     autoplay:false,
//     controlsPosition: "bottom",
//     navPosition: "bottom",
//     mouseDrag: true,
//     autoplayButtonOutput: false,
//   controlsContainer: "#custom-control",
//   });

  var slider = tns({
    container: '.testo-slide-item',
    items:2,
    slideBy: 'page',
    autoplay:true,
    controlsPosition: "bottom",
    navPosition: "bottom",
    mouseDrag: true,
    autoplayButtonOutput: false,
    controls:false,
   });


  let loder = document.getElementById("preloder");
  window.addEventListener("load", function(){
    loder.style.display="none";
  });

  window.addEventListener("scroll", ()=>{
    let down=document.querySelector(".navbar");
    down.classList.toggle("sticky",window.scrollY>0)
  });

  window.addEventListener("scroll", ()=>{
    let scrolltop=document.querySelector(".scrolltop");
    scrolltop.classList.toggle("scrolltopviss", window.scrollY>500);
})


function scrolltotop(){
    window.scrollTo({
        top:0
    })
  }
// pogress bar
let pogarea=document.querySelector(".pogarea"),
bar=document.querySelectorAll(".pogarea .bar");

window.addEventListener("scroll", function(){
  const pogareaSection=pogarea.getBoundingClientRect().top;
  if(window.innerHeight>pogareaSection){
    bar.forEach((bar)=>{
      const barWidth=bar.dataset.bar;
      bar.style.width=`${barWidth}%`
    })
  }else{
    bar.forEach((bar)=>{
      bar.style.width="0";
    })
  }
})

// skill pogress 1
let spoarea=document.querySelector(".spoarea")
let sprogressBar=document.querySelector(".skill_progress");
let counter=document.querySelector(".skill_bar");

let pogressValue=0;
let endpogressValue=85;
let speed=50;


let progress=setInterval(()=>{
  pogressValue++;
  counter.textContent=`${pogressValue}%`;
  sprogressBar.style.background=`conic-gradient(
    #6e57e0 ${pogressValue*3.6}deg,
    #cadcff ${pogressValue*3.6}deg
  )`;

  if(pogressValue==endpogressValue){
    clearInterval(progress);
  }
})

// skill pogress 2
let spoarea2=document.querySelector(".spoarea2")
let sprogressBar2=document.querySelector(".skill_progress2");
let counter2=document.querySelector(".skill_bar2");

let pogressValue2=0;
let endpogressValue2=80;
let speed2=50;


let progress2=setInterval(()=>{
  pogressValue2++;
  counter.textContent=`${pogressValue2}%`;
  sprogressBar2.style.background=`conic-gradient(
    #6e57e0 ${pogressValue2*3.6}deg,
    #cadcff ${pogressValue2*3.6}deg
  )`;

  if(pogressValue2==endpogressValue2){
    clearInterval(progress2);
  }
})


 // skill pogress 3
let spoarea3=document.querySelector(".spoarea3")
let sprogressBar3=document.querySelector(".skill_progress3");
let counter3=document.querySelector(".skill_bar3");

let pogressValue3=0;
let endpogressValue3=55;
let speed3=75;


let progress3=setInterval(()=>{
  pogressValue3++;
  counter.textContent=`${pogressValue3}%`;
  sprogressBar3.style.background=`conic-gradient(
    #6e57e0 ${pogressValue3*3.6}deg,
    #cadcff ${pogressValue3*3.6}deg
  )`;

  if(pogressValue3==endpogressValue3){
    clearInterval(progress3);
  }
})

 // skill pogress 4
 let spoarea4=document.querySelector(".spoarea4")
 let sprogressBar4=document.querySelector(".skill_progress4");
 let counter4=document.querySelector(".skill_bar4");
 
 let pogressValue4=0;
 let endpogressValue4=70;
 let speed4=75;
 
 
 let progress4=setInterval(()=>{
   pogressValue4++;
   counter4.textContent=`${pogressValue4}%`;
   sprogressBar4.style.background=`conic-gradient(
     #6e57e0 ${pogressValue4*3.6}deg,
     #cadcff ${pogressValue4*3.6}deg
   )`;
 
   if(pogressValue4==endpogressValue4){
     clearInterval(progress4);
   }
 })

  // skill pogress 5
  let spoarea5=document.querySelector(".spoarea5")
  let sprogressBar5=document.querySelector(".skill_progress5");
  let counter5=document.querySelector(".skill_bar5");
  
  let pogressValue5=0;
  let endpogressValue5=60;
  let speed5=75;
  
  
  let progress5=setInterval(()=>{
    pogressValue5++;
    counter5.textContent=`${pogressValue5}%`;
    sprogressBar5.style.background=`conic-gradient(
      #6e57e0 ${pogressValue5*3.6}deg,
      #cadcff ${pogressValue5*3.6}deg
    )`;
  
    if(pogressValue5==endpogressValue5){
      clearInterval(progress5);
    }
  })

  
  // skill pogress 6
  let spoarea6=document.querySelector(".spoarea6")
  let sprogressBar6=document.querySelector(".skill_progress6");
  let counter6=document.querySelector(".skill_bar6");
  
  let pogressValue6=0;
  let endpogressValue6=45;
  let speed6=75;
  
  
  let progress6=setInterval(()=>{
    pogressValue6++;
    counter6.textContent=`${pogressValue6}%`;
    sprogressBar6.style.background=`conic-gradient(
      #6e57e0 ${pogressValue6*3.6}deg,
      #cadcff ${pogressValue6*3.6}deg
    )`;
  
    if(pogressValue6==endpogressValue6){
      clearInterval(progress6);
    }
  })





// gsap
  // timeline
  let tl=gsap.timeline({defaults:{ease:"power4.inout", duration:1}});
  tl.from(".ani2",{x:50, opacity:0}, "-=.1")
  .from(".ani1",{y:50, opacity:0},"-=.1")
  .from(".ani3",{x:50, opacity:0},"-=.1")
  .from(".icon",{x:-40,opacity:0},"-=.2")
  .from(".header_button",{x:30,opacity:0})
  // .from(".himg", 0.3,{y:50,opacity:0,duration:0.2,})


  // overlay
  gsap.to('.overlay',{y: '-100vh', delay:1.5})
  gsap.to('.layer_1',{y: '-100vh', delay:.5})
  gsap.to('.layer_2',{y: '-100vh', delay:.7})
  gsap.to('.layer_3',{y: '-100vh', delay:.9})
  

  gsap.from('.navbar-nav li a',1,{
    opacity:0,
    translateX:200,
    stagger:0.2,
    delay:1.5
  })




  //scrolltriger
  gsap.registerPlugin(ScrollTrigger);
  // about area 
  let timeline2= gsap.timeline({
    scrollTrigger:{
      trigger:".about",
      toggleActions:"restart pause none reset",
    }
  })
  timeline2.from(".about h1",{x:-50,
      opacity:0,duration:1.5});

      timeline2.from(".about_img",{y:150,
        opacity:0,duration:1},"-=.1");
     timeline2.from(".about_pogress",{
       y:-150, opacity:0, duration:1
     },"-=.2");

  
   timeline2.from(".po_button",{
     x:70, opacity:0, duration:1
   },"-=.2");
      

// skill area
  let timeline1= gsap.timeline({
    scrollTrigger:{
      trigger:".skill_area",
      toggleActions:"restart pause none reset",
    }
  })
  timeline1.from(".skill_area h1",{x:-50,
      opacity:0,duration:1.5});

      timeline1.from(".item_all",{y:150, stagger:0.2,
        opacity:0, duration:1.2,stagger:0.2,});
// services area
let timeline3= gsap.timeline({
  scrollTrigger:{
    trigger:".services",
    toggleActions:"restart pause none reset",
  }
})
timeline3.from(".services h1",{x:-50,
    opacity:0,duration:1.5});

    timeline3.from(".cardarea",{x:50, stagger:0.5,
      opacity:0,});
// portfolio area
let timeline4= gsap.timeline({
  scrollTrigger:{
    trigger:".portfolio",
    toggleActions:"restart pause none reset",
  }
})
timeline4.from(".portfolio h1",{x:-50,
    opacity:0,duration:1.5});

    timeline4.from(".content",{y:150, stagger:0.5,
      opacity:0,duration:1.5});

// testomonial area
let timeline5= gsap.timeline({
  scrollTrigger:{
    trigger:".testomonial",
    toggleActions:"restart pause none reset",
  }
})
timeline5.from(".testomonial h1",{x:-50,
    opacity:0,duration:1.5});

//     timeline5.from(".testo-slide-item",{x:-150,
//       opacity:0,duration:1.5});

// sub-contact area
let timeline10= gsap.timeline({
  scrollTrigger:{
    trigger:".sub_contact",
    toggleActions:"restart pause none reset",
  }
})
timeline10.from(".sub_contact h1",{x:-50,
    opacity:0,duration:1.5});

    timeline10.from(".sub_contact h4",{y:-30,
      opacity:0,duration:1.5});

      timeline10.from(".sub-con-button",{y:30,
        opacity:0,duration:1.5});
    
// contact area
let timeline6= gsap.timeline({
  scrollTrigger:{
    trigger:".contact",
    toggleActions:"restart pause none reset",
  }
})
timeline6.from(".contact h1",{x:-80,
  opacity:0,duration:1.5});
// Form area
    // let timeline7= gsap.timeline({
    //   scrollTrigger:{
    //     trigger:".form-area",
    //     toggleActions:"restart pause none reset",
    //   }
    // })

    // timeline7.from(".input-box",{translateX:100,
    //   stagger:0.2,
    //   delay:0.2,
    //   opacity:0,
    //   duration:2,
    //   ease: "power2.inOut",
    // })

    // timeline7.from(".col-sm-4",{translateX:-80,
    //   delay:0.2,
    //   opacity:0,
    //   duration:1,
    // })
    
    // timeline7.from(".send",{translateX:-80,
    //   delay:0.2,
    //   opacity:0,
    //   duration:1,
    // })

    // skill counter
// counter 1
// window.onscroll=function(e){
//   let count=0;
//   let project01=setInterval(project,20);
//   function project(){
//   count++;
//   let num1=document.getElementById("count1").innerHTML=count;
//   if(count==90){
//     clearInterval(project01);
//   }
//   }

//   // counter 2
//   let count2=0;
//   let project02=setInterval(project2,20);
//   function project2(){
//   count2++;
//   let num2=document.getElementById("count2").innerHTML=count2;
//   if(count2==80){
//     clearInterval(project02);
//   }
//   }

//     // counter 3
//     let count3=0;    
//     let project03=setInterval(project3,20);
//     function project3(){
//     count3++;
//     let num3=document.getElementById("count3").innerHTML=count3;
//     if(count3==50){
//       clearInterval(project03);
//     }
//     }

//         // counter 4
//         let count4=0;
//         let project04=setInterval(project4,20);
//         function project4(){
//         count4++;
//         let num4=document.getElementById("count4").innerHTML=count4;
//         if(count4==70){
//           clearInterval(project04);
//         }
//         }
//   }
  

   
      
  
 