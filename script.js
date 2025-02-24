gsap.to(".nav",{
    backgroundColor:" red",
    duration:1,
    height:"80px",
    scrollTrigger:{
        trigger:".nav",
        scroll:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
       scrub:1

    },
    

})

gsap.to("#main",{
    backgroundColor:"black",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        //markers:true,
        start:"top -80%",
        end:" top -140%",
        scrub:2
    }
})

function bmi(){
   
    let h=document.querySelector('#height').value;
    let w=document.querySelector('#weight').value;
    let bmiformula= w/(h/100*h/100);
    let result =bmiformula.toFixed(2);                          // tofixed() use for round off - sourav

    document.querySelector('#result').innerHTML=`your BMI is : ${result}`
    if(result>=18.5&&result <=24.9){
      let report1=document.querySelector('#report');
        report1.innerHTML="You are HEALTHY";
        report1.style.color=" green";

    }
    else{
        let report2=  document.querySelector('#report');
        report2.innerHTML="You are not HEALTHY ";
        report2.style.color="red";

    }

    
}

            // swapper

            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay:{
                    delay:2000
                },
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                breakpoints: {                // use here breakpoint because we need different review at different time
                    
                    350: {
                      slidesPerView: 1,        // 350 is good kyuki jayada pe 2 review collapse ho rhe the
                    },
                    1024: {
                      slidesPerView: 2,      
                    }
                  }

                
              });

let menulist=document.getElementById("menulist") 
menulist.style.maxHeight="0px";  
function togglemenu(){
  if(menulist.style.maxHeight=="0px"){
    menulist.style.maxHeight="300px";
  }
  else{
    menulist.style.maxHeight="0px";
  }
}           


 // code for a email message 
 
//  function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "skumar252004@gmail.com",
//         Password : "Sourav@25",
//         To : 'souravkumar152004@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "new contact form query",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );

//  }
