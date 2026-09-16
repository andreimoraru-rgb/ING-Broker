document.querySelector('.menu').addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')!=='true';e.currentTarget.setAttribute('aria-expanded',String(open));document.querySelector('.header nav').classList.toggle('open',open)});
document.querySelectorAll('.header nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.header nav').classList.remove('open');document.querySelector('.menu').setAttribute('aria-expanded','false')}));
// No analytics provider or persistent identifier is installed. Only fixed, non-PII fields are emitted.
function track(event,fields={}){window.dispatchEvent(new CustomEvent('drone:analytics',{detail:{event,...fields}}));if(typeof window.gtag==='function')window.gtag('event',event,fields)}
track('drone_page_view');
const selections={rc:{label:"THIRD-PARTY PROTECTION",title:"Drone liability insurance",copy:"For damage caused to third parties. Indicative rates from 500 MDL/year, depending on the selected limit and deductible. Liability insurance does not cover your own drone.",image:'risk-injury.webp',alt:'Persoană și dronă într-un spațiu urban, pentru analiza răspunderii față de terți',subject:'Solicitare RC Drone'},casco:{label:"PROTECTION FOR YOUR DRONE",title:'CASCO Drone / AEROCASCO',copy:"Asterra AEROCASCO: indicative rate of 4% of the sum insured, minimum 1,000 MDL/year. The summary includes damage, destruction, disappearance and theft, subject to contractual conditions.",image:'selector-casco.webp',alt:'Dronă profesională pe masa de inspecție tehnică',subject:'Solicitare CASCO Drone'},both:{label:"TWO COMPLEMENTARY COVERS",title:"Liability + CASCO",copy:"We assess third-party damage and risks to your own drone together. Each cover retains its own conditions, limits and exclusions.",image:'selector-both.webp',alt:'Operator și dronă pregătiți pentru o misiune în teren',subject:'Solicitare RC + CASCO Drone'}};
document.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.choice,s=selections[key];document.querySelectorAll('[data-choice]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.querySelector('#selection-label').textContent=s.label;document.querySelector('#selection-title').textContent=s.title;document.querySelector('#selection-copy').textContent=s.copy;document.querySelector('#selection-image').src='/asigurare-drone-moldova/assets/'+s.image;document.querySelector('#selection-image').alt=s.alt;document.querySelector('#selection-cta').href='#cerere';track('drone_selector_use',{protection:key})}));
document.querySelectorAll('[data-risk]').forEach(button=>button.addEventListener('click',()=>{const risk=window.DRONE_RISKS[Number(button.dataset.risk)];document.querySelectorAll('[data-risk]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});document.querySelector('#risk-label').textContent=risk[3];document.querySelector('#risk-title').textContent=risk[1];document.querySelector('#risk-copy').textContent=risk[2];const img=document.querySelector('.risk-stage>img');const riskImages=['risk-collision','risk-property','risk-injury','risk-crash','risk-flyaway','risk-theft'];const riskAlts=['Dronă în apropierea ramurilor unui copac','Dronă lângă geamurile deteriorate ale unei sere','Persoană cu antebrațul bandajat lângă o dronă oprită','Dronă avariată pe teren stâncos','Dronă îndepărtată deasupra dealurilor în ceață','Geantă de transport goală lângă un vehicul de lucru'];img.src='/asigurare-drone-moldova/assets/'+riskImages[Number(button.dataset.risk)]+'.webp';img.alt=riskAlts[Number(button.dataset.risk)]}));
document.querySelector('#risk-title').parentElement.setAttribute('aria-live','polite');
document.querySelectorAll('[data-event]').forEach(a=>a.addEventListener('click',()=>track(a.dataset.event)));
// Set only after the exact issuance-platform URL is confirmed. Contact remains fully functional meanwhile.
const platformUrl=null;
const siteHeader=document.querySelector('.header');const headerLogo=document.querySelector('.header .brand-logo');if(siteHeader&&headerLogo){headerLogo.dataset.darkLogo='/asigurare-drone-moldova/assets/logo-ingbroker.png';headerLogo.dataset.lightLogo='/asigurare-drone-moldova/assets/logo-ingbroker.png';const syncHeader=()=>{const light=window.scrollY>Math.max(120,window.innerHeight*.68);siteHeader.classList.toggle('scrolled',light);const next=light?headerLogo.dataset.lightLogo:headerLogo.dataset.darkLogo;if(headerLogo.getAttribute('src')!==next)headerLogo.setAttribute('src',next)};syncHeader();window.addEventListener('scroll',syncHeader,{passive:true})}
if(platformUrl){const destination=new URL(platformUrl);const params=new URLSearchParams(location.search);for(const k of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']){const v=params.get(k);if(v)destination.searchParams.set(k,v)}document.querySelectorAll('[data-platform]').forEach(a=>{a.href=destination.href;a.firstChild.textContent='Perfectează asigurarea ';a.addEventListener('click',()=>track('drone_platform_click'))})}
if('IntersectionObserver' in window){const seen=new Set;new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!seen.has(e.target.id)){seen.add(e.target.id);track(e.target.id==='rc'?'drone_rc_view':'drone_casco_view')}}),{threshold:.25}).observe(document.querySelector('#rc'));const cascoObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){track('drone_casco_view');cascoObserver.disconnect()}},{threshold:.25});cascoObserver.observe(document.querySelector('#casco'));
const hidden=new Set;const sticky=document.querySelector('.mobile-sticky');let heroVisible=true;const update=()=>sticky.classList.toggle('show',!heroVisible&&hidden.size===0);new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.target.classList.contains('hero'))heroVisible=e.isIntersecting;else if(e.isIntersecting)hidden.add(e.target);else hidden.delete(e.target)});update()},{threshold:0}).observe(document.querySelector('.hero'));const bottomObserver=new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?hidden.add(e.target):hidden.delete(e.target));update()},{threshold:0});['#final','#contact','footer'].forEach(s=>bottomObserver.observe(document.querySelector(s)));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.section-intro,.statement .split,.protection-grid,.business-text,.industry-grid,.steps,.why .split').forEach(el=>{el.classList.add('reveal');if(el.getBoundingClientRect().top>innerHeight){el.classList.add('will-reveal');reveal.observe(el)}})}}

