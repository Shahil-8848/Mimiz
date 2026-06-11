// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const DishAnimation = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
  
//   const frameCount = 144;
//   const currentFrame = (index: number) => 
//     `/photos/dishAnimationClips/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const context = canvas.getContext("2d");
//     if (!context) return;

//     const dpr = window.devicePixelRatio || 1;
//     canvas.width = 1920 * dpr;
//     canvas.height = 1080 * dpr;

//     const images: HTMLImageElement[] = [];
//     let loadedCount = 0;

//     const render = (frameIndex: number) => {
//       const img = images[frameIndex];
//       if (img && img.complete && img.naturalWidth !== 0) {
//         const canvasAspect = canvas.width / canvas.height;
//         const imgAspect = img.naturalWidth / img.naturalHeight;
        
//         let drawWidth, drawHeight, drawX, drawY;

//         if (imgAspect > canvasAspect) {
//           drawHeight = canvas.height;
//           drawWidth = canvas.height * imgAspect;
//           drawX = (canvas.width - drawWidth) / 2;
//           drawY = 0;
//         } else {
//           drawWidth = canvas.width;
//           drawHeight = canvas.width / imgAspect;
//           drawX = 0;
//           drawY = (canvas.height - drawHeight) / 2;
//         }

//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
//       }
//     };

//     // Preload images
//     for (let i = 0; i < frameCount; i++) {
//       const img = new Image();
//       img.onload = () => {
//         loadedCount++;
//         if (i === 0) render(0);
//       };
//       img.src = currentFrame(i);
//       images.push(img);
//     }

//     const airpods = { frame: 0 };
//     let lastFrame = -1;

//     const renderWithCheck = (f: number) => {
//       const frame = Math.floor(f);
//       if (frame !== lastFrame) {
//         render(frame);
//         lastFrame = frame;
//       }
//     };

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         // start: "top top",
//         start: "top top",
//         end: "+=500%", 
//         scrub: 2.5, // Increased for buttery smoothness
//         pin: true,
//         onUpdate: (self) => {
//           gsap.set(canvas, { scale: 1 + self.progress * 0.03 });
//         }
//       }
//     });

//     tl.to(airpods, {
//       frame: frameCount - 1,
//       ease: "none",
//       onUpdate: () => renderWithCheck(airpods.frame),
//     });

//     // Magical Text Reveal - Overlapping significantly with the sequence
//     tl.fromTo(textRef.current, 
//       { 
//         opacity: 0, 
//         y: 80, 
//         scale: 0.95,
//         filter: "blur(15px)"
//       }, 
//       { 
//         opacity: 1, 
//         y: 0, 
//         scale: 1,
//         filter: "blur(0px)",
//         duration: 2,
//         ease: "power3.out"
//       }, 
//       "-=3.5" // Start much earlier so it appears before the images end
//     ).to({}, { duration: 0.8 }); // Longer pause for impact

//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
//       <canvas 
//         ref={canvasRef} 
//         className="w-full h-full object-cover opacity-80"
//       />
      
//       {/* Overlay Text */}
//       <div 
//         ref={textRef} 
//         className="absolute inset-0 flex items-center justify-center pointer-events-none px-6"
//       >
//         <div className="flex flex-col items-center">
//           <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-medium text-white/90 text-center tracking-tight mb-2 uppercase">
//             EVERY Serving
//           </h2>
//           <h2 className="text-6xl md:text-9xl lg:text-[10rem] font-display italic font-light text-[#F05724] text-center leading-none drop-shadow-[0_0_50px_rgba(240,87,36,0.4)]">
//             feels special
//           </h2>
//           <div className="mt-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#F05724] to-transparent"></div>
//         </div>
//       </div>

//       {/* Decorative Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none"></div>
//     </div>
//   );
// };

// export default DishAnimation;
