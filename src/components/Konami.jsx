import { useEffect, useState } from 'react';

const Konami = () => {
   const [ percentage, setPercentage ] = useState(0);
   let smiley = "( ͡° ͜ʖ ͡°)";

   if (percentage == 69) smiley = "(͠≖ ͜ʖ͠≖)";

   useEffect(() => {
      if (percentage < 69) {
         const interval = setInterval(() => {
            setPercentage(percentage + 1);
         }, Math.floor(Math.random() * 250));
      
         return () => {
            if (interval) clearInterval(interval);
         }
      }
   }, [percentage])


   return (
      <div 
         className="fixed top-0 left-0 w-full h-full bg-[#0078d7] text-white p-[5vh_10vw] flex flex-col justify-center
            font-[Calibri,sans-serif] overflow-y-auto drop-shadow-sm"
      >
         <div className="text-9xl mb-8 font-[arial]">
            { smiley }
         </div>
         <div className="font-light">
            <div className="text-4xl leading-normal mb-8">
               Vous pensiez pouvoir tricher avec un code konami ? <br /> 
               Bien essayé.
            </div>
            <div className="text-lg leading-relaxed mb-8 text-gray-300 uppercase">
               Ça mérite quand même un bon 10 points pour l'effort. Voici un biscuit virtuel : (´・ω・)っ🍪 <br />
               Une grenade avec ça ? (っˆڡˆς)
            </div>
            <div className="text-4xl mb-8">
               {percentage ?? 0}% complété
               {percentage >= 69 &&
                  ". Coquin"
               }
            </div>
            
         </div>
      </div>
   )
}

export default Konami;
