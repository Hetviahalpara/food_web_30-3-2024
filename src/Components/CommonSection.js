import React from "react"

function Commonsection (props){
    return(
        <>
            <section className="commonsection">
                <div className="container">
                    <h2 className=" ">
                        {props.title}
                    </h2>
                </div>
            </section>
        </>
    )
}

export default Commonsection;