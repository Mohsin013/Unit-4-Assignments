import React from "react"
import styles from './CardDetails.module.css'
const CardDetails=(props)=>{
    return (
        <>
            <div id={styles.Payment} style={{backgroundColor:props.color}}>
                <div>
                    <div>{props.date}</div>
                    <div>{props.heading}</div>
                    <div>{props.subHeading}</div>
                    <div>{props.device}</div>
                </div>
                <div>
                    <img src={props.logo} alt=""/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Arrow-right-512.png" alt="" />
                </div>
            </div>
        </>
    )
}
export default CardDetails