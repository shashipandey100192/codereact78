import React, { useState } from "react";

var a=500;
function Myfunc()
{
    const [abc, xyz]=useState("kumar");

    const dyninput = (p)=>{
        console.log(p);
        xyz(p.target.value)
    }

    return(
        <div>
            <input type="text" value={abc} onInput={dyninput}/>
            <h1>this is heading</h1>
        </div>
    )

}
export default Myfunc;