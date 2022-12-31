import { ReactComponent as Icon } from "../assets/chevron-left.svg";

const BackToTop = ({ isScrolled }) => {
   const translate = isScrolled ? "translate-y-0" : " translate-y-full";
   
   const scrollUp = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }
   
   return (
      <button 
         type="button" 
         className={`fixed bottom-0 right-0 p-4 rotate-90 ${translate} transition-transform z-2`}
         onClick={scrollUp}
         aria-label="Retour en haut"
         title="Retour en haut"
      >
         <Icon className="object-contain fill-white" width="24" height="24" />
      </button>
   )
}

export default BackToTop