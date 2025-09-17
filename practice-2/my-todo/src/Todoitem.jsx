import React, {useState} from "react";

function Todoitem (){

    const  [editing, setEditing ] = useState

    return (
        <div>
            <input type="checkbox" />
            <span>Title</span>
            <button>edit</button>
        </div>
    );
}

export default Todoitem;