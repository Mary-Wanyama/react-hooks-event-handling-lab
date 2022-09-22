// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {

    function handleFocus() {
        console.log('Good!')
    }
    function HandleBlur() {
        console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus={handleFocus} onBlur={HandleBlur}>Eyes on me</button>
    )
}
export default EyesOnMe