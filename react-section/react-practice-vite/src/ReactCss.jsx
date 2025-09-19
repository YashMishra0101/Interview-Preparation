import styles from "./ReactCss.module.css"

const ReactCss=()=>{
    const desing={
    color: "purple",
    fontSize: "28px",
    textAlign: "center",
    }
return(
    <>
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
    </>
)
}

export default ReactCss;