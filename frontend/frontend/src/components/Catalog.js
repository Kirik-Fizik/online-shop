import React from "react";
import { Link } from "react-router-dom";
import '../css/catalog.css'
import Marks from "./Marks";
import Classes from "./Classes";
import axios from "axios";

function Catalog() {

    const [images, setImages] = React.useState([''])
    const [autos, setAutos] = React.useState([''])
    const [showmarks, setShowmarks] = React.useState(false)
    const [showclasses, setShowclasses] = React.useState(false)
    const [classofcars, setClassofcars] = React.useState([''])

    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/marks/').then((res) => {setImages(res.data)});
        axios.get('http://127.0.0.1:8000/api/images/').then((res) => {setAutos(res.data)});
        axios.get('http://127.0.0.1:8000/api/classofcars/').then((res) => {setClassofcars(res.data)});
    }, [])
    return (
        <div>
            <div className='advert'>
                <div>Аренда автомобилей в Москве</div>
            </div>
            <div class='choices'>
                <Link className='choice' onClick={() => axios.get('http://127.0.0.1:8000/api/images/').then((res) => {setAutos(res.data)})}><div>Все автомобили</div></Link>
                <Link className='choice'><div onClick={() => setShowmarks(true)}>Марка</div></Link>
                <Link className='choice'><div onClick={() => setShowclasses(true)}>Класс</div></Link>
                <Link className='choice'><div onClick={() => axios.get('http://127.0.0.1:8000/api/images/new/').then((res) => {setAutos(res.data)})} >New</div></Link>
            </div>
            {showmarks && <Marks images={images} setShowmarks={setShowmarks} setAutos={setAutos}/>}
            {showclasses && <Classes setAutos={setAutos} classofcars={classofcars} setShowclasses={setShowclasses}/>}
            <div className="cars">
                {autos.map(el => el.main === true && <Link to={`/car/${el.car}`}><div className="car">
                    <img src={el.image} className="car_image" alt="img"></img>
                    <div className="car_title">{el.title}</div>
                    </div></Link>)}
            </div>
        </div>
    )
}

export default Catalog;