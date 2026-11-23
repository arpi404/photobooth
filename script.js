const $=id=>document.getElementById(id);
const INK='#4a4a5a';
const C8=(a,b,r)=>`M${a-r} ${b}a${r} ${r} 0 1 0 ${2*r} 0a${r} ${r} 0 1 0-${2*r} 0Z`;
const FACE=(...p)=>p.map(q=>C8(q[0],q[1],q[2])).join('');
const SH={
heart:['M50 88C10 60 8 30 28 18C40 11 50 18 50 28C50 18 60 11 72 18C92 30 90 60 50 88Z'],
star:['M50 8L62 36L92 39L69 59L76 89L50 73L24 89L31 59L8 39L38 36Z'],
sparkle:['M50 5C54 35 65 46 95 50C65 54 54 65 50 95C46 65 35 54 5 50C35 46 46 35 50 5Z'],
cloud:['M24 76C6 76 4 50 24 48C22 26 52 20 62 38C80 32 96 52 80 66C94 76 82 80 74 76Z'],
moon:['M62 10C30 14 14 42 24 68C34 92 68 96 88 76C60 80 42 56 52 30C54 22 58 16 62 10Z'],
bow:['M50 50C30 14 6 22 8 50C10 78 30 86 50 50C70 86 90 78 92 50C94 22 70 14 50 50Z',C8(50,50,11),'#ffffffaa'],
flower:[FACE([50,24,17],[75,43,17],[66,73,17],[34,73,17],[25,43,17]),C8(50,50,12),'#ffe27a'],
butterfly:['M48 50C34 14 6 20 10 46C12 60 32 62 48 50ZM48 52C30 64 24 88 38 90C48 90 50 70 48 52ZM52 50C66 14 94 20 90 46C88 60 68 62 52 50ZM52 52C70 64 76 88 62 90C52 90 50 70 52 52Z','M47 28h6v52h-6z',INK],
berry:['M50 92C20 78 10 50 18 34C30 28 42 34 50 32C58 34 70 28 82 34C90 50 80 78 50 92Z','M50 32C38 22 30 24 28 14C40 16 46 22 50 24C54 22 60 16 72 14C70 24 62 22 50 32Z','#8fd9a8'],
bear:[FACE([50,56,34],[22,24,13],[78,24,13]),FACE([38,52,4.5],[62,52,4.5],[50,63,5]),INK],
bunny:[FACE([50,64,30])+'M28 44C16 8 30 2 38 8C46 14 44 32 42 44ZM72 44C84 8 70 2 62 8C54 14 56 32 58 44Z',FACE([38,60,4.5],[62,60,4.5],[50,70,4]),INK],
cat:[FACE([50,62,32])+'M18 52L16 14L44 36ZM82 52L84 14L56 36Z',FACE([36,60,4.5],[64,60,4.5],[50,68,3.5]),INK],
crown:['M10 82L6 30L30 52L50 16L70 52L94 30L90 82Z',FACE([50,62,6],[26,66,5],[74,66,5]),'#fff'],
gem:['M26 14H74L96 44L50 92L4 44Z','M30 44L50 20L70 44L50 80Z','#ffffff80'],
ghost:['M20 92V46C20 12 80 12 80 46V92L68 82L56 92L44 82L32 92Z',FACE([38,46,5],[62,46,5],[50,62,3.5]),INK],
drop:['M50 6C30 36 18 52 18 66a32 32 0 0 0 64 0C82 52 70 36 50 6Z','M32 62a18 18 0 0 0 10 18','#ffffff00'],
cassette:['M6 22H94V80H6Z','M13 28H87V55H13Z','!#fffbea','M13 46H87V50H13Z','#ffb36b','M13 50H87V53H13Z','#f6a6bd',C8(33,40,7),'!#e9e9f0',C8(67,40,7),'!#e9e9f0','M27 80L33 66H67L73 80Z','!#e9e9f0'],
ipod:['M24 6H76A6 6 0 0 1 82 12V88A6 6 0 0 1 76 94H24A6 6 0 0 1 18 88V12A6 6 0 0 1 24 6Z','M27 12H73V42H27Z','!#fff','M32 18H44V36H32ZM50 20H68V23H50ZM50 27H62V30H50Z','#9ec5ee',C8(50,70,19),'!#fff',C8(50,70,7),'!#ffe0ec'],
phone:['M30 6H70A8 8 0 0 1 78 14V86A8 8 0 0 1 70 94H30A8 8 0 0 1 22 86V14A8 8 0 0 1 30 6Z','M32 28H68V60H32Z','!#fff',C8(50,17,6),'!#cfd8e6','M22 65H78V68H22Z',INK,C8(36,79,3.5),'#ff8fb1',C8(50,79,3.5),'#ff8fb1',C8(64,79,3.5),'#ff8fb1'],
cd:[C8(50,50,42),C8(50,50,17),'!#fff',C8(50,50,6),'!#fdeaf1'],
camera:['M8 28H92V86H8Z','M18 20H38V28H18Z','!#fff',C8(50,57,19),'!#fff',C8(50,57,10),'!#b8d8f5',C8(80,40,3),'#ff8fb1']};
const COL=['#f9c5d5','#c9c9f0','#a9d3ee','#fff3b8','#bfe6dc','#ffd0b0','#d9c2f0','#ffffff'];
const LEFT=['cassette','ipod','phone','cd','camera','sparkle','star','heart','moon'],RIGHT=['berry','butterfly','bow','flower','bear','bunny','cat','cloud','crown','gem','ghost','drop'];
const FRAMES=['#f9d3df','#d6e6f7','#e7e3fa','#fff6d6','#d9f1ea','#ffffff','#f6c1d0','#bcd7ef','#ffd9c7','#fde2a7','#cdeccf','#c9f0f2','#e4c1f9','#ff9ec4','#f4a6a6','#d9c7b0','#a8d8ea','#b8a6e8','#8f2f4f','#2b2b3a'];
const LAY={strip4:{n:4,c:1,w:400,h:300},strip3:{n:3,c:1,w:400,h:300},grid:{n:4,c:2,w:300,h:225},single:{n:1,c:1,w:480,h:360}};
const FIL={none:'none',bw:'grayscale(1) contrast(1.1)',sepia:'sepia(.85)',warm:'saturate(1.3) sepia(.2) hue-rotate(-10deg)',cool:'saturate(1.1) hue-rotate(15deg) brightness(1.05)',vintage:'sepia(.4) contrast(.9) saturate(1.4)',dreamy:'brightness(1.1) contrast(.9) saturate(1.25)'};
const cv=$('cv'),ctx=cv.getContext('2d'),vid=$('vid');
let shots=[],stickers=[],sel=-1,color=FRAMES[0],stream=null,busy=false,drag=null,exporting=false;
let PAD=36,PADR=36,TOP=36,FOOT=120,CAP=60;const GAP=18;
function drawSt(c,k,col,size){c.save();c.scale(size/100,size/100);c.translate(-50,-50);c.lineJoin='round';c.lineWidth=3.5;c.strokeStyle=INK;const d=SH[k],p=new Path2D(d[0]);c.fillStyle=col;c.fill(p);c.stroke(p);for(let i=1;i<d.length;i+=2){const st=d[i+1][0]==='!',q=new Path2D(d[i]);c.fillStyle=st?d[i+1].slice(1):d[i+1];c.fill(q);if(st)c.stroke(q)}c.restore()}
function panel(el,keys){keys.forEach(k=>{const h=document.createElement('div');h.className='sub';h.textContent=k;const g=document.createElement('div');g.className='grid';COL.forEach((col,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',k+' sticker');const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');x.translate(32,32);drawSt(x,k,col,54);b.appendChild(c);b.onclick=()=>addSticker({k,ci:i});g.appendChild(b)});el.append(h,g)})}
const PAL=[['#e0608f','#ffc2d8'],['#8f6fc0','#dccdf7'],['#5b8ccb','#c9e0fb'],['#4fa78a','#c8eedf'],['#d6a032','#fff0a8'],['#e08a5a','#ffd9bf']];
/* pixel sprites: left half of each row (last char = center column), mirrored. o=outline f=fill w=white a=accent k=dark */
const PXG={
heart:['..ooo.','.offfo','offfff','offfff','.offff','..offf','...off','....of','.....o'],
star:['.....o','....of','....of','ooooof','offfff','.offff','..offf','..offf','.offoo','.oo...'],
bow:['..oo.o','.offoa','offfoa','offfoa','.offoa','..oo.o'],
cloud:['...oo.','..offo','.offff','offkff','offaff','.offff','..oooo'],
ghost:['..oooo','.offff','offfff','offkff','offaff','offfff','offfff','ofofof','.o.o.o'],
cat:['ofo...','offo..','offooo','offfff','offkff','offafk','.offff','..oooo'],
bunny:['..oo..','.offo.','.offo.','.offo.','.offo.','offooo','offfff','offkff','offafa','.offff','..oooo'],
bear:['ooo...','offooo','offfff','offkff','offfww','offfwk','.offff','..oooo'],
chick:['...ooo','..offf','.offff','offkff','offffa','offaff','.offff','..oooo'],
gift:['..oo.o','.offoa','offffa','oooooa','.offfa','.offfa','.offfa','.ooooo'],
icecream:['...ooo','..offf','.offff','offfwf','offfff','oooooo','.oaaaa','..oaaa','...oaa','....oa','.....o'],
drop:['.....o','....of','...off','..offf','.offff','offfff','offfff','offfff','.offff','..oooo'],
crown:['o....o','ofo.of','offfff','offaff','offfff','oooooo'],
mail:['oooooo','ofofff','offoff','offfof','offffo','offfff','oooooo'],
sparkle:['.....o','....of','....of','ooooof','offfff','ooooof','....of','....of','.....o'],
donut:['..oooo','.offaf','offo..','offo..','offo..','.offfa','..oooo']};
const KAO=['(´• ω •`)','ʕ•ᴥ•ʔ','(づ｡◕‿‿◕｡)づ','♡(˃͈ દ ˂͈ ♡)','(≧◡≦)','(๑˃ᴗ˂)ﻭ','₍ᐢ. .ᐢ₎','ฅ^•ﻌ•^ฅ','(｡•ᴗ•｡)♡','(•‿•)','( ˘ ³˘)♥','ʕ ᵔᴥᵔ ʔ','(*´▽`*)','૮ ˶ᵔ ᵕ ᵔ˶ ა','✧･ﾟ: *✧･ﾟ:*','(´｡• ᵕ •｡`) ♡','₍˄·͈༝·͈˄₎ฅ˒˒','(｡♡‿♡｡)'];
const WORDS=['HELLO','CUTE','LOVE','YES!','best','kiss','end','hi!','special','pretty'];
const BS=[['#f08fb3','#fde0ec','#e8588a'],['#6b8fe0','#dce8ff','#4a6fd0'],['#222','#fff','#222']];
let MODE='girl';
Object.assign(SH,{
car:['M6 62V52C6 48 9 46 14 45L26 42L36 28C38 25 41 24 45 24H62C66 24 69 26 71 29L79 42L90 46C94 48 95 51 95 56V62Z','M38 42L43 31H53V42ZM58 42V31H63L70 42Z','!#dff3ff',C8(92,53,3),'#ffe58a',C8(28,64,10),'!#2b2f3a',C8(28,64,4),'#e9e9f0',C8(74,64,10),'!#2b2f3a',C8(74,64,4),'#e9e9f0'],
truck:['M4 62V40H44V28H66L78 42H94V62Z','M50 32H64L72 42H50Z','!#dff3ff',C8(24,64,10),'!#2b2f3a',C8(24,64,4),'#e9e9f0',C8(74,64,10),'!#2b2f3a',C8(74,64,4),'#e9e9f0'],
rocket:['M50 4C70 20 74 46 68 70H32C26 46 30 20 50 4Z',C8(50,36,9),'!#dff3ff','M32 56L14 76L32 72ZM68 56L86 76L68 72Z','!#ff7b6b','M40 70H60L50 96Z','#ffb347'],
bolt:['M58 4L18 56H44L36 96L82 38H54Z'],
flame:['M50 4C56 24 78 36 78 62C78 82 64 96 50 96C36 96 22 82 22 62C22 48 32 42 36 32C40 40 44 38 50 4Z','M50 50C56 62 64 66 64 76C64 86 58 92 50 92C42 92 36 86 36 76C36 66 46 62 50 50Z','#ffe58a'],
gamepad:['M20 30H80C92 30 98 50 94 70C92 80 84 82 78 74L70 62H30L22 74C16 82 8 80 6 70C2 50 8 30 20 30Z','M24 44h6v-6h6v6h6v6h-6v6h-6v-6h-6Z','#2b2f3a',C8(70,44,4),'#ffe58a',C8(80,52,4),'#ff7b6b'],
tire:[C8(50,50,42),C8(50,50,22),'!#e9e9f0',C8(50,50,6),'#2b2f3a']});
const BOYV=['car','truck','rocket','bolt','flame','gamepad','tire'];
const PXB={
car:['...ooo','..offf','.owwww','offfff','oafffk','offfff','oooooo','kkk...','kkk...'],
rocket:['.....o','....of','...off','..offf','..owww','..owww','..offf','.offff','ooffff','.oo.aa','....aa'],
robot:['.....a','.....o','.ooooo','.offff','.owkww','.offff','.ofkkk','.offff','.ooooo','..offf','.offaf','.ooooo'],
ball:['..oooo','.offff','offfkk','offkkk','offfkk','.offff','..oooo'],
skull:['..oooo','.owwww','owwwww','owwkkw','owwwwk','.owwww','..owow','..ooo.'],
trophy:['oooooo','offfff','offfff','.offff','..offf','....of','....of','...off','.ooooo','.offff','.ooooo'],
shield:['oooooo','offfff','offfwf','offwww','offfwf','.offff','..offf','...off','....of','.....o'],
gem:['..oooo','.offff','oooooo','.offff','..offf','...off','....of','.....o']};
const PX={...PXG,...PXB};
function checker(W,H){const q=12;for(let x=0;x<W;x+=q)for(let r=0;r<2;r++)[0,H-2*q].forEach(y0=>{ctx.fillStyle=((x/q+r)%2)?'#fff':'#2b2f3a';ctx.fillRect(x,y0+r*q,q,q)});for(let y=2*q;y<H-2*q;y+=q)for(let c=0;c<2;c++)[0,W-2*q].forEach(x0=>{ctx.fillStyle=((y/q+c)%2)?'#fff':'#2b2f3a';ctx.fillRect(x0+c*q,y,q,q)})}
function drawPx(c,k,ci,size){const g=PX[k],n=g.length,u=size/11,pl=PAL[ci%PAL.length],cl={o:pl[0],f:pl[1],w:'#fff',a:'#ff8fb1',k:'#4a4a5a'};c.save();c.translate(-5.5*u,-n*u/2);g.forEach((h,y)=>{const r=h+[...h.slice(0,-1)].reverse().join('');[...r].forEach((ch,x)=>{if(ch!=='.'){c.fillStyle=cl[ch];c.fillRect(x*u,y*u,u+.6,u+.6)}})});c.restore()}
function bub(c,t,ci,size,bd){const S=BS[ci%3],fs=size*(bd?.3:.26);c.font=bd?`700 ${fs}px Pixelify Sans,Zen Maru Gothic,monospace`:`500 ${fs}px Zen Maru Gothic,sans-serif`;c.textAlign='center';c.textBaseline='middle';const w=c.measureText(t).width+fs*1.4,h=fs*2,x0=-w/2+fs*.6;c.lineJoin='round';c.lineWidth=Math.max(2,fs*.13);c.strokeStyle=S[0];c.fillStyle=S[1];
if(!bd){c.beginPath();c.moveTo(x0,h/2-2);c.lineTo(x0-fs*.2,h/2+fs*.8);c.lineTo(x0+fs*.9,h/2-2);c.closePath();c.fill();c.stroke()}
c.beginPath();if(c.roundRect)c.roundRect(-w/2,-h/2,w,h,bd?fs*.35:fs*.7);else c.rect(-w/2,-h/2,w,h);c.fill();c.stroke();
if(!bd){c.beginPath();c.moveTo(x0+1,h/2-c.lineWidth);c.lineTo(x0-fs*.1,h/2+fs*.55);c.lineTo(x0+fs*.7,h/2-c.lineWidth);c.closePath();c.fill()}
c.fillStyle=S[2];c.fillText(t,0,0);return w/2}
/* ===== kawaii stickers: cats + sweets ===== */
const K2=Math.PI*2,BRN='#8a5a50',P2=d=>new Path2D(d);
function kl(c,lw,sc){c.lineWidth=lw||2.4;c.strokeStyle=sc||BRN;c.lineJoin=c.lineCap='round'}
function kf(c,p,fill,lw,sc){c.fillStyle=fill;c.fill(p);if(lw!==0){kl(c,lw,sc);c.stroke(p)}}
function kell(x,y,rx,ry,rot){const p=new Path2D();p.ellipse(x,y,rx,ry,rot||0,0,K2);return p}
function kst(c,d,lw,sc){kl(c,lw,sc);c.stroke(P2(d))}
function kheart(c,x,y,s,fill,sc){c.save();c.translate(x,y);c.scale(s,s);c.translate(-50,-50);const p=P2(SH.heart[0]);if(fill==='g'){const g=c.createLinearGradient(0,10,0,90);g.addColorStop(0,'#fde4ec');g.addColorStop(1,'#f6a6bf');fill=g}c.fillStyle=fill;c.fill(p);kl(c,2.4/s,sc||'#e17b9b');c.stroke(p);c.restore()}
function kdrop(c,x,y,s){kf(c,P2(`M${x} ${y-8*s}C${x+5*s} ${y-1*s} ${x+6*s} ${y+3*s} ${x} ${y+6*s}C${x-6*s} ${y+3*s} ${x-5*s} ${y-1*s} ${x} ${y-8*s}Z`),'#bfe3f7',1.8,'#6fb0dc')}
function kstar(c,x,y,r,fill,sc){kf(c,P2(`M${x} ${y-r}Q${x} ${y} ${x+r} ${y}Q${x} ${y} ${x} ${y+r}Q${x} ${y} ${x-r} ${y}Q${x} ${y} ${x} ${y-r}Z`),fill,2,sc||'#d9a43a')}
function kplus(c,x,y,r,sc){kst(c,`M${x-r} ${y}H${x+r}M${x} ${y-r}V${y+r}`,2,sc||'#d9a43a')}
function kring(c,x,y,r,sc){c.beginPath();c.arc(x,y,r,0,K2);kl(c,1.8,sc||'#d9a43a');c.stroke()}
function ksak(c,x,y,r){for(let k=0;k<5;k++){c.save();c.translate(x,y);c.rotate(k*K2/5);kf(c,P2(`M0 0C${-r*.6} ${-r*.3} ${-r*.7} ${-r*.95} ${-r*.18} ${-r}L0 ${-r*.8}L${r*.18} ${-r}C${r*.7} ${-r*.95} ${r*.6} ${-r*.3} 0 0Z`),'#f8b9cf',1.8,'#d98aa6');c.restore()}c.fillStyle='#fff';c.beginPath();c.arc(x,y,r*.12,0,K2);c.fill()}
function kfl(c,x,y,r,fill,cen){for(let k=0;k<5;k++){const a=k*K2/5-1.57;kf(c,kell(x+Math.cos(a)*r*.55,y+Math.sin(a)*r*.55,r*.46,r*.46),fill,1.8,'#d9a43a')}kf(c,kell(x,y,r*.32,r*.32),cen||'#ffb347',1.6,'#d9a43a')}
function kleaf(c,x,y,rot,s,fill){c.save();c.translate(x,y);c.rotate(rot);kf(c,P2(`M0 0C${6*s} ${-8*s} ${18*s} ${-9*s} ${24*s} ${-2*s}C${16*s} ${6*s} ${6*s} ${6*s} 0 0Z`),fill||'#a8dc98',1.8,'#5a9a56');c.restore()}
function ktul(c,x,col,sc){kst(c,`M${x} 66V90`,3.4,'#6aab62');kleaf(c,x,90,-2.4,.8);kleaf(c,x,86,-.7,.8);kf(c,P2(`M${x-12} 40Q${x-13} 66 ${x} 68Q${x+13} 66 ${x+12} 40L${x+6} 46L${x} 36L${x-6} 46Z`),col,2.2,sc)}
const COATS=['calico','orange','gray','tan','white'];
const CT={calico:{b:'#fffaf5',e1:'#f0a868',e2:'#b99872'},orange:{b:'#f6b47c',s:'#d98b4e',m:1},gray:{b:'#c3c6ce',s:'#8f939e',m:1},tan:{b:'#dcb68c',s:'#b98a62',m:1},white:{b:'#fffaf5'}};
function cat(c,coat,face,paws){const o=CT[coat],e1=o.e1||o.b,e2=o.e2||o.b;
kf(c,P2('M13 46L15 15Q16 12 20 14L43 29Z'),e1,2.6);kf(c,P2('M87 46L85 15Q84 12 80 14L57 29Z'),e2,2.6);
c.fillStyle='#f7c3c3';c.fill(P2('M21 36L22 23L34 30Z'));c.fill(P2('M79 36L78 23L66 30Z'));
const hd=P2('M50 28C76 28 91 40 91 58C91 78 73 89 50 89C27 89 9 78 9 58C9 40 24 28 50 28Z');kf(c,hd,o.b,0);
c.save();c.clip(hd);
if(coat==='calico'){c.fillStyle=o.e1;c.beginPath();c.arc(20,36,22,0,K2);c.fill();c.fillStyle=o.e2;c.beginPath();c.arc(86,34,16,0,K2);c.fill()}
if(o.m){c.fillStyle='#fffaf5';c.beginPath();c.ellipse(50,80,26,17,0,0,K2);c.fill()}
if(o.s){kl(c,3.2,o.s);c.beginPath();c.moveTo(50,30);c.lineTo(50,40);c.moveTo(39,31);c.lineTo(41,39);c.moveTo(61,31);c.lineTo(59,39);c.stroke()}
c.restore();kl(c,2.6);c.stroke(hd);
c.fillStyle='rgba(247,160,170,.75)';[[22,66],[78,66]].forEach(p=>{c.beginPath();c.ellipse(p[0],p[1],7,5,0,0,K2);c.fill()});
kl(c,2);c.beginPath();[[4,56,16,58],[3,64,16,63],[96,56,84,58],[97,64,84,63]].forEach(w=>{c.moveTo(w[0],w[1]);c.lineTo(w[2],w[3])});c.stroke();
const eye=(x,y)=>{c.fillStyle='#5a3a32';c.beginPath();c.arc(x,y,3.4,0,K2);c.fill()},
arc=(x,y,up)=>{kl(c,2.6);c.beginPath();c.moveTo(x-5,y);c.quadraticCurveTo(x,y+(up?-7:7),x+5,y);c.stroke()},
nose=()=>{c.fillStyle='#e07a70';c.beginPath();c.ellipse(50,59,3,2.2,0,0,K2);c.fill()},
smile=()=>{kl(c,2.2);c.beginPath();c.moveTo(50,61);c.quadraticCurveTo(50,67,44,66);c.moveTo(50,61);c.quadraticCurveTo(50,67,56,66);c.stroke()},
open=()=>kf(c,P2('M43 63Q50 80 57 63Z'),'#e8736c',2),
gt=(x,y)=>{kl(c,2.6);c.beginPath();c.moveTo(x-5,y-5);c.lineTo(x+4,y);c.lineTo(x-5,y+5);c.stroke()},
lt=(x,y)=>{kl(c,2.6);c.beginPath();c.moveTo(x+5,y-5);c.lineTo(x-4,y);c.lineTo(x+5,y+5);c.stroke()};
if(face==='smile'){arc(34,54,1);arc(66,54,1);nose();smile()}
else if(face==='open'){eye(33,54);eye(67,54);nose();open()}
else if(face==='laugh'){gt(33,54);lt(67,54);nose();open()}
else if(face==='cry'){arc(34,54,0);arc(66,54,0);nose();kl(c,2.2);c.beginPath();c.moveTo(44,68);c.quadraticCurveTo(50,62,56,68);c.stroke();kdrop(c,24,72,1.1);kdrop(c,76,72,1.1)}
else if(face==='sweat'){eye(33,54);eye(67,54);nose();smile();kdrop(c,88,24,1.3)}
else if(face==='bawl'){gt(33,54);lt(67,54);nose();open();kst(c,'M30 60V78M70 60V78',2.8,'#7fc0ea')}
else if(face==='tongue'){arc(34,54,1);arc(66,54,1);nose();smile();kf(c,P2('M46 66Q50 77 54 66Z'),'#f28b96',1.8)}
else if(face==='kiss'){eye(33,54);eye(67,54);nose();c.beginPath();c.arc(50,67,2.6,0,K2);kl(c,2);c.stroke()}
else if(face==='sleep'){arc(34,55,0);arc(66,55,0);nose();smile()}
else if(face==='wink'){arc(34,54,1);eye(67,54);nose();smile()}
else{eye(33,54);eye(67,54);nose();kl(c,2.2);c.beginPath();c.moveTo(43,64);c.quadraticCurveTo(46.5,70,50,64);c.quadraticCurveTo(53.5,70,57,64);c.stroke()}
if(paws)[34,66].forEach(x=>{kf(c,kell(x,90,10,7),'#fffaf5',2.2);kst(c,`M${x-3} 88V92M${x+3} 88V92`,1.6)})}
const CATS=[['calico','wink',1],['orange','smile',1],['calico','laugh',0],['orange','sleep',1],['gray','smile',1],['calico','cry',0],['calico','sweat',0],['orange','bawl',0],['gray','laugh',1],['tan','sleep',1],['gray','open',0],['tan','open',0],['gray','tongue',1],['white','kiss',0],['calico','cute',1],['white','cute',1],['orange','wink',0],['tan','smile',0],['gray','sweat',0],['white','sleep',0]].map(a=>'cat:'+a.join(':'));
const KW={
okText(c){c.font='700 44px Gaegu,"Zen Maru Gothic",sans-serif';c.textAlign='center';c.textBaseline='middle';c.lineJoin='round';c.lineWidth=7;c.strokeStyle=BRN;c.strokeText('OK',50,34);c.fillStyle='#fff';c.fillText('OK',50,34);kf(c,kell(28,76,9,5.5,-.6),'#fbc3d6',1.8,'#d98aa6');kf(c,kell(70,70,8,5,.5),'#fbc3d6',1.8,'#d98aa6');kplus(c,50,82,4,'#d98aa6');kring(c,56,66,3,'#d98aa6')},
sakura(c){ksak(c,50,50,40)},
petals(c){kf(c,kell(30,36,13,8,-.7),'#fbc3d6',2,'#d98aa6');kf(c,kell(66,30,10,6,.6),'#fbc3d6',2,'#d98aa6');kf(c,kell(56,60,12,7,-.3),'#fbc3d6',2,'#d98aa6');kplus(c,30,70,5,'#d98aa6');kring(c,70,72,4,'#d98aa6')},
sparkles(c){kstar(c,38,46,26,'#ffe27a');kstar(c,70,70,16,'#ffe27a');kplus(c,70,24,7);kring(c,22,78,4);kring(c,82,44,3.5)},
hearts3(c){kheart(c,46,40,.5,'#f9b3c6');kheart(c,74,66,.34,'#f9b3c6');kheart(c,38,74,.3,'#f9b3c6');kst(c,'M6 36L20 40M6 56L20 56',2.4,'#d98aa6')},
heartpair(c){kheart(c,38,62,.62,'g');kheart(c,68,36,.5,'g')},
clover(c){for(let k=0;k<4;k++){c.save();c.translate(50,46);c.rotate(k*Math.PI/2);c.scale(.42,.42);c.translate(-50,-88);const p=P2(SH.heart[0]);c.fillStyle='#c4e8ac';c.fill(p);kl(c,2.6/.42,'#6aab62');c.stroke(p);c.restore()}kst(c,'M50 50Q50 74 60 92',3,'#6aab62')},
strawberry(c){kf(c,P2('M50 26C28 22 12 38 17 60C22 80 38 94 50 96C62 94 78 80 83 60C88 38 72 22 50 26Z'),'#f56d7b',2.6,'#b8475a');c.fillStyle='#ffd7a0';[[34,50],[50,56],[66,50],[42,68],[58,68],[50,82],[28,64],[72,64]].forEach(p=>{c.beginPath();c.ellipse(p[0],p[1],2,3,0,0,K2);c.fill()});kf(c,P2('M50 28C44 14 28 12 22 20C30 24 38 30 50 28Z'),'#9bd48e',2.4,'#5a9a56');kf(c,P2('M50 28C56 14 72 12 78 20C70 24 62 30 50 28Z'),'#9bd48e',2.4,'#5a9a56');kst(c,'M50 28V12',3,'#5a9a56')},
cherry(c){kst(c,'M30 60Q34 34 54 18',2.6,'#6aab62');kst(c,'M68 62Q64 34 54 18',2.6,'#6aab62');kleaf(c,54,18,-.3,1.2);[[30,72],[68,74]].forEach(p=>{kf(c,kell(p[0],p[1],15,14),'#f26b78',2.4,'#b8475a');c.fillStyle='rgba(255,255,255,.6)';c.beginPath();c.ellipse(p[0]-5,p[1]-5,3,2,-.6,0,K2);c.fill()})},
dango(c){kst(c,'M78 10L22 94',3,'#c9a27a');[[61,35,'#f7b3c8'],[48,54,'#fffaf5'],[35,74,'#b6dba0']].forEach(p=>kf(c,kell(p[0],p[1],15,15),p[2],2.4,'#b98a72'))},
flowersY(c){kleaf(c,40,92,-.9,1);kleaf(c,60,92,-2.3,1);kfl(c,34,38,24,'#fde27a');kfl(c,66,64,20,'#fde27a');kplus(c,76,26,5)},
tulips(c){ktul(c,32,'#f8a9c1','#d98aa6');ktul(c,66,'#f8a9c1','#d98aa6')},
tulips2(c){ktul(c,32,'#ffe27a','#d9a43a');ktul(c,66,'#fffaf5','#b98a72')},
butterfly(c){kf(c,P2('M50 50C40 24 16 22 18 40C20 54 40 56 50 50Z'),'#ffe27a',2.4,'#c9962f');kf(c,P2('M50 50C60 24 84 22 82 40C80 54 60 56 50 50Z'),'#ffe27a',2.4,'#c9962f');kf(c,P2('M50 54C40 60 26 76 36 82C44 86 50 70 50 54Z'),'#ffd24a',2.4,'#c9962f');kf(c,P2('M50 54C60 60 74 76 64 82C56 86 50 70 50 54Z'),'#ffd24a',2.4,'#c9962f');kst(c,'M50 44V72M50 44Q46 32 40 28M50 44Q54 32 60 28',3,'#c9962f')},
note(c){kst(c,'M44 70V30',3,'#c9962f');kf(c,kell(34,72,11,8,-.3),'#ffe27a',2.4,'#c9962f');kf(c,P2('M44 30Q64 34 64 52Q54 44 44 44Z'),'#ffe27a',2.4,'#c9962f');ksak(c,72,70,14);kring(c,20,40,3.5);kplus(c,82,36,4)},
drops(c){kdrop(c,30,44,2);kdrop(c,58,34,2.4);kdrop(c,66,72,1.8)},
shine(c){kst(c,'M30 26L44 38M46 22L40 46M22 44L50 32M58 64L74 76M74 58L66 84M52 74L82 66',2.6)},
starblob(c){const p=P2(SH.star[0]);c.lineJoin='round';c.strokeStyle='#1d1d26';c.lineWidth=16;c.stroke(p);c.strokeStyle='#fff';c.lineWidth=8;c.stroke(p);c.fillStyle='#1d1d26';c.fill(p);kstar(c,62,38,7,'#fff','#fff');kstar(c,38,62,5,'#fff','#fff');kstar(c,60,66,4,'#fff','#fff')}};
const SWEET=Object.keys(KW);
function drawKw(c,k,size,ci){c.save();c.scale(size/100,size/100);c.translate(-50,-50);if(k.slice(0,4)==='cat:'){const a=k.split(':');cat(c,COATS[(COATS.indexOf(a[1])+(ci||0))%5],a[2],a[3]==='1')}else KW[k](c);c.restore()}
function buildPanels(){const L=$('left'),R=$('right');L.innerHTML=R.innerHTML='';
const head=(el,t)=>{const h=document.createElement('div');h.className='sub';h.textContent=t;el.appendChild(h)};
const grid=(el,one)=>{const g=document.createElement('div');g.className='grid'+(one?' one':'');el.appendChild(g);return g};
if(MODE==='boy'){head(L,'garage');const gv=grid(L);BOYV.forEach(k=>COL.forEach((col,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',k+' sticker');const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');x.translate(32,32);drawSt(x,k,col,54);b.appendChild(c);b.onclick=()=>addSticker({k,ci:i});gv.appendChild(b)}))}
head(L,MODE==='boy'?'pixel crew':'pixel pals');const g=grid(L);
Object.keys(MODE==='boy'?PXB:PXG).forEach(k=>PAL.forEach((p,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',k+' pixel sticker');const c=document.createElement('canvas');c.width=c.height=56;const x=c.getContext('2d');x.translate(28,28);drawPx(x,k,i,46);b.appendChild(c);b.onclick=()=>addSticker({p:k,ci:i});g.appendChild(b)}));
const bb=(g,t,ci,bd)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',t+' sticker');const c=document.createElement('canvas');c.width=280;c.height=64;const x=c.getContext('2d');x.translate(140,30);bub(x,t,ci,64,bd);b.appendChild(c);b.onclick=()=>addSticker({b:t,ci,bw:bd});g.appendChild(b)};
const kwBtn=(gr,k)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label','kawaii sticker');const c=document.createElement('canvas');c.width=c.height=64;const x=c.getContext('2d');x.translate(32,32);drawKw(x,k,56,0);b.appendChild(c);b.onclick=()=>addSticker({w:k,ci:0});gr.appendChild(b)};
head(R,'kawaii cats');const g4=grid(R);CATS.forEach(k=>kwBtn(g4,k));head(R,'sweet bits');const g5=grid(R);SWEET.forEach(k=>kwBtn(g5,k));
head(R,MODE==='boy'?'chat bubbles':'kaomoji bubbles');const g2=grid(R,1);KAO.forEach((t,i)=>bb(g2,t,i%3,0));
head(R,'word tags');const g3=grid(R,1);WORDS.forEach((t,i)=>bb(g3,t,(i+1)%3,1))}
buildPanels();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(buildPanels);
function dims(){const l=LAY[$('layout').value],r=Math.ceil(l.n/l.c);const gm=GEO[$('lace').value]||(($('lace').value==='cam')?[58,128,162,330,270]:[36,36,36,120,60]);PAD=gm[0];PADR=gm[1];TOP=gm[2];FOOT=gm[3];CAP=gm[4];return{l,W:PAD+PADR+l.c*l.w+(l.c-1)*GAP,H:TOP+r*l.h+(r-1)*GAP+FOOT}}
function addSticker(o){show(2);const{W,H}=dims();stickers.push({...o,s:o.t?110:o.p?90:96,x:W/2+(Math.random()-.5)*W*.5,y:H/2+(Math.random()-.5)*H*.5,r:(Math.random()-.5)*.5,f:1});sel=stickers.length-1;draw()}
$('colors').innerHTML=FRAMES.map(c=>`<button type="button" style="background:${c}" data-c="${c}" aria-label="Frame color"></button>`).join('');
function mark(){[...$('colors').children].forEach(b=>b.classList.toggle('on',b.dataset.c===color))}mark();
$('colors').onclick=e=>{const b=e.target.closest('button');if(b){color=b.dataset.c;mark();draw()}};
function show(n){$('shoot').classList.toggle('hide',n!==1);$('deco').classList.toggle('hide',n!==2);$('t1').classList.toggle('on',n===1);$('t2').classList.toggle('on',n===2);if(n===2)draw()}
$('t1').onclick=()=>show(1);$('t2').onclick=()=>show(2);
$('retake').onclick=()=>{shots=[];dots();show(1)};
function dots(){const n=LAY[$('layout').value].n;$('dots').innerHTML=Array.from({length:n},(_,i)=>`<i class="${i<shots.length?'d':''}"></i>`).join('')}
$('layout').onchange=()=>{shots=shots.slice(0,LAY[$('layout').value].n);dots();draw()};dots();
$('filter').onchange=()=>{pv();draw()};
$('mirror').onchange=()=>{vid.style.transform=$('mirror').value==='1'?'scaleX(-1)':'none'};vid.style.transform='scaleX(-1)';
$('start').onclick=async()=>{try{stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user',width:{ideal:1280},height:{ideal:960}},audio:false});vid.srcObject=stream;await vid.play();$('msg').classList.add('hide');$('start').textContent='camera on ✓'}catch(e){$('msg').classList.remove('hide');$('msg').textContent='camera is blocked or unavailable. allow camera access, or use “upload photos”.'}};
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const MT=()=>['video/webm;codecs=vp9','video/webm','video/mp4'].find(t=>window.MediaRecorder&&MediaRecorder.isTypeSupported(t));
function record(ms){return new Promise(res=>{const mt=MT();if(!mt)return res(null);const ch=[],r=new MediaRecorder(stream,{mimeType:mt});r.ondataavailable=e=>ch.push(e.data);r.onstop=()=>{const v=document.createElement('video');v.muted=true;v.loop=true;v.playsInline=true;v.src=URL.createObjectURL(new Blob(ch,{type:mt}));v.m=$('mirror').value==='1';v.play().catch(()=>{});res(v)};r.start();$('count').textContent='●';setTimeout(()=>{r.stop();$('count').textContent=''},ms)})}
function crop(src,sw0,sh0,l,mirror){const ar=l.w/l.h;let sw=sw0,sh=sw/ar;if(sh>sh0){sh=sh0;sw=sh*ar}const c=document.createElement('canvas');c.width=l.w*2;c.height=l.h*2;const x=c.getContext('2d');if(mirror){x.translate(c.width,0);x.scale(-1,1)}x.drawImage(src,(sw0-sw)/2,(sh0-sh)/2,sw,sh,0,0,c.width,c.height);return c}
$('shoot-btn').onclick=async()=>{if(busy)return;if(!stream||!vid.videoWidth){$('msg').classList.remove('hide');$('msg').textContent='start the camera first (or upload photos).';return}
busy=true;shots=[];const{l}=dims(),t=+$('timer').value;dots();
for(let i=0;i<l.n;i++){for(let k=t;k>0;k--){$('count').textContent=k;await wait(1000)}
$('count').textContent='';$('flash').style.opacity=1;const sh=crop(vid,vid.videoWidth,vid.videoHeight,l,$('mirror').value==='1');await wait(60);$('flash').style.opacity=0;
if($('mode').value==='video')sh.clip=await record(3000);shots.push(sh);dots();await wait(500)}
busy=false;show(2)};
$('file').onchange=async e=>{const{l}=dims();shots=[];for(const f of[...e.target.files].slice(0,l.n)){const im=new Image();im.src=URL.createObjectURL(f);await im.decode();shots.push(crop(im,im.width,im.height,l,false))}dots();if(shots.length)show(2)};
function lum(h){const n=parseInt(h.slice(1),16);return(.299*(n>>16)+.587*((n>>8)&255)+.114*(n&255))/255}
function bg(W,H){ctx.fillStyle=color;ctx.fillRect(0,0,W,H);const p=$('pattern').value;ctx.fillStyle='rgba(255,255,255,.65)';
if(p==='dots')for(let i=12;i<W;i+=30)for(let j=12;j<H;j+=30){ctx.beginPath();ctx.arc(i,j,6,0,7);ctx.fill()}
else if(p==='stripes')for(let i=-H;i<W;i+=40)ctx.fillRect(i,0,18,H);
else if(p==='gingham'){ctx.fillStyle='rgba(255,255,255,.5)';for(let i=0;i<W;i+=40)ctx.fillRect(i,0,20,H);for(let j=0;j<H;j+=40)ctx.fillRect(0,j,W,20)}
else if(p==='hearts'||p==='stars')for(let i=24;i<W+30;i+=48)for(let j=24;j<H+30;j+=48){ctx.save();ctx.translate(i+((j/48)%2?24:0),j);drawSt(ctx,p==='hearts'?(MODE==='boy'?'bolt':'heart'):'star','#ffffffb0',22);ctx.restore()}}
function lace(W,H){const st=18,pts=[];for(let x=st/2;x<W;x+=st)pts.push([x,0],[x,H]);for(let y=st/2;y<H;y+=st)pts.push([0,y],[W,y]);
ctx.fillStyle='#e9a3c0';pts.forEach(p=>{ctx.beginPath();ctx.arc(p[0],p[1],15,0,7);ctx.fill()});
ctx.fillStyle='#fffdf9';pts.forEach(p=>{ctx.beginPath();ctx.arc(p[0],p[1],13,0,7);ctx.fill()});
ctx.fillStyle='#f6c6d9';pts.forEach(p=>{const x=p[0]===0?7:p[0]===W?W-7:p[0],y=p[1]===0?7:p[1]===H?H-7:p[1];ctx.beginPath();ctx.arc(x,y,3,0,7);ctx.fill()});
ctx.strokeStyle='#e9a3c0';ctx.lineWidth=2;ctx.setLineDash([5,5]);ctx.strokeRect(22,22,W-44,H-44);ctx.setLineDash([])}
/* ===== border styles ===== */
const TAU=Math.PI*2,fr=v=>v-Math.floor(v),hh=(k,s)=>fr(Math.sin(k*127.1+s*311.7)*43758.5453);
function hole(W,H,l,t,r,b){ctx.beginPath();ctx.rect(0,0,W,H);ctx.rect(l,t,W-l-r,H-t-b)}
function along(W,H,ins,st,fn){let i=0;const nx=Math.max(2,Math.round((W-2*ins)/st)),ny=Math.max(2,Math.round((H-2*ins)/st));
for(let k=1;k<nx;k++){const x=ins+(W-2*ins)*k/nx;fn(x,ins,'t',i);if(Math.abs(x-W/2)>56)fn(x,H-ins,'b',i);i++}
for(let k=1;k<ny;k++){const y=ins+(H-2*ins)*k/ny;fn(ins,y,'l',i);fn(W-ins,y,'r',i++)}}
const ROT={t:Math.PI,b:0,l:Math.PI/2,r:-Math.PI/2};
function at(x,y,r,fn){ctx.save();ctx.translate(x,y);ctx.rotate(r);fn();ctx.restore()}
function corners(W,H,ins,fn){[[ins,ins],[W-ins,ins],[W-ins,H-ins],[ins,H-ins]].forEach((p,k)=>fn(p[0],p[1],k))}
function cells(W,H,q,cb){for(let x=0;x<W;x+=q)for(let r=0;r<2;r++)[0,H-2*q].forEach(y0=>cb(x,y0+r*q));for(let y=2*q;y<H-2*q;y+=q)for(let c=0;c<2;c++)[0,W-2*q].forEach(x0=>cb(x0+c*q,y))}
function scalPath(W,H,ins,st){const x0=ins,y0=ins,x1=W-ins,y1=H-ins,nx=Math.round((x1-x0)/st),ny=Math.round((y1-y0)/st),rx=(x1-x0)/nx/2,ry=(y1-y0)/ny/2,P=Math.PI;
ctx.moveTo(x0,y0);
for(let i=0;i<nx;i++)ctx.arc(x0+rx*(2*i+1),y0,rx,P,0,true);
for(let i=0;i<ny;i++)ctx.arc(x1,y0+ry*(2*i+1),ry,-P/2,P/2,true);
for(let i=0;i<nx;i++)ctx.arc(x1-rx*(2*i+1),y1,rx,0,P,true);
for(let i=0;i<ny;i++)ctx.arc(x0,y1-ry*(2*i+1),ry,P/2,-P/2,true)}
function scal(W,H,ins,st,fill,stroke,lw){ctx.beginPath();ctx.rect(0,0,W,H);scalPath(W,H,ins,st);ctx.fillStyle=fill;ctx.fill('evenodd');ctx.beginPath();scalPath(W,H,ins,st);ctx.closePath();ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.lineJoin='round';ctx.stroke()}
/* ears + paws (kitty / wolf) */
function ear(x,y,w,h,rot,o){at(x,y,rot,()=>{const P=()=>{ctx.beginPath();ctx.moveTo(-w/2,0);ctx.quadraticCurveTo(-w/2,-h*.8,-w*.08,-h);ctx.quadraticCurveTo(w/2,-h*.7,w/2,0);ctx.closePath()};
P();ctx.fillStyle=o.ear;ctx.fill();ctx.strokeStyle=o.line;ctx.lineWidth=2.5;ctx.lineJoin='round';ctx.stroke();
ctx.save();ctx.scale(.52,.6);P();ctx.fillStyle=o.inner;ctx.fill();ctx.restore()})}
function paw(x,y,o){ctx.beginPath();ctx.ellipse(x,y,17,13,0,0,TAU);ctx.fillStyle=o.paw;ctx.fill();ctx.strokeStyle=o.line;ctx.lineWidth=2.5;ctx.stroke();ctx.fillStyle=o.bean;[[-7,3],[0,6],[7,3]].forEach(p=>{ctx.beginPath();ctx.arc(x+p[0],y+p[1],2.6,0,TAU);ctx.fill()})}
const earsB=o=>({b(W,H){scal(W,H,16,20,o.band,o.line,2.5);ear(W*.2,36,46,34,-.22,o);ear(W*.8,36,46,34,.22,o)},f(W,H,l){const bw=l.c*l.w+(l.c-1)*GAP;paw(PAD+bw*.3,TOP-1,o);paw(PAD+bw*.7,TOP-1,o)}});
const KIT={band:'#fffdf9',line:'#e9a3c0',ear:'#fffdf9',inner:'#f6c6d9',paw:'#fffdf9',bean:'#f6a6bd'},WLF={band:'#7a8294',line:'#2b2f3a',ear:'#7a8294',inner:'#f2c4d0',paw:'#f4f6fa',bean:'#f6a6bd'};
/* garden */
function leaf(x,y,r,s){at(x,y,r,()=>{ctx.beginPath();ctx.ellipse(0,0,s,s*.45,0,0,TAU);ctx.fillStyle='#9fe0b0';ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.stroke()})}
const GC=['#f9c5d5','#fff3b8','#d9c2f0','#ffd0b0'];
const garden={b(W,H){ctx.lineJoin='round';const v=()=>{ctx.beginPath();ctx.rect(14,14,W-28,H-28)};
v();ctx.strokeStyle=INK;ctx.lineWidth=6.5;ctx.stroke();v();ctx.strokeStyle='#9fe0b0';ctx.lineWidth=3.5;ctx.stroke();
along(W,H,14,26,(x,y,s,i)=>leaf(x,y,(i%2?.7:-.7)+(s==='l'||s==='r'?Math.PI/2:0),8));
along(W,H,13,50,(x,y,s,i)=>at(x,y,hh(i,1)-.5,()=>drawSt(ctx,i%3===2?'berry':'flower',GC[i%4],24)));
corners(W,H,17,(x,y)=>at(x,y,0,()=>drawSt(ctx,'bow','#f6a6c8',38)))}};
/* forest: mushrooms, clover, frogs */
function mush(s,cap){ctx.lineJoin='round';ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.fillStyle='#fff6e6';ctx.beginPath();ctx.rect(-s*.15,-s*.55,s*.3,s*.55);ctx.fill();ctx.stroke();
ctx.fillStyle=cap;ctx.beginPath();ctx.moveTo(-s*.44,-s*.5);ctx.quadraticCurveTo(-s*.46,-s*1.1,0,-s*1.1);ctx.quadraticCurveTo(s*.46,-s*1.1,s*.44,-s*.5);ctx.closePath();ctx.fill();ctx.stroke();
ctx.fillStyle='#fff';[[-.16,-.78,.07],[.14,-.7,.06],[0,-.95,.05]].forEach(d=>{ctx.beginPath();ctx.arc(d[0]*s,d[1]*s,d[2]*s,0,TAU);ctx.fill()})}
function clover(s){ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.beginPath();ctx.moveTo(0,-s*.45);ctx.lineTo(0,0);ctx.stroke();ctx.fillStyle='#8fdca4';ctx.lineWidth=1.8;[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(d=>{ctx.beginPath();ctx.arc(d[0]*s*.2,-s*.65+d[1]*s*.2,s*.22,0,TAU);ctx.fill();ctx.stroke()})}
function frog(s){ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.fillStyle='#a8dc8a';[-1,1].forEach(d=>{ctx.beginPath();ctx.arc(d*s*.55,-s*.6,s*.36,0,TAU);ctx.fill();ctx.stroke()});
ctx.beginPath();ctx.ellipse(0,0,s,s*.78,0,0,TAU);ctx.fill();ctx.stroke();
[-1,1].forEach(d=>{ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(d*s*.55,-s*.6,s*.2,0,TAU);ctx.fill();ctx.fillStyle=INK;ctx.beginPath();ctx.arc(d*s*.55,-s*.58,s*.09,0,TAU);ctx.fill();ctx.fillStyle='#ffb3c6';ctx.beginPath();ctx.arc(d*s*.55,s*.18,s*.16,0,TAU);ctx.fill()});
ctx.strokeStyle=INK;ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(0,s*.05,s*.2,.15*Math.PI,.85*Math.PI);ctx.stroke()}
const forest={b(W,H){scal(W,H,9,16,'#d4f3d9','#5fa874',2);
along(W,H,3,34,(x,y,s,i)=>at(x,y,ROT[s],()=>{const m=i%3;m===1?clover(26):mush(26,m===2?'#ffd45e':'#e8584a')}));
corners(W,H,17,(x,y)=>at(x,y,0,()=>frog(11)))}};
/* winter */
function flake(r){ctx.strokeStyle='#6fa0d0';ctx.lineWidth=2;ctx.lineCap='round';for(let k=0;k<3;k++){ctx.save();ctx.rotate(k*Math.PI/3);ctx.beginPath();ctx.moveTo(-r,0);ctx.lineTo(r,0);ctx.stroke();ctx.restore()}ctx.lineCap='butt'}
const winter={b(W,H){scal(W,H,16,20,'#f3fbff','#8fb8dd',2.5);
along(W,H,9,36,(x,y,s,i)=>at(x,y,hh(i,2),()=>{if(i%2)flake(6+hh(i,3)*3);else{ctx.beginPath();ctx.arc(0,0,3,0,TAU);ctx.fillStyle='#bcdcf5';ctx.fill()}}));
corners(W,H,15,(x,y,k)=>at(x,y,.3*k,()=>flake(11)))}};
/* doodle stars */
const doodle={b(W,H){const bm=MODE==='boy';
along(W,H,13,32,(x,y,s,i)=>at(x,y,(hh(i,4)-.5)*.9,()=>{const j=i%5;ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.lineJoin='round';
if(j===0)drawSt(ctx,'star','#fff',22);
else if(j===1)drawSt(ctx,bm?'bolt':'sparkle',bm?'#ffd45e':INK,18);
else if(j===2){ctx.font='700 22px Gaegu,"Zen Maru Gothic",cursive';ctx.fillStyle=INK;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(bm?'!!':'♪',0,0)}
else if(j===3){ctx.beginPath();ctx.arc(0,0,6,0,TAU);ctx.stroke()}
else{ctx.beginPath();ctx.moveTo(-6,0);ctx.lineTo(6,0);ctx.moveTo(0,-6);ctx.lineTo(0,6);ctx.stroke()}}));
corners(W,H,17,(x,y,k)=>at(x,y,(k-1.5)*.35,()=>{drawSt(ctx,'star',INK,36);drawSt(ctx,'sparkle','#fff',13)}))}};
/* retro window (title bar + bevel) */
const retro={b(W,H){const g=MODE==='boy',tb=g?['#0a246a','#a6caf0']:['#f48fb8','#c9b6f5'],dk=g?'#7d8394':'#c9a9d9';
hole(W,H,12,30,12,12);ctx.fillStyle=g?'#cfd3dd':'#f6ecfb';ctx.fill('evenodd');
ctx.fillStyle='#fff';ctx.fillRect(0,0,W,2);ctx.fillRect(0,0,2,H);ctx.fillStyle=dk;ctx.fillRect(0,H-2,W,2);ctx.fillRect(W-2,0,2,H);
const gr=ctx.createLinearGradient(0,0,W,0);gr.addColorStop(0,tb[0]);gr.addColorStop(1,tb[1]);ctx.fillStyle=gr;ctx.fillRect(5,5,W-10,20);
ctx.fillStyle='#fff';ctx.font='700 15px "Pixelify Sans","Zen Maru Gothic",monospace';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(g?'snapbooth.exe':'snapbooth ♡',12,16);
['_','□','×'].forEach((t,i)=>{const x=W-10-(3-i)*21;ctx.fillStyle=g?'#cfd3dd':'#fff';ctx.fillRect(x,8,18,15);ctx.strokeStyle=INK;ctx.lineWidth=1.5;ctx.strokeRect(x,8,18,15);ctx.fillStyle=INK;ctx.textAlign='center';ctx.font='700 13px sans-serif';ctx.fillText(t,x+9,16)});
ctx.fillStyle=dk;ctx.fillRect(10,28,W-20,2);ctx.fillRect(10,28,2,H-38);ctx.fillStyle='#fff';ctx.fillRect(10,H-12,W-20,2);ctx.fillRect(W-12,28,2,H-38)}};
/* boy borders */
function cone(){ctx.lineJoin='round';ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.fillStyle='#ff8a3d';ctx.beginPath();ctx.moveTo(0,-11);ctx.lineTo(8,8);ctx.lineTo(-8,8);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#fff';ctx.fillRect(-4.5,-1,9,4);ctx.fillStyle='#4a4a5a';ctx.fillRect(-10,8,20,4)}
const road={b(W,H){hole(W,H,24,24,24,22);ctx.fillStyle='#3a3f4d';ctx.fill('evenodd');ctx.strokeStyle='#ffd45e';ctx.lineWidth=3;ctx.setLineDash([14,10]);ctx.strokeRect(12,12,W-24,H-24);ctx.setLineDash([]);ctx.strokeStyle='#fff';ctx.lineWidth=2;ctx.strokeRect(3,3,W-6,H-6);
corners(W,H,13,()=>at(0,0,0,cone))}};
const curb={b(W,H){const q=24,d=20;ctx.lineWidth=1.5;ctx.strokeStyle='#2b2f3a';const blk=(x,y,w,h,i)=>{ctx.fillStyle=i%2?'#fff':'#d8452f';ctx.fillRect(x,y,w,h);ctx.strokeRect(x,y,w,h)};
for(let x=0,i=0;x<W;x+=q,i++){blk(x,0,Math.min(q,W-x),d,i);blk(x,H-d,Math.min(q,W-x),d,i)}
for(let y=d,i=1;y<H-d;y+=q,i++){const h=Math.min(q,H-d-y);blk(0,y,d,h,i);blk(W-d,y,d,h,i)}}};
const hazard={b(W,H){const d=20;ctx.save();hole(W,H,d,d,d,d);ctx.clip('evenodd');ctx.fillStyle='#ffd23f';ctx.fillRect(0,0,W,H);ctx.fillStyle='#2b2f3a';
for(let i=-H;i<W;i+=30){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i+15,0);ctx.lineTo(i+15+H,H);ctx.lineTo(i+H,H);ctx.closePath();ctx.fill()}ctx.restore();
ctx.strokeStyle='#2b2f3a';ctx.lineWidth=3;ctx.strokeRect(1.5,1.5,W-3,H-3)}};
const space={b(W,H){const d=22;hole(W,H,d,d,d,d);ctx.fillStyle='#1c2442';ctx.fill('evenodd');
for(let k=0;k<170;k++){const s=k%4,a=hh(k,1),c=hh(k,2);let x,y;if(s===0){x=a*W;y=c*(d-3)}else if(s===1){x=a*W;y=H-c*(d-3)}else if(s===2){x=c*(d-3);y=a*H}else{x=W-c*(d-3);y=a*H}
ctx.globalAlpha=.5+.5*hh(k,3);ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(x,y,.7+hh(k,5)*1.3,0,TAU);ctx.fill()}ctx.globalAlpha=1;
along(W,H,11,70,(x,y)=>at(x,y,0,()=>drawSt(ctx,'sparkle','#ffe58a',12)));
corners(W,H,18,(x,y,k)=>at(x,y,0,()=>{if(k===0)drawSt(ctx,'star','#ffe58a',30);else if(k===1){ctx.rotate(.7);drawSt(ctx,'rocket','#fff',40)}
else if(k===2){ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.fillStyle='#ff9b6b';ctx.beginPath();ctx.arc(0,0,10,0,TAU);ctx.fill();ctx.stroke();ctx.strokeStyle='#fff';ctx.beginPath();ctx.ellipse(0,0,18,5,-.4,0,TAU);ctx.stroke()}
else drawSt(ctx,'moon','#fff3b8',30)}))}};
const blocks={b(W,H){const q=12,C=['#4a86d8','#ffd45e','#e0382b','#5fcf80'];cells(W,H,q,(x,y)=>{ctx.fillStyle=C[(Math.floor(x/q)+Math.floor(y/q))%4];ctx.fillRect(x,y,q,q);ctx.fillStyle='rgba(255,255,255,.45)';ctx.fillRect(x,y,q,3);ctx.fillRect(x,y,3,q);ctx.strokeStyle='#1f2f4a';ctx.lineWidth=1.5;ctx.strokeRect(x+.75,y+.75,q-1.5,q-1.5)})}};
/* digital camera body (photo area = camera screen) */
function rrp(x,y,w,h,r){ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x,y,w,h,r);else ctx.rect(x,y,w,h)}
function obj(fill,lw){ctx.fillStyle=fill;ctx.fill();ctx.strokeStyle=INK;ctx.lineWidth=lw||2.5;ctx.lineJoin='round';ctx.stroke()}
function circ(x,y,r,fill,lw){ctx.beginPath();ctx.arc(x,y,r,0,TAU);obj(fill,lw)}
const cam={b(W,H){const g=MODE==='boy',P=g?'#6fb2e8':'#f6a6c8',GL=g?'#2f4a7a':'#bcd9f5',{l}=dims(),rows=Math.ceil(l.n/l.c),bw=l.c*l.w+(l.c-1)*GAP,Hb=rows*l.h+(rows-1)*GAP;
const ic=(x,y,s,f)=>at(x,y,0,()=>drawSt(ctx,g?'star':'heart',f,s)),txt=(t,x,y,fs)=>{ctx.fillStyle=INK;ctx.font=`700 ${fs}px "Zen Maru Gothic",sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(t,x,y)};
/* body */
ctx.beginPath();ctx.rect(0,0,W,H);if(ctx.roundRect)ctx.roundRect(12,12,W-24,H-24,34);else ctx.rect(12,12,W-24,H-24);ctx.fillStyle='#fff';ctx.fill('evenodd');
rrp(12,12,W-24,H-24,34);ctx.strokeStyle=INK;ctx.lineWidth=3.5;ctx.lineJoin='round';ctx.stroke();
/* top-left: lens window, zoom */
ctx.save();ctx.translate(-81,-163);circ(170,230,27,'#fff');ic(138,262,34,P);circ(225,213,7,'#fff');circ(224,251,12,'#fff');
rrp(243,213,49,37,[18,4,4,18]);obj('#fff');rrp(297,213,81,37,3);obj('#fff');rrp(385,213,45,37,[4,18,18,4]);obj('#fff');txt('T',268,232,16);txt('W',408,232,16);ctx.restore();
/* top-right: shutter */
ctx.save();ctx.translate(W-629,-163);rrp(481,190,126,65,32);obj('#fff');rrp(528,187,47,38,3);obj(P);rrp(500,207,9,26,3);obj('#fff');ctx.restore();
/* screen bezel */
rrp(PAD-14,TOP-14,bw+28,Hb+28,14);obj('#f4f4f8',3);rrp(PAD-8,TOP-8,bw+16,Hb+16,6);ctx.strokeStyle=INK;ctx.lineWidth=2.2;ctx.stroke();
/* right column */
const cx=(PAD+bw+14+W-12)/2,ph=Math.min(330,Hb+10-150),y0=TOP+Hb+10-ph;
ic(cx,TOP+30,52,P);txt('I',cx,TOP+32,15);circ(cx-20,TOP+80,7,'#fff');ic(cx+2,TOP+114,44,'#fff');
for(let y=TOP+172,k=0;y<y0-30;y+=64,k++)ic(cx+(k%2?-8:8),y,20+(k%3)*4,k%2?'#fff':P);
rrp(cx-27,y0,54,ph,27);obj('#fff',2.6);
const capH=Math.min(120,ph*.3);rrp(cx-21,y0+7,42,capH,21);obj('#f4f4f8',2);circ(cx,y0+7+capH*.4,11,P,2);
const ry=y0+7+capH+8,sh=(y0+ph-7-ry-16)/3;rrp(cx-21,ry,42,sh,[18,18,4,4]);obj('#fff',2);rrp(cx-21,ry+sh+8,42,sh,4);obj('#fff',2);rrp(cx-21,ry+2*(sh+8),42,sh,[4,4,18,18]);obj('#fff',2);
/* bottom: lens, dial, buttons */
const lx=W*.54,ly=H-105;
circ(lx,ly,85,'#fff',3);circ(lx,ly,45,'#fff',2.5);circ(lx,ly,38,GL,2.5);ctx.fillStyle='rgba(255,255,255,.75)';ctx.beginPath();ctx.arc(lx-12,ly-12,7,0,TAU);ctx.fill();
rrp(lx-167,ly-85,36,90,18);obj('#fff');ic(lx-163,ly+25,26,P);ic(lx-148,ly+68,36,'#fff');ic(lx-148,ly+68,18,P);
ctx.lineCap='round';ctx.beginPath();ctx.arc(lx,ly,118,-.5,.5);ctx.strokeStyle=INK;ctx.lineWidth=25;ctx.stroke();ctx.beginPath();ctx.arc(lx,ly,118,-.5,.5);ctx.strokeStyle='#fff';ctx.lineWidth=20;ctx.stroke();ctx.lineCap='butt';
ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(lx+106,ly);ctx.lineTo(lx+130,ly);ctx.stroke();ctx.fillStyle=INK;ctx.beginPath();ctx.arc(lx+118*Math.cos(-.25),ly+118*Math.sin(-.25),3,0,TAU);ctx.fill();
rrp(lx+160,ly-56,50,72,4);obj('#fff');ic(lx+185,ly+62,40,'#fff');
at(58,ly-30,0,()=>drawSt(ctx,'sparkle',P,22));ic(62,ly+40,30,P)}};
const mk=(n,o)=>({n,...o});
const BD={
girl:{lace:mk('lace',{b:lace}),fluff:mk('fluffy cloud',{b:(W,H)=>scal(W,H,16,20,'#fffdf9','#e9a3c0',2.5)}),kitty:mk('kitty ears',earsB(KIT)),garden:mk('flower garden',garden),forest:mk('mushroom forest',forest),winter:mk('winter snow',winter),doodle:mk('doodle stars',doodle),retro:mk('retro window',retro),cam:mk('digital camera',cam),none:mk('no border',{})},
boy:{checker:mk('racing flag',{b:checker}),road:mk('race road',road),curb:mk('pit curb',curb),hazard:mk('hazard tape',hazard),space:mk('outer space',space),blocks:mk('pixel blocks',blocks),wolf:mk('wolf pup',earsB(WLF)),doodle:mk('doodle stars',doodle),retro:mk('retro window',retro),cam:mk('digital camera',cam),none:mk('no border',{})}};
/* ===== extra borders: lace bands, stamp, cloud notebook, tv, cat frames ===== */
const GEO={cam:[58,128,162,330,270],cloud:[40,40,92,132,66],tv:[40,124,76,132,66],party:[40,40,64,130,65],navy:[40,40,64,130,65]};
const pal=()=>MODE==='boy'?{m:'#8fbdf0',a:'#2f6fb5',c:'#f4f7fb',s:'#ffd9a8',ln:'#2b3a55',lt:'#cfe3fb'}:{m:'#f9b8d0',a:'#f0709f',c:'#fffaf0',s:'#b7d5f7',ln:'#6b5560',lt:'#fde3ec'};
function bow(c,x,y,s,col,ln){c.lineJoin='round';c.lineWidth=1.4;c.strokeStyle=ln;c.fillStyle=col;c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x-s*1.6,y-s*1.1,x-s*1.7,y+s*1.1,x,y);c.bezierCurveTo(x+s*1.6,y-s*1.1,x+s*1.7,y+s*1.1,x,y);c.fill();c.stroke();c.beginPath();c.arc(x,y,s*.38,0,TAU);c.fill();c.stroke()}
const mot=(c,x,y,s,col,ln)=>MODE==='boy'?kstar(c,x,y,s*1.2,col,ln):bow(c,x,y,s*1.3,col,ln);
const sm=(c,x,y,fill,ln)=>MODE==='boy'?kstar(c,x,y,6,fill,ln):kheart(c,x,y,.15,fill,ln);
function sbump(c,L,n,base){const st=L/n;for(let i=0;i<n;i++)c.arc(st*(i+.5),base,st/2,Math.PI,0,true)}
function scallopFill(c,L,st,base,fill,ln,lw){const n=Math.round(L/st);c.beginPath();c.moveTo(0,0);c.lineTo(0,base);sbump(c,L,n,base);c.lineTo(L,0);c.closePath();c.fillStyle=fill;c.fill();c.beginPath();c.moveTo(0,base);sbump(c,L,n,base);c.strokeStyle=ln;c.lineWidth=lw||1.6;c.lineJoin='round';c.stroke()}
const PT={
eyelet(c,L,D){const p=pal(),n=Math.round(L/20),s=L/n,b=D-s/2;scallopFill(c,L,20,b,p.c,p.ln);c.strokeStyle=p.a;c.lineWidth=1.5;c.lineCap='round';for(let i=0;i<n;i++){const x=s*(i+.5);[-5,0,5].forEach(d=>{c.beginPath();c.moveTo(x+d,b-2-(d?0:3));c.lineTo(x+d*1.3,b+3);c.stroke()})}},
heartscal(c,L,D){const p=pal(),n=Math.round(L/26),s=L/n,b=D-s/2;scallopFill(c,L,26,b,p.m,p.ln);for(let i=0;i<n;i++)sm(c,s*(i+.5),b-1,'#fff0f5',p.a)},
bowband(c,L,D){const p=pal();scallopFill(c,L,12,D-6,p.m,p.ln);for(let x=22;x<L;x+=44){mot(c,x,D/2-3,6,p.a,p.ln);c.fillStyle=p.lt;c.strokeStyle=p.ln;c.lineWidth=1;c.fillRect(x+18,D/2-5,8,5);c.strokeRect(x+18,D/2-5,8,5)}},
bowscal(c,L,D){const p=pal();scallopFill(c,L,12,D-6,p.c,p.ln,1.2);const n=Math.round(L/22),s=L/n,b=D-6-s/2;scallopFill(c,L,22,b,p.s,p.ln);for(let i=0;i<n;i++)mot(c,s*(i+.5),b+2,5.5,p.m,p.ln)},
ruffle(c,L,D){const p=pal();scallopFill(c,L,12,D-5,p.c,p.ln,1.2);c.fillStyle=p.a;for(let x=6;x<L;x+=12){c.beginPath();c.arc(x,D-9,1.3,0,TAU);c.fill()}const n=Math.round(L/24),s=L/n,b=D-5-s/2;scallopFill(c,L,24,b,p.s,p.ln);c.strokeStyle=p.ln;c.lineWidth=1;for(let i=0;i<n;i++){const x=s*(i+.5);c.beginPath();c.moveTo(x,2);c.lineTo(x,b+3);c.stroke()}},
swag(c,L,D){const p=pal(),n=Math.round(L/56),s=L/n;for(let i=0;i<n;i++){[[5.5,p.ln],[3.2,p.m]].forEach(q=>{c.beginPath();c.moveTo(i*s,5);c.quadraticCurveTo(i*s+s/2,D+6,(i+1)*s,5);c.lineWidth=q[0];c.strokeStyle=q[1];c.lineCap='round';c.stroke()})}for(let i=0;i<=n;i++)mot(c,i*s,6,6.5,p.m,p.ln)},
pearls(c,L,D){const p=pal();for(let x=4;x<L;x+=8.4){c.beginPath();c.arc(x,D/2,4,0,TAU);c.fillStyle='#fffaf0';c.fill();c.strokeStyle='#b8a592';c.lineWidth=1;c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x-1.2,D/2-1.2,1.1,0,TAU);c.fill()}for(let x=30;x<L-10;x+=70)mot(c,x,D/2,8,p.m,p.ln)},
stitch(c,L,D){const p=pal();scallopFill(c,L,12,D-6,p.m,p.ln);c.fillStyle=p.lt;c.fillRect(0,0,L,5);c.setLineDash([8,6]);c.strokeStyle=p.a;c.lineWidth=2;c.beginPath();c.moveTo(0,D/2-2);c.lineTo(L,D/2-2);c.stroke();c.setLineDash([])},
lacepink(c,L,D){const p=pal();c.fillStyle=p.m;c.fillRect(0,0,L,D-10);scallopFill(c,L,16,D-8,p.c,p.ln,1.3);c.fillStyle=p.a;const n=Math.round(L/16),s=L/n;for(let i=0;i<n;i++){c.beginPath();c.arc(s*(i+.5),D-9,1.6,0,TAU);c.fill()}c.strokeStyle=p.ln;c.lineWidth=1.2;c.beginPath();c.moveTo(0,D-9);c.lineTo(L,D-9);c.stroke()}};
function bandB(P){return{b(W,H){const D=24;ctx.lineJoin='round';
[[0,0,0,W,[[0,0],[W,0],[W-D,D],[D,D]]],[W,0,Math.PI/2,H,[[W,0],[W,H],[W-D,H-D],[W-D,D]]],[W,H,Math.PI,W,[[W,H],[0,H],[D,H-D],[W-D,H-D]]],[0,H,-Math.PI/2,H,[[0,H],[0,0],[D,D],[D,H-D]]]].forEach(e=>{ctx.save();ctx.beginPath();e[4].forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.closePath();ctx.clip();ctx.translate(e[0],e[1]);ctx.rotate(e[2]);P(ctx,e[3],D);ctx.restore()})}}}
const BND=[['eyelet','lace eyelet'],['heartscal',null],['bowband','bow band'],['bowscal','bow scallop'],['ruffle','ruffle lace'],['swag','ribbon swag'],['pearls','pearl string'],['stitch','stitched band'],['lacepink','pink lace']];
function photoBox(){const {l}=dims(),rows=Math.ceil(l.n/l.c);return{bw:l.c*l.w+(l.c-1)*GAP,Hb:rows*l.h+(rows-1)*GAP}}
function st5(x,y,s,fill,sc){ctx.save();ctx.translate(x,y);ctx.scale(s/100,s/100);ctx.translate(-50,-50);const p=new Path2D(SH.star[0]);ctx.fillStyle=fill;ctx.fill(p);ctx.lineWidth=7;ctx.strokeStyle=sc;ctx.lineJoin='round';ctx.stroke(p);ctx.restore()}
/* postage stamp */
const stamp={b(W,H){const {bw,Hb}=photoBox(),B='#3b7be0';ctx.beginPath();ctx.rect(0,0,W,H);scalPath(W,H,9,18);ctx.fillStyle='#fff';ctx.fill('evenodd');
ctx.beginPath();scalPath(W,H,9,18);ctx.closePath();ctx.strokeStyle=B;ctx.lineWidth=3;ctx.lineJoin='round';ctx.stroke();
ctx.strokeStyle=B;ctx.lineWidth=5;ctx.strokeRect(PAD-12,TOP-12,bw+24,Hb+24);
[[W-40,24,-.5],[W-24,44,.3],[28,H-34,2.6],[16,H-52,-2.2]].forEach(q=>kleaf(ctx,q[0],q[1],q[2],1.1,'#c8dfa5'))}};
/* blue cloud notebook with pixel pups */
const PXS={pup:['..kk......kk..','.kkkk....kkkk.','.kkkwwwwwwkkk.','.kkwwwwwwwwkk.','..wwwwwwwwww..','..wkwwwwwwkw..','..pwwwwoowwp..','...wwwwwwww...','....wwwwww....'],chick:['..yyyy..','.yyyyyy.','.ykyyky.','pyyooyyp','.yyyyyy.','..o..o..']},PXC={k:'#3f4468',w:'#fffefe',p:'#f6a3b6',o:'#f2a54a',y:'#ffd96b'};
function pxs(x,y,u,g){const R=g.length,Cn=g[0].length,f=(r,c)=>r>=0&&c>=0&&r<R&&c<Cn&&g[r][c]!=='.';ctx.fillStyle='#3f4a85';for(let r=-1;r<=R;r++)for(let c=-1;c<=Cn;c++)if(!f(r,c)&&(f(r-1,c)||f(r+1,c)||f(r,c-1)||f(r,c+1)))ctx.fillRect(x+c*u,y+r*u,u+.5,u+.5);for(let r=0;r<R;r++)for(let c=0;c<Cn;c++)if(f(r,c)){ctx.fillStyle=PXC[g[r][c]];ctx.fillRect(x+c*u,y+r*u,u+.5,u+.5)}}
const cloud={cap:INK,b(W,H){ctx.fillStyle='#cddcf8';ctx.fillRect(0,0,W,H);ctx.fillStyle='#b4c8f3';[[0,0,90],[W,H,110],[W,30,60],[0,H,70]].forEach(q=>{ctx.beginPath();ctx.arc(q[0],q[1],q[2],0,TAU);ctx.fill()});
ctx.fillStyle='#6f8ee8';for(let k=0;k<46;k++)ctx.fillRect(hh(k,1)*W,hh(k,2)*H,5,5);ctx.strokeStyle='#5a7be0';ctx.lineWidth=3;[[14,H*.42],[W-14,H*.62],[W*.3,H-12]].forEach(q=>{ctx.beginPath();ctx.moveTo(q[0]-7,q[1]);ctx.lineTo(q[0]+7,q[1]);ctx.moveTo(q[0],q[1]-7);ctx.lineTo(q[0],q[1]+7);ctx.stroke()});
const x0=18,y0=TOP-26,x1=W-18,y1=H-24,p=new Path2D();p.rect(x0+8,y0+8,x1-x0-16,y1-y0-16);p.rect(x0,y0+14,x1-x0,y1-y0-28);p.rect(x0+14,y0,x1-x0-28,y1-y0);
for(let x=x0+26;x<x1-20;x+=30){p.moveTo(x+14,y0+4);p.arc(x,y0+4,14,0,TAU);p.moveTo(x+14,y1-4);p.arc(x,y1-4,14,0,TAU)}for(let y=y0+34;y<y1-30;y+=30){p.moveTo(x0+18,y);p.arc(x0+4,y,14,0,TAU);p.moveTo(x1+10,y);p.arc(x1-4,y,14,0,TAU)}
ctx.fillStyle='#fff';ctx.fill(p);ctx.save();ctx.clip(p);ctx.strokeStyle='#d3ddf3';ctx.lineWidth=1.5;for(let x=x0;x<x1;x+=24){ctx.beginPath();ctx.moveTo(x,y0);ctx.lineTo(x,y1);ctx.stroke()}for(let y=y0;y<y1;y+=24){ctx.beginPath();ctx.moveTo(x0,y);ctx.lineTo(x1,y);ctx.stroke()}ctx.restore();
pxs(8,10,5,PXS.pup);pxs(W-82,10,5,PXS.pup);pxs(W-118,34,4,PXS.chick);pxs(8,H-60,5,PXS.pup);pxs(24,H-96,4,PXS.chick);pxs(W-52,H-40,5,PXS.chick);pxs(W-52,H-68,5,PXS.chick);
ctx.strokeStyle='#4a6fd0';ctx.lineWidth=3;ctx.beginPath();ctx.arc(W-30,H-96,11,0,TAU);ctx.stroke()}};
/* retro tv */
const tv={cap:'#fff',b(W,H){const g=MODE==='boy',{bw,Hb}=photoBox(),c1=g?'#98a1c2':'#cfc9ea',c2=g?'#707aa0':'#a7a0cf',ln=g?'#3f4668':'#6a5f90';
ctx.beginPath();ctx.rect(0,0,W,H);if(ctx.roundRect)ctx.roundRect(10,26,W-20,H-38,34);else ctx.rect(10,26,W-20,H-38);ctx.fillStyle='#fff';ctx.fill('evenodd');
const gr=ctx.createLinearGradient(0,26,0,H);gr.addColorStop(0,c1);gr.addColorStop(1,c2);rrp(10,26,W-20,H-38,34);ctx.fillStyle=gr;ctx.fill();ctx.strokeStyle=ln;ctx.lineWidth=3.5;ctx.stroke();
rrp(PAD-16,TOP-16,bw+32,Hb+32,28);ctx.fillStyle='#eef0fa';ctx.fill();ctx.lineWidth=3;ctx.stroke();rrp(PAD-8,TOP-8,bw+16,Hb+16,20);ctx.lineWidth=2;ctx.stroke();
const cx=(PAD+bw+16+W-10)/2;[0,1].forEach(i=>{const y=TOP+48+i*72;ctx.fillStyle='#d8dbec';ctx.beginPath();ctx.arc(cx,y,23,0,TAU);ctx.fill();ctx.lineWidth=2.5;ctx.strokeStyle=ln;ctx.stroke();for(let k=0;k<12;k++){const a=k*TAU/12;ctx.beginPath();ctx.moveTo(cx+Math.cos(a)*18,y+Math.sin(a)*18);ctx.lineTo(cx+Math.cos(a)*23,y+Math.sin(a)*23);ctx.lineWidth=1.5;ctx.stroke()}ctx.fillStyle='#b8bcd6';ctx.beginPath();ctx.arc(cx,y,13,0,TAU);ctx.fill();ctx.lineWidth=2;ctx.stroke();ctx.beginPath();ctx.moveTo(cx,y);ctx.lineTo(cx+7,y-7);ctx.stroke()});
rrp(cx-36,TOP+Hb-116,72,104,6);ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=2.5;ctx.strokeStyle=ln;ctx.stroke();ctx.lineWidth=1.8;at(cx+8,TOP+Hb-88,0,()=>drawSt(ctx,'heart','#fff',32));at(cx-8,TOP+Hb-52,0,()=>drawSt(ctx,'heart','#fff',32));
at(48,44,-.2,()=>drawSt(ctx,'star','#fff',84))}};
/* cat doodle frames */
const party={b(W,H){const d=28;hole(W,H,d,d,d,d);ctx.fillStyle='#fbe9c4';ctx.fill('evenodd');ctx.strokeStyle='#3a2f2a';ctx.lineWidth=3;ctx.strokeRect(1.5,1.5,W-3,H-3);
along(W,H,14,28,(x,y,s,i)=>{if(s==='t'&&x>W-140)return;const j=i%3;if(j===0)kstar(ctx,x,y,7,'#ffd24a','#c9962f');else if(j===1){ctx.fillStyle='#ff7a59';ctx.beginPath();ctx.arc(x,y,3,0,TAU);ctx.fill()}else kplus(ctx,x,y,4,'#c9962f')});
ctx.font='700 24px Gaegu,"Zen Maru Gothic",cursive';ctx.fillStyle='#e0382f';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('WINK~',W-84,15);
at(36,36,0,()=>drawKw(ctx,'cat:white:cute:0',46));ctx.beginPath();ctx.moveTo(24,22);ctx.lineTo(34,3);ctx.lineTo(44,22);ctx.closePath();ctx.fillStyle='#7fb2f0';ctx.fill();kl(ctx,1.8);ctx.stroke();
at(W-38,H-40,0,()=>drawKw(ctx,'cat:calico:smile:1',52));kheart(ctx,W-18,24,.28,'#f6a6c8');kstar(ctx,22,H-30,10,'#ffd24a','#c9962f')}};
const navy={b(W,H){const d=28;hole(W,H,d,d,d,d);ctx.fillStyle='#3d4a9a';ctx.fill('evenodd');ctx.strokeStyle='#1f2a5c';ctx.lineWidth=3;ctx.strokeRect(1.5,1.5,W-3,H-3);
ctx.font='700 24px Gaegu,"Zen Maru Gothic",cursive';ctx.fillStyle='#ff6a6a';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('Hello!!',W/2,15);
along(W,H,14,30,(x,y,s,i)=>{if(s==='t'&&Math.abs(x-W/2)<56)return;st5(x,y,12+hh(i,6)*10,'#ffd85e','#e0a82e')});
ctx.fillStyle='#e8453c';ctx.beginPath();ctx.arc(30,36,15,0,TAU);ctx.fill();ctx.strokeStyle='#8a2a24';ctx.lineWidth=2.5;ctx.stroke();ctx.fillStyle='#fff';[[25,36],[35,36]].forEach(q=>{ctx.beginPath();ctx.arc(q[0],q[1],2,0,TAU);ctx.fill()});kleaf(ctx,30,22,-1.2,.7,'#8fd08a');
at(W-38,H-40,0,()=>drawKw(ctx,'cat:white:smile:0',56));bow(ctx,W-20,H-62,6,'#e8453c','#8a2a24');kheart(ctx,W-18,24,.28,'#f6a6c8')}};
const EXT={};BND.forEach(a=>EXT[a[0]]=mk(a[1]||'heart scallop',bandB(PT[a[0]])));
Object.assign(EXT,{stamp:mk('postage stamp',stamp),cloud:mk('blue cloud notebook',cloud),tv:mk('retro tv',tv),party:mk('cat party',party),navy:mk('navy stars',navy)});
['girl','boy'].forEach(m=>{const no=BD[m].none;delete BD[m].none;Object.assign(BD[m],EXT);BD[m].none=no});
function fillB(){$('lace').innerHTML=Object.entries(BD[MODE]).map(([k,v])=>`<option value="${k}">${v.n}</option>`).join('')}

/* ===== extra filters: color grade (FIL, CSS) + digicam effects (FX, canvas) ===== */
Object.assign(FIL,{
ccd:'saturate(1.35) contrast(1.15) brightness(1.05)',
flash:'brightness(1.15) contrast(1.35) saturate(1.1)',
y2k:'saturate(1.7) contrast(1.2) brightness(1.05) hue-rotate(-8deg)',
kodak:'sepia(.25) saturate(1.4) contrast(1.1) brightness(1.04)',
stamp:'saturate(1.2) contrast(1.12)',
dispo:'saturate(1.3) contrast(1.2) sepia(.15) brightness(1.05)',
lofi:'saturate(1.25) contrast(1.15)',
vhs:'saturate(1.35) contrast(1.1) brightness(1.05)',
faded:'contrast(.9) saturate(.85) brightness(1.08)',
leak:'saturate(1.2) contrast(1.05) sepia(.1)',
noir:'grayscale(1) contrast(1.4) brightness(.95)',
cyan:'sepia(1) hue-rotate(170deg) saturate(1.8) contrast(1.05)',
polaroid:'contrast(.92) saturate(1.2) brightness(1.08) sepia(.15)',
glow:'brightness(1.08) saturate(1.2)',
haze:'brightness(1.08) contrast(.92) saturate(1.1)',
night:'grayscale(1) brightness(1.25) contrast(1.3) sepia(1) hue-rotate(65deg) saturate(3)'});
/* fx keys: ca=chromatic aberration px, bloom/soft=glow, vig=vignette, grain, fade=lifted-black colour, tint=[colour,alpha,blend],
   flash=harsh centre flash, leak=orange light leak, scan=scanlines, pix=low-res divisor, stamp=orange date stamp */
const FX={
ccd:{ca:1.6,bloom:.25,vig:.25,grain:.16},
flash:{flash:.5,vig:.22,grain:.12,bloom:.3,ca:1},
y2k:{tint:['#ff4fd8',.2,'soft-light'],ca:2.2,bloom:.35,grain:.12,vig:.15},
kodak:{tint:['#ffb347',.14,'soft-light'],fade:'#241a12',grain:.2,vig:.3},
stamp:{stamp:1,grain:.12,ca:1,vig:.15,bloom:.15},
dispo:{flash:.3,vig:.45,grain:.3,leak:.35,fade:'#1c1814'},
lofi:{pix:2,ca:1.5,grain:.2,bloom:.15},
vhs:{scan:.22,ca:3,fade:'#201c28',grain:.2,soft:1},
faded:{fade:'#38343c',tint:['#3a8fa0',.12,'soft-light'],grain:.22},
leak:{leak:.6,grain:.12,vig:.2},
noir:{grain:.32,vig:.4},
cyan:{grain:.15,vig:.25},
polaroid:{fade:'#2c2822',vig:.2,soft:.6,tint:['#ffd9a0',.12,'soft-light'],grain:.1},
glow:{bloom:.7,bpx:10,soft:1},
haze:{tint:['#ff9ec4',.25,'soft-light'],bloom:.4,fade:'#2a2228',grain:.08},
night:{scan:.25,grain:.35,vig:.5,bloom:.3}};
const stampTxt=()=>{const d=new Date();return"'"+String(d.getFullYear()).slice(2)+' '+(d.getMonth()+1)+' '+d.getDate()};
const mkc=()=>document.createElement('canvas');
const OC=mkc(),oc=OC.getContext('2d'),TC=mkc(),tc=TC.getContext('2d'),T2=mkc(),t2=T2.getContext('2d'),FXLOW=mkc(),NZ=mkc(),SL=mkc();let PAT=null,SPAT=null;
(()=>{NZ.width=NZ.height=256;const g=NZ.getContext('2d'),d=g.createImageData(256,256);for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255;d.data[i]=v+(Math.random()-.5)*50;d.data[i+1]=v+(Math.random()-.5)*50;d.data[i+2]=v+(Math.random()-.5)*50;d.data[i+3]=255}g.putImageData(d,0,0);
SL.width=2;SL.height=3;const s=SL.getContext('2d');s.fillStyle='#000';s.fillRect(0,0,2,1)})();
function fx(g,w,h,f,i,live){if(!f)return;g.save();
if(f.pix){const p=f.pix,pw=Math.round(w/p),ph=Math.round(h/p);FXLOW.width=pw;FXLOW.height=ph;FXLOW.getContext('2d').drawImage(OC,0,0,pw,ph);g.imageSmoothingEnabled=false;g.drawImage(FXLOW,0,0,pw,ph,0,0,w,h);g.imageSmoothingEnabled=true}
if(f.ca){const d=f.ca*w/400;tc.globalCompositeOperation='source-over';tc.filter='none';tc.drawImage(OC,0,0);
g.fillStyle='#000';g.fillRect(0,0,w,h);g.globalCompositeOperation='lighter';
[['#f00',-d],['#0f0',0],['#00f',d]].forEach(([c,o])=>{t2.globalCompositeOperation='source-over';t2.drawImage(TC,0,0);t2.globalCompositeOperation='multiply';t2.fillStyle=c;t2.fillRect(0,0,w,h);g.drawImage(T2,o,0)});g.globalCompositeOperation='source-over'}
if(f.soft||f.bloom){tc.clearRect(0,0,w,h);tc.filter='blur('+(f.bpx||w/80)+'px) brightness(1.15)';tc.drawImage(OC,0,0);tc.filter='none';
if(f.soft){g.globalAlpha=.5*f.soft;g.drawImage(TC,0,0)}
if(f.bloom){g.globalCompositeOperation='screen';g.globalAlpha=f.bloom;g.drawImage(TC,0,0)}
g.globalAlpha=1;g.globalCompositeOperation='source-over'}
if(f.tint){g.globalCompositeOperation=f.tint[2];g.globalAlpha=f.tint[1];g.fillStyle=f.tint[0];g.fillRect(0,0,w,h);g.globalAlpha=1;g.globalCompositeOperation='source-over'}
if(f.fade){g.globalCompositeOperation='lighten';g.fillStyle=f.fade;g.fillRect(0,0,w,h);g.globalCompositeOperation='source-over'}
if(f.flash){const r=g.createRadialGradient(w/2,h*.45,0,w/2,h*.45,w*.6);r.addColorStop(0,'rgba(255,250,240,'+f.flash+')');r.addColorStop(1,'rgba(255,250,240,0)');g.globalCompositeOperation='screen';g.fillStyle=r;g.fillRect(0,0,w,h);g.globalCompositeOperation='source-over'}
if(f.leak){const a=g.createLinearGradient(0,0,w*.5,0);a.addColorStop(0,'rgba(255,120,40,'+f.leak+')');a.addColorStop(1,'rgba(255,120,40,0)');const b=g.createLinearGradient(w,0,w*.6,h*.4);b.addColorStop(0,'rgba(255,90,160,'+f.leak*.6+')');b.addColorStop(1,'rgba(255,90,160,0)');g.globalCompositeOperation='screen';g.fillStyle=a;g.fillRect(0,0,w,h);g.fillStyle=b;g.fillRect(0,0,w,h);g.globalCompositeOperation='source-over'}
if(f.grain){if(!PAT)PAT=g.createPattern(NZ,'repeat');const o=live?Math.random()*256|0:(i*53)%256,oy=o*.7|0;g.globalCompositeOperation='overlay';g.globalAlpha=Math.min(1,f.grain*1.5);g.translate(-o,-oy);g.fillStyle=PAT;g.fillRect(o,oy,w,h);g.setTransform(1,0,0,1,0,0);g.globalAlpha=1;g.globalCompositeOperation='source-over'}
if(f.scan){if(!SPAT)SPAT=g.createPattern(SL,'repeat');g.globalAlpha=f.scan;g.fillStyle=SPAT;g.fillRect(0,0,w,h);g.globalAlpha=1}
if(f.vig){const v=g.createRadialGradient(w/2,h/2,h*.3,w/2,h/2,Math.hypot(w,h)/2);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,'+Math.min(.9,f.vig*2)+')');g.fillStyle=v;g.fillRect(0,0,w,h)}
if(f.stamp){g.font='700 '+Math.round(h*.075)+'px "Pixelify Sans",monospace';g.textAlign='right';g.textBaseline='alphabetic';g.fillStyle='#ff8a1f';g.shadowColor='#ff6a00';g.shadowBlur=6;g.fillText(stampTxt(),w*.95,h*.94)}
g.restore()}
function cell(x,y,l,s,i){const k=$('filter').value,f=FX[k];
if(OC.width!==l.w||OC.height!==l.h){OC.width=TC.width=T2.width=l.w;OC.height=TC.height=T2.height=l.h;PAT=SPAT=null}
oc.save();oc.filter=FIL[k]||'none';const c=s.clip,v=!!(c&&c.videoWidth);
if(v){if(c.m){oc.translate(l.w,0);oc.scale(-1,1)}const ar=l.w/l.h;let sw=c.videoWidth,sh=sw/ar;if(sh>c.videoHeight){sh=c.videoHeight;sw=sh*ar}oc.drawImage(c,(c.videoWidth-sw)/2,(c.videoHeight-sh)/2,sw,sh,0,0,l.w,l.h)}
else oc.drawImage(s,0,0,l.w,l.h);
oc.restore();fx(oc,l.w,l.h,f,i,v);ctx.drawImage(OC,x,y)}
/* live camera preview: CSS filter + lightweight CSS overlay (full effect shows in "decorate") */
function pv(){const k=$('filter').value,f=FX[k]||{},L=[];vid.style.filter=FIL[k]||'none';
if(f.scan)L.push('repeating-linear-gradient(transparent 0 2px,rgba(0,0,0,'+f.scan+') 2px 3px)');
if(f.leak)L.push('linear-gradient(90deg,rgba(255,120,40,'+f.leak+'),transparent 45%)');
if(f.flash)L.push('radial-gradient(ellipse at 50% 45%,rgba(255,250,240,'+f.flash*.6+'),transparent 65%)');
if(f.tint){const c=f.tint[0]+Math.round(f.tint[1]*200).toString(16).padStart(2,'0');L.push('linear-gradient('+c+','+c+')')}
if(f.vig)L.push('radial-gradient(ellipse at center,transparent 45%,rgba(0,0,0,'+Math.min(.9,f.vig*2)+') 100%)');
$('fxo').style.background=L.join(',')||'none';$('fxs').textContent=f.stamp?stampTxt():''}
if(document.fonts&&document.fonts.load)document.fonts.load('700 20px "Pixelify Sans"').then(()=>draw()).catch(()=>{});
function draw(withSel=true){const{l,W,H}=dims();if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H}
bg(W,H);const BR=BD[MODE][$('lace').value];if(BR&&BR.b)BR.b(W,H);
for(let i=0;i<l.n;i++){const x=PAD+(i%l.c)*(l.w+GAP),y=TOP+Math.floor(i/l.c)*(l.h+GAP);
ctx.fillStyle='#fff';ctx.fillRect(x-6,y-6,l.w+12,l.h+12);
if(shots[i]){cell(x,y,l,shots[i],i)}
else{ctx.fillStyle='#f6e7ee';ctx.fillRect(x,y,l.w,l.h);ctx.fillStyle='#e3bfd0';ctx.font='700 70px "Zen Maru Gothic",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(MODE==='boy'?'★':'♡',x+l.w/2,y+l.h/2)}}
if(BR&&BR.f)BR.f(W,H,l);
ctx.fillStyle=(BR&&BR.cap)||(lum(color)<.4?'#fff':INK);ctx.textAlign='center';ctx.textBaseline='middle';const fy=H-CAP;ctx.font='700 34px "Zen Maru Gothic",sans-serif';ctx.fillText($('caption').value,W/2,fy-8);
if($('date').value==='1'){ctx.font='20px "Zen Maru Gothic",sans-serif';ctx.globalAlpha=.75;ctx.fillText(new Date().toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}),W/2,fy+28);ctx.globalAlpha=1}
stickers.forEach((s,i)=>{ctx.save();ctx.translate(s.x,s.y);ctx.rotate(s.r);ctx.scale(s.f,1);let w=s.s*.55;const col=COL[s.ci];
if(s.p)drawPx(ctx,s.p,s.ci,s.s);else if(s.w)drawKw(ctx,s.w,s.s,s.ci);else if(s.b){w=bub(ctx,s.b,s.ci,s.s,s.bw);s.hw=w}else if(s.k)drawSt(ctx,s.k,col,s.s);else{ctx.font=`700 ${s.s*.6}px "Zen Maru Gothic",sans-serif`;ctx.lineJoin='round';ctx.lineWidth=s.s*.12;ctx.strokeStyle=INK;ctx.strokeText(s.t,0,0);ctx.fillStyle=col;ctx.fillText(s.t,0,0);w=Math.max(w,ctx.measureText(s.t).width/2+8)}
if(withSel&&i===sel){ctx.strokeStyle='#ff6fa5';ctx.lineWidth=3;ctx.setLineDash([8,6]);ctx.strokeRect(-w,-s.s*.55,w*2,s.s*1.1)}ctx.restore()})}
['pattern','caption','date','lace'].forEach(i=>$(i).oninput=()=>draw());
function pt(e){const r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)*cv.width/r.width,y:(e.clientY-r.top)*cv.height/r.height}}
cv.onpointerdown=e=>{const p=pt(e);sel=-1;for(let i=stickers.length-1;i>=0;i--){const s=stickers[i];if((s.b?Math.abs(p.x-s.x)<(s.hw||60)&&Math.abs(p.y-s.y)<s.s*.4:Math.hypot(p.x-s.x,p.y-s.y)<s.s*.55)){sel=i;drag={dx:s.x-p.x,dy:s.y-p.y};cv.setPointerCapture(e.pointerId);break}}draw()};
cv.onpointermove=e=>{if(!drag||sel<0)return;const p=pt(e);stickers[sel].x=p.x+drag.dx;stickers[sel].y=p.y+drag.dy;draw()};
cv.onpointerup=()=>{drag=null};
cv.onwheel=e=>{if(sel<0)return;e.preventDefault();size(e.deltaY<0?8:-8)};
function size(d){const s=stickers[sel];s.s=Math.max(24,Math.min(420,s.s+d));draw()}
$('tools').onclick=e=>{const a=e.target.closest('button')?.dataset.a;if(!a)return;if(a==='clear'){stickers=[];sel=-1;return draw()}if(sel<0)return;const s=stickers[sel];
if(a==='plus')size(14);else if(a==='minus')size(-14);else if(a==='rot'){s.r+=Math.PI/12;draw()}else if(a==='flip'){s.f*=-1;draw()}
else if(a==='color'){s.ci=(s.ci+1)%(s.p?PAL.length:s.b?3:s.w?(s.w.slice(0,4)==='cat:'?5:1):COL.length);draw()}else if(a==='front'){stickers.push(stickers.splice(sel,1)[0]);sel=stickers.length-1;draw()}else if(a==='del'){stickers.splice(sel,1);sel=-1;draw()}};
document.addEventListener('keydown',e=>{if(e.target.tagName==='INPUT')return;if((e.key==='Delete'||e.key==='Backspace')&&sel>=0){stickers.splice(sel,1);sel=-1;draw()}});
$('addown').onclick=()=>{const v=$('own').value.trim();if(v){addSticker({t:v,ci:0});$('own').value=''}};
$('own').onkeydown=e=>{if(e.key==='Enter')$('addown').click()};
$('dl').onclick=()=>{draw(false);cv.toBlob(b=>{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='snapbooth-strip.png';a.click();draw()},'image/png')};
$('dlv').onclick=()=>{const mt=MT();if(!mt)return;const ch=[],r=new MediaRecorder(cv.captureStream(30),{mimeType:mt,videoBitsPerSecond:5e6});exporting=true;shots.forEach(s=>{if(s.clip){s.clip.currentTime=0;s.clip.play()}});r.ondataavailable=e=>ch.push(e.data);r.onstop=()=>{exporting=false;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(ch,{type:mt}));a.download='snapbooth-video-strip.'+(mt.includes('mp4')?'mp4':'webm');a.click()};r.start();$('dlv').textContent='recording…';setTimeout(()=>{r.stop();$('dlv').textContent='download video strip'},3000)};
function tick(){const v=shots.some(s=>s.clip);$('dlv').classList.toggle('hide',!v);if(v&&!$('deco').classList.contains('hide'))draw(!exporting);requestAnimationFrame(tick)}
const swap=(a,b)=>a.splice(0,a.length,...b);
const T={girl:{PAL:PAL.slice(),BS:BS.slice(),KAO:KAO.slice(),WORDS:WORDS.slice(),COL:COL.slice(),FRAMES:FRAMES.slice()},
boy:{PAL:[['#2f6fb5','#bcd9fb'],['#c0392b','#ffc9c0'],['#2e8b57','#bfeccf'],['#e08a1e','#ffe0a8'],['#4a4a5a','#d9dbe6'],['#7a52c7','#dccdf7']],
BS:[['#4a86d8','#dcebff','#2f6fb5'],['#d8584a','#ffe0dc','#c0392b'],['#222','#fff','#222']],
KAO:['(ง •̀_•́)ง','( •̀ω•́ )σ','(⌐■_■)','ᕙ(⇀‸↼‶)ᕗ','(｀･ω･´)ゞ','(•̀ᴗ•́)و','٩(◕‿◕)۶','(｀∀´)Ψ','(☞ﾟヮﾟ)☞','(๑•̀ㅂ•́)و✧','٩(ˊᗜˋ*)و','ヽ(•̀ω•́ )ゝ','(¬‿¬)','(ᵔᴥᵔ)'],
WORDS:['VROOM','GO!','WINNER','CHAMP','BOOM','SPEED','LEVEL UP','NITRO','GG','COOL'],
COL:['#6fa8e8','#ff7b6b','#7fd69a','#ffc15e','#b9bdd0','#9b86e0','#4a4a5a','#ffffff'],
FRAMES:['#bcd9fb','#9fc2ef','#ffd9a8','#c5ecd2','#d9dbe6','#ffc9c0','#2f4a7a','#ffffff','#7fb3e8','#ffe58a','#ff9b5e','#e0382b','#5fcf80','#8fe0e6','#b9a6e8','#c9a98a','#8a93a8','#1f6b4f','#4a2f6b','#2b2f3a']}};
function applyMode(m){const t=T[m],b=m==='boy';MODE=m;const A={PAL,BS,KAO,WORDS,COL,FRAMES};Object.keys(A).forEach(k=>swap(A[k],t[k]));
document.documentElement.dataset.mode=m;$('mg').classList.toggle('on',!b);$('mb').classList.toggle('on',b);
color=FRAMES[0];$('colors').innerHTML=FRAMES.map(c=>`<button type="button" style="background:${c}" data-c="${c}" aria-label="Frame color"></button>`).join('');mark();buildPanels();
$('stat').textContent=b?'Pit stop · 60 min · turbo':'A side · 60 min · stereo';
$('sub').textContent=b?'★ photo strips, video strips & car stickers ★':'✦ photo strips, video strips & retro stickers ✦';
$('foot').textContent=b?'by snapbooth · vroom vroom':'by snapbooth ♪(´▽｀)';
const h=document.querySelectorAll('.side h2');h[0].textContent=b?'★ garage & stickers':'✦ now playing: stickers';h[1].textContent=b?'★ more stickers':'✦ more stickers';
fillB();$('pattern').options[4].textContent=b?'bolts':'hearts';
if($('caption').value===(b?'best day ever':'race day crew'))$('caption').value=b?'race day crew':'best day ever';
try{localStorage.setItem('sb-mode',m)}catch(e){}draw()}
$('mg').onclick=()=>applyMode('girl');$('mb').onclick=()=>applyMode('boy');
fillB();try{if(localStorage.getItem('sb-mode')==='boy')applyMode('boy')}catch(e){}
draw();tick();
