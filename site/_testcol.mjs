import { chromium } from 'playwright';
const root='file:///C:/Users/dbslg/Desktop/NECTAR';
const b=await chromium.launch({channel:'chrome'});
const ctx=await b.newContext();
const p=await ctx.newPage();
const errs=[];
p.on('pageerror',e=>errs.push(e.message));
let nav=null;
p.on('framenavigated',f=>{ if(f===p.mainFrame()) nav=f.url(); });
try{ await p.goto(root+'/site/collection.html',{waitUntil:'domcontentloaded',timeout:45000}); }catch(e){ console.log('goto:',e.message); }
await p.waitForTimeout(3500);

const cards=await p.$$eval('.nectar-collection .nc-card',a=>a.length);
const cols=await p.$eval('.nectar-collection .nc-grid',el=>getComputedStyle(el).gridTemplateColumns.split(' ').length);
const img1=await p.$eval('.nectar-collection .nc-card img',el=>el.naturalWidth);
const order=await p.evaluate(()=>{
  const s1=document.querySelector('.section1'); const nc=document.querySelector('.nectar-collection'); const s3=document.querySelector('.section3');
  const y=el=>el?Math.round(el.getBoundingClientRect().top+window.scrollY):null;
  return {s1:y(s1),nc:y(nc),s3:y(s3)};
});
console.log('nc-card count:',cards,'(expect 10)');
console.log('grid columns(desktop):',cols,'(expect 4)');
console.log('first card image naturalWidth:',img1,'(expect >0 = loaded)');
console.log('vertical order tops:',JSON.stringify(order),'=> grid between s1 and s3:', order.s1<order.nc && order.nc<order.s3);

await p.setViewportSize({width:1280,height:1000});
await p.evaluate(()=>document.querySelector('.nectar-collection').scrollIntoView());
await p.waitForTimeout(800);
await p.screenshot({path:'C:/Users/dbslg/Desktop/NECTAR/_col_desktop.png'});
await p.setViewportSize({width:390,height:900});
await p.evaluate(()=>document.querySelector('.nectar-collection').scrollIntoView());
await p.waitForTimeout(600);
await p.screenshot({path:'C:/Users/dbslg/Desktop/NECTAR/_col_mobile.png'});

// click first card → shim should route to local product-46.html
nav=null;
await p.$eval('.nectar-collection .nc-card',el=>el.scrollIntoView());
await Promise.race([p.click('.nectar-collection .nc-card',{timeout:5000}).catch(()=>{}), p.waitForTimeout(2000)]);
await p.waitForTimeout(1500);
console.log('after card click, url contains product-46.html:', (nav||p.url()).includes('product-46.html'), '| url=', (nav||p.url()).split('/').pop());
console.log('my injected code errors:', errs.filter(e=>/nectar|nc-/.test(e)).length || 'NONE related');
await b.close();
