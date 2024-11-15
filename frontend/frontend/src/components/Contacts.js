import React from "react";
import '../css/bot.css'
import YandexMap from "./YandexMap";

function Contacts() {
    return (
        <div>
            <div className='advert'>
                <div>Аренда автомобилей в Москве</div>
            </div>
            <div className="contacts_map">
                <div className="contacts_information"> 
                <div>- Кутузовский проспект., д.2/1 c.6</div>
                <div>- +79266606759</div>
                <div>- Без выходных, Круглосуточно</div>
                </div>
                <div>
                <YandexMap/>
                </div>
            </div>
        </div>
    )
}

export default Contacts;