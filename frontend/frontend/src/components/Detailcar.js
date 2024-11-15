import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/detailcar.css';

function Detailcar() {

    let { car_id } = useParams()
    console.log(car_id);

    const [images, setImages] = React.useState([''])
    const [car, setCar] = React.useState([''])

    React.useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/cars/${car_id}/`).then((res) => setCar(res.data))
        axios.get(`http://127.0.0.1:8000/api/images/car/${car_id}/`).then((res) => setImages(res.data))
    }, [])

    return (
        <div>
            <div className='car_images'>{images.map(el => <img src={el.image} className="car_img" alt="img"></img>)}</div>
            <div className="car_description">
                <div className="car_description_title">{car.title}</div>
                <div>{car.engine_volume} л.</div>
                <div>{car.horse_power} л.с.</div>
                <div>{car.type_of_engine}</div>
                <div>{car.year_of_release} г.</div>
            </div>
            <div className="tarif">
                <div className="tarif_title">Стоимость аренды {car.title}</div>
                <table className="tarif_table">
                    <tr>
                        <td>Тариф</td>
                        <td>1-1 сутки</td>
                        <td>2-3 суток</td>
                        <td>4-6 суток</td>
                        <td>7-14 суток</td>
                        <td>15-21 суток</td>
                        <td>Более</td>
                    </tr>
                    <tr>
                        <td>Стандарт</td>
                        <td className="tarif_price">{car.tarif1_1} &#8381;</td>
                        <td className="tarif_price">{car.tarif2_3} &#8381;</td>
                        <td className="tarif_price">{car.tarif4_6} &#8381;</td>
                        <td className="tarif_price">{car.tarif7_14} &#8381;</td>
                        <td className="tarif_price">{car.tarif15_21} &#8381;</td>
                        <td className="tarif_price">{car.tarif_more} &#8381;</td>
                    </tr>
                </table>
            </div>
            <div className="information">
                <div className="information_title">Как оформить аренду?</div>
                <div className="information_text">Оформить аренду можно через менеджеров нашей компании по телефону +79266606759. Для бронирования автомобиля потребуется 2 документа: фото паспорта и водительского удостоверения, это займет около 15 минут. Автомобиль можно забрать из нашего офиса в центре: Кутузовский проспект., д.2/1 c.6, либо воспользоваться услугой “Доставка автомобиля по адресу”. Примерное время доставки 1-2 часа.</div>
                <div className="information_title">Страховка</div>
                <div className="information_text">Все автомобили застрахованы по КАСКО. Вы можете не переживать за автомобиль, а лишь получать удовольствия от вождения. Дополнительно предоставляем услугу “100% защита” - это ответственность 0 руб. в любых ситуациях, не нарушающих законодательство РФ.</div>
                <div className="information_title">Техподдержка</div>
                <div className="information_text">В течение всего срока аренды вы можете обратиться в Техподдержку или Консьерж-сервис. Они оперативно решат любой вопрос в режиме 24/7. В случае неисправности автомобиля  есть услуга “Подменный автомобиль”: предоставим машину аналогичного либо более высокого класса.</div>
                <div className="information_title">Конфиденциальность</div>
                <div className="information_text">Мы никогда и никому не раскрываем данные о наших клиентах. В машинах отсутствует аудио- и видеозапись, поэтому вы можете не беспокоиться о конфиденциальности Вашей поездки.</div>
            </div>
        </div>
    )
}

export default Detailcar;