import React from "react";
import Button from "../styled/Button";

const WinnerPage = ()=>{

    function refresh(){
        window.location.reload(true)
    }


    return(
        <div>
            <h1>Winner</h1>
            <Button onClick={refresh}>Home</Button>
        </div>
    )
}


export default WinnerPage;