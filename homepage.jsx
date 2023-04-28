import react from "react";


function Homepage(prop){
    const a=<div>hi
    </div>
    return(
        < div classname="mainpage">
        {a}
        <div>{prop.state}</div>
        <div>{prop.get}</div>
        </div>

    )
}
export default Homepage;