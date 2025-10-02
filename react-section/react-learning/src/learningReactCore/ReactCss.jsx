import styles from "./ReactCss.module.css"

const ReactCss=()=>{
    const desing={
    color: "purple",
    fontSize: "28px",
    textAlign: "center",
    }
return(
    <>
    <div className="border-2 border-amber-500 py-4 mt-8">
        <h2 className="font-bold text-yellow-600 mb-6 text-2xl text-center">React Css</h2>
        <div className="This is how we use inline css in react">
        <p style={{textAlign:"center",color:"red",fontSize:"2rem",fontFamily:"fantasy"}}>Hi my name is Yash</p>
    </div>
    <div className="Using a Style Object">
        <p style={desing}>Hi my name is unKnown</p>
    </div>
    <div className="Module css">
        <h2 className={styles.heading}>React</h2>
        <p className={styles.react}>React is better than the Angular</p>
    </div>
    </div>
    </>
)
}

export default ReactCss;