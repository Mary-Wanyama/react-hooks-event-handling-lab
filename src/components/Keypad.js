// Code Keypad Component Here

function Keypad (){

    function HandleKeypress() {
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={HandleKeypress} type='password'></input>
        </div>
    )
}

export default Keypad;