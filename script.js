
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
            markers:true,
        }

      })
      tl.to(frames, {
        startIndex: frames.maxIndex,
        onUpdate:function () {
            loadImages(Math.floor(frames.startIndex))
        }
      })
    }
    preloder();
window.addEventListener("resize",()=>{
    loadImages(Math.floor(frames.startIndex))
})