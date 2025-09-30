import useToggle from "./src/hooks/usetoggle";
const HideShow=()=>{
    const [h,sh]=useToggle();
    return (
      <>
       <h1>Hello ji kya haal chall </h1>
      </>
        
    )
}

export default HideShow();