const radar=document.querySelector('.radar');
const radarToggle=document.querySelector('.radar-toggle');
if(radar&&radarToggle){
  let inView=false,paused=false;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  paused=false;
  radarToggle.textContent=paused?"Start animation":"Pause animation";
  radarToggle.setAttribute('aria-pressed',String(paused));
  const syncRadar=()=>radar.classList.toggle('is-running',inView&&!paused&&!document.hidden);
  new IntersectionObserver(([entry])=>{inView=entry.isIntersecting;syncRadar()},{threshold:.15}).observe(radar);
  document.addEventListener('visibilitychange',syncRadar);
  reduceMotion.addEventListener('change',()=>{paused=false;radar.classList.remove('motion-opt-in');radarToggle.textContent=paused?"Start animation":"Pause animation";radarToggle.setAttribute('aria-pressed',String(paused));syncRadar()});
  radarToggle.addEventListener('click',()=>{paused=!paused;radar.classList.toggle('motion-opt-in',!paused);radarToggle.setAttribute('aria-pressed',String(paused));radarToggle.textContent=paused?"Start animation":"Pause animation";syncRadar()});
}

// Brief touch feedback on informational type labels, without changing selection.
document.querySelectorAll('.type-tags>span').forEach(tag=>{
 let feedbackTimer;
 tag.addEventListener('pointerdown',()=>{clearTimeout(feedbackTimer);tag.classList.add('is-touched')});
 const release=()=>{feedbackTimer=setTimeout(()=>tag.classList.remove('is-touched'),350)};
 tag.addEventListener('pointerup',release);tag.addEventListener('pointercancel',release);tag.addEventListener('pointerleave',release);
});

const imageMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('#selection-image,.risk-stage>img').forEach(img=>{
 img.addEventListener('load',()=>{if(imageMotion.matches)return;img.getAnimations().forEach(a=>a.cancel());img.animate([{opacity:.45,transform:'scale(1.025)'},{opacity:1,transform:'scale(1)'}],{duration:450,easing:'cubic-bezier(.23,1,.32,1)'})});
});
// Crossfade risk frames so each scenario lands as a distinct visual moment.
document.querySelectorAll('[data-risk]').forEach(button=>button.addEventListener('click',()=>{const img=document.querySelector('.risk-stage>img');img.classList.add('is-switching');setTimeout(()=>img.classList.remove('is-switching'),260)}));
