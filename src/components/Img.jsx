import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = (props) => {
   return (
      <LazyLoadImage 
         visibleByDefault={ props.loading !== "lazy" }
         {...props} 
      />
   )
}

export default Img;