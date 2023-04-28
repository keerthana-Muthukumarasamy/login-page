import React from "react";
function Gform() {
    return (
        <div className="form-main" >
        <form>
             <div>
            <label1 className="l1"> name </label1>
            <input type="text" placeholder="enter your name" name="name" />
          </div>
          <div>
            <label2 className="l2">rollno</label2>
            <input type="text" placeholder="enter your rollno" name="name" className="l1"/>
          </div>
          <div>
            <label3  className="l3">department</label3>
            <input type="text" placeholder="enter your department" name="name" />
          </div>
          <div>
            <label4  className="l4">gender</label4>
            <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
          </div>
          <div>
            <label5  className="l5"> enter the phonenumber</label5>
            <input type="text" placeholder="enter your phone number" name="name" />
          </div>
          <div>
            <label6  className="l6"> enter your emailid</label6>
            <input type="text" placeholder="enter your email" name="name" />
          </div>
          <div>
            <button type ="">Submit</button>
            </div>
          </form>
          </div >
        
    )
}
export default Gform;