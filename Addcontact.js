import React from "react";

class Addcontact extends React.Component {
render()
{
    return(
        <div className="ui main">
            <h2>Add contact</h2>
            <form className="ui form">
                <div className="fields">
                <label>Name</label>
                <input type ="text" name="name" placeholder="Name"/>
                </div>

                <div className="fields">
                <label>City</label>
                <input type ="text" name="city" placeholder="City"/>
                </div>
                
                <button className="ui button blue">Submit</button>
            </form>
        </div>
    );
}
}

export default Addcontact;
