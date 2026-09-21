const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const screens=[...$$(".screen")];
function goNext(el){const i=screens.indexOf(el.closest(".screen")); if(i>=0&&i<screens.length-1)screens[i+1].scrollIntoView({behavior:"smooth"})}
$$(".next").forEach(b=>b.addEventListener("click",()=>goNext(b)));
const canvas=$("#fx"),ctx=canvas.getContext("2d"); let particles=[];
function resize(){canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}
addEventListener("resize",resize);resize();
function burst(x=innerWidth/2,y=innerHeight/2,n=80){for(let i=0;i<n;i++)particles.push({x,y,vx:(Math.random()-.5)*10,vy:(Math.random()-.8)*11,life:70+Math.random()*50,s:"❤✦•"[Math.floor(Math.random()*3)],size:8+Math.random()*12})}
function loop(){ctx.clearRect(0,0,innerWidth,innerHeight);particles=particles.filter(p=>p.life>0);for(const p of particles){p.x+=p.vx;p.y+=p.vy;p.vy+=.16;p.life--;ctx.globalAlpha=Math.max(0,p.life/80);ctx.font=`${p.size}px sans-serif`;ctx.fillText(p.s,p.x,p.y)}ctx.globalAlpha=1;requestAnimationFrame(loop)}loop();
$(".next").addEventListener("click",()=>burst(),{once:true});
$("#giftBtn").addEventListener("click",e=>{burst(innerWidth/2,innerHeight*.45,180);$("#giftBtn").style.display="none";$("#giftMessage").classList.remove("hidden")});
$$(".photos input").forEach(input=>input.addEventListener("change",e=>{const file=e.target.files[0],label=e.target.parentElement;if(!file)return;const img=label.querySelector("img");img.src=URL.createObjectURL(file);label.classList.add("has-photo")}));
let musicOn = false;

// 🎵 YOUR MUSIC FILE
song.src = "Music/song.opus";

musicBtn.addEventListener("click", async () => {
    try {
        if (musicOn) {
            song.pause();
            musicOn = false;
            musicBtn.querySelector("span").textContent = "🔇";
        } else {
            await song.play();
            musicOn = true;
            musicBtn.querySelector("span").textContent = "🔊";
        }
    } catch (error) {
        console.error("Music playback failed:", error);
        alert("Music couldn't be played. Check that the music file exists.");
    }
});
const BIRTHDAY_NAME="MANASI";
/* Optional music: song.src="your-song.mp3"; */
document.title=`For ${BIRTHDAY_NAME} ❤️`;
$$(".reveal h2").forEach(h=>h.innerHTML=h.innerHTML.replace("Happy","Happy"));
;
