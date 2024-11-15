import React from "react";
import axios from "axios";

function Classes({setAutos, classofcars, setShowclasses}) {
    
    return (
        <div className="choice_marks" >
            <div className="choice_close" onClick={() => setShowclasses(false)}>X</div>
            {classofcars.map((el) => <div onClick={() => {
                axios.get(`http://127.0.0.1:8000/api/classofcars/${el.id}/`).then((res) => {setAutos(res.data)});
                setShowclasses(false);
            }} className="classofcars">{el.title}</div>)}
        </div>
    )
}

export default Classes;