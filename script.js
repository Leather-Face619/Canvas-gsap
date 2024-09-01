const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
   const frames={
     startIndex : 0,
     maxIndex :807
}
let imageCounter = 0;
var images = []

    function preloder() {
        for (var i =1; i <= frames.maxIndex; i++) {
            const imageUrl =`./frames/frame_${i.toString().padStart(4,"0")}.jpg`;
            const img = new Image();
            img.src = imageUrl;
            img.onload = function() {
                imageCounter++
                if (imageCounter===frames.maxIndex) {
                   loadImages(frames.startIndex);
                   startAnimation();
                }
            }
                images.push(img)
        }
    }
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');
    const loadImages=(index)=>{
if (index >=0 && index <= frames.maxIndex) {
    const img = images[index];

    canvas.height= window.innerHeight
    canvas.width = window.innerWidth
    const scaleY = window.innerHeight / img.height
    const scaleX = window.innerWidth / img.width
    const scale = Math.max(scaleX, scaleY)

    const newWidth = img.width * scale
    const newHeight = img.height * scale

    const offsetX = (canvas.width - newWidth) /2
    const offsetY = (canvas.height - newHeight)  /2
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.imageSmoothingEnabled=true
    context.imageSmoothingQuality="high"
    context.drawImage(img, offsetX, offsetY, newWidth, newHeight)
    frames.startIndex = index
}
    }
   
    function startAnimation(){
      var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".parent",
            start:"top top",
            scrub:2,
            end: "bottom bottom",
           
        }

      })
      function updateFrame(index) {
        return {
            startIndex: index,
            ease:"linear",
            onUpdate: function () {
                loadImages(Math.floor(frames.startIndex))
            }
          }
      }
      tl.to(frames,updateFrame(50),"a1" )
      tl.to(".anime1",{opacity:0,ease:"linear"},"a1")

      tl.to(frames,updateFrame(80),"a2" )
      tl.to(".anime2",{opacity:1,ease:"linear"},"a2")

      tl.to(frames,updateFrame(110),"a3" )
      tl.to(".anime2",{opacity:1,ease:"linear"},"a3")

      tl.to(frames,updateFrame(140),"a4" )
      tl.to(".anime2",{opacity:0,ease:"linear"},"a4")

       tl.to(frames,updateFrame(170),"a5" )
       tl.to(".anime3",{opacity:1,ease:"linear"},"a5")

       tl.to(frames,updateFrame(200),"a6" )
       tl.to(".anime3",{opacity:1,ease:"linear"},"a6")

       tl.to(frames,updateFrame(230),"a7" )
       tl.to(".anime3",{opacity:0,ease:"linear"},"a7")

       tl.to(frames,updateFrame(260),"a8" )
       tl.to(".panel",{x:"0%",ease:"expo"},"a8")

       tl.to(frames,updateFrame(290),"a9" )
       tl.to(".panel",{x:"0%",ease:"expo"},"a9")

       tl.to(frames,updateFrame(320),"a10" )
       tl.to(".panel",{opacity:"0",ease:"linear"},"a10")

       tl.to(frames,updateFrame(350),"a11" )
       tl.to("canvas",{scale:".5",ease:"linear"},"a11")

       tl.to(frames,updateFrame(380),"a12" )
       tl.to(".Panelism",{opacity:"1",ease:"expo"},"a12")

       tl.to(frames,updateFrame(410),"a12" )
       tl.to(".line",{width:"200",ease:"linear"},"a12")

       tl.to(frames,updateFrame(440),"a13" )
       tl.to("canvas",{scale:"1",ease:"linear"},"a13")

       tl.to(frames,updateFrame(480),"a14" )
       tl.to(".Panelism",{scale:"2",ease:"circ"},"a14")

       tl.to(frames,updateFrame(550),"a15" )
       tl.to(".Panelism",{scale:"2",ease:"circ"},"a15")

       tl.to(frames,updateFrame(580),"a16" )
       tl.to("canvas",{scale:"1",ease:"linear"},"a16")

       tl.to(frames,updateFrame(650),"a17" )
       tl.to("canvas",{rotate:"90",ease:"linear"},"a17")

       tl.to(frames,updateFrame(650),"a17" )
       tl.to("canvas",{scale:"2",ease:"linear"},"a17")

       tl.to(frames,updateFrame(680),"a18" )
       tl.to("canvas",{scale:"2",ease:"linear"},"a18")

       tl.to(frames,updateFrame(710),"a19" )
       tl.to("canvas",{rotate:"360",ease:"linear"},"a19")

       tl.to(frames,updateFrame(750),"a20" )
       tl.to("canvas",{scale:"1",ease:"linear"},"a20")

       tl.to(frames,updateFrame(780),"a20" )
       tl.to("canvas",{scale:"1",ease:"linear"},"a20")

       tl.to(frames,updateFrame(800),"a21" )
       tl.to("canvas",{opacity:"0",scale:".5",ease:"linear"},"a21")

       tl.to(frames,updateFrame(800),"a21" )
       tl.to(".line",{width:"0",opacity:0,ease:"linear"},"a21")

       tl.to(frames,updateFrame(807),"a22" )
       tl.to(".Panelism",{scale:"2.7",ease:"linear"},"a22")



    }


    preloder();
window.addEventListener("resize",()=>{
    loadImages(Math.floor(frames.startIndex))
})