import React from "react";
import axios from "axios";

function Marks({images, setShowmarks, setAutos}) {
    
    return (
        <div className="choice_marks" >
            <div className="choice_close" onClick={() => setShowmarks(false)}>X</div>
            {images.map((el) => <div onClick={() => {
                axios.get(`http://127.0.0.1:8000/api/car/brand/${el.id}/`).then((res) => {setAutos(res.data)});
                setShowmarks(false);
            }}><img src={el.logo} className="mark" alt="img"></img></div>)}
        </div>
    )
}

export default Marks;