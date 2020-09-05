import React from "react"
import "./Questions.css"

function Questions(){
    return(
        <div className = 'main'>
<div className="container m-auto item-center
    bg-color animate__animated animate__backInDown">
        <div className="content m-auto">
            <div className="answer text-center">
                <p>Заехали к нам, когда стрелка была уже «на нуле»?</p>
            </div>
            <div className="btn-place d-flex content-around">
            <label className="d-flex" ><input type="radio" name="one"/> <p>Да</p></label>
            <label className="d-flex" ><input type="radio" name="one"/> <p>Нет</p></label>
            </div>
        </div>
        <div className="content m-auto">
            <div className="answer text-center">
                <p> Заглянули за стаканчиком вашего любимого кофе?</p>
            </div>
            <div className="btn-place d-flex content-around">
                <label className="d-flex" ><input type="radio" name="two"/> <p>Да</p></label>
            <label className="d-flex" ><input type="radio" name="two"/> <p>Нет</p></label>
            </div>
        </div>
        <div className="content m-auto">
            <div className="answer text-center">
                <p>Оператор был вежлив и улыбчив?</p>
            </div>
            <div className="btn-place d-flex content-around">
                <label className="d-flex" ><input type="radio" name="three"/> <p>Да</p></label>
            <label className="d-flex" ><input type="radio" name="three"/> <p>Нет</p></label>
            </div>
        </div>
        <div className="content m-auto">
            <div className="answer text-center">
                <p>Оператор был вежлив и улыбчив?</p>
            </div>
            <div className="btn-place d-flex content-around">
                <label className="d-flex" ><input type="radio" name="four"/> <p>Да</p></label>
            <label className="d-flex" ><input type="radio" name="four"/> <p>Нет</p></label>
            </div>
        </div>
         <div className="content m-auto">
            <div className="answer text-center">
                <p>Хорошо помыли авто на мойке?</p>
            </div>
            <div className="btn-place d-flex content-around">
                <label className="d-flex" ><input type="radio" name="five"/> <p>Да</p></label>
            <label className="d-flex" ><input type="radio" name="five"/> <p>Нет</p></label>
            </div>
        </div>
        <div className="btn d-flex">
            <button>ОТПРАВИТЬ</button>
        </div>
        
    </div>
        </div>

    )
}

export default Questions