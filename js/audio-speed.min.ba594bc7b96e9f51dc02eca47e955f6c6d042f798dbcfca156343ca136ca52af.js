document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll("audio");e.forEach((e,t)=>{e.id="audioPlayer"+t;const n=document.createElement("div");n.className="speed-controls",n.innerHTML=`
        <button type="button" onclick="playWithSpeed(${t}, 0.5)">0.5x</button>
        <button type="button" onclick="playWithSpeed(${t}, 1.0)">1.0x</button>
        <button type="button" onclick="playWithSpeed(${t}, 1.5)">1.5x</button>
        <button type="button" onclick="playWithSpeed(${t}, 2.0)">2.0x</button>
      `,e.parentNode.insertBefore(n,e.nextSibling)})}),window.playWithSpeed=function(e,t){const n=document.getElementById("audioPlayer"+e);n.playbackRate=t,n.play()}