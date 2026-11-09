import React,{useEffect,useRef,useState} from 'react';
import {articlePhotoBranding} from '../data/articlePhotoBranding';

// Position belongs to the visible photo box, not to pixels which object-cover can crop away.
// Sample the exact area below Re after the actual crop; never use whole-photo brightness.
export function ArticlePhotoLogo({image,mode='photo'}:{image:string;mode?:'photo'|'hero'}){
 const branding=articlePhotoBranding[image];
 const ref=useRef<HTMLImageElement>(null);
 const [color,setColor]=useState<'black'|'white'>(mode==='hero'?'white':branding?.defaultColor||'black');
 useEffect(()=>{
  if(!branding||mode==='hero')return;
  const logo=ref.current,photo=logo?.parentElement?.querySelector<HTMLImageElement>('img:not([data-article-logo])');
  if(!logo||!photo)return;
  let frame=0;
  const measure=()=>{
   if(!photo.complete||!photo.naturalWidth)return;
   const box=photo.getBoundingClientRect(),mark=logo.getBoundingClientRect();if(!box.width||!mark.width)return;
   const scale=Math.max(box.width/photo.naturalWidth,box.height/photo.naturalHeight);
   const cropX=(photo.naturalWidth-box.width/scale)/2,cropY=(photo.naturalHeight-box.height/scale)/2;
   const sx=cropX+(mark.left-box.left+mark.width*0.64)/scale;
   const sy=cropY+(mark.top-box.top+mark.height*0.10)/scale;
   const sw=mark.width*0.35/scale,sh=mark.height*0.80/scale;
   const canvas=document.createElement('canvas');canvas.width=24;canvas.height=8;
   const ctx=canvas.getContext('2d',{willReadFrequently:true});if(!ctx)return;
   try{
    ctx.drawImage(photo,sx,sy,sw,sh,0,0,24,8);
    const pixels=ctx.getImageData(0,0,24,8).data;let luminance=0;
    const linear=(v:number)=>{const n=v/255;return n<=0.04045?n/12.92:Math.pow((n+0.055)/1.055,2.4);};
    for(let i=0;i<pixels.length;i+=4)luminance+=0.2126*linear(pixels[i])+0.7152*linear(pixels[i+1])+0.0722*linear(pixels[i+2]);
    luminance/=pixels.length/4;
    setColor(luminance>0.179?'black':'white');
   }catch{setColor(branding.defaultColor);}
  };
  const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(measure);};
  photo.addEventListener('load',schedule);const resize=new ResizeObserver(schedule);resize.observe(photo);resize.observe(logo);schedule();
  return()=>{cancelAnimationFrame(frame);resize.disconnect();photo.removeEventListener('load',schedule);};
 },[branding,image,mode]);
 if(!branding)return null;
 return <img ref={ref} data-article-logo="bottom-right" data-logo-color={color} aria-hidden="true" alt=""
  src={`/images/brand/ing-re-${color}-original-20261109.png`} width="1140" height="330" draggable={false}
  style={{position:'absolute',right:'clamp(12px,2.5%,24px)',bottom:'clamp(12px,2.5%,24px)',width:mode==='hero'?'clamp(72px,12vw,118px)':'clamp(64px,18%,118px)',maxWidth:'28%',height:'auto',aspectRatio:'auto',objectFit:'contain',borderRadius:0,background:'transparent',display:'block',pointerEvents:'none',zIndex:1}} />;
}
