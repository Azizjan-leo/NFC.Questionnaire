import React, {useState, useEffect}from "react"
import "../Questions.css"

function Questions(){
    const [data] = useState(["Заехали к нам, когда стрелка была уже «на нуле»?",
                                    "Заглянули за стаканчиком вашего любимого кофе?",
                                    "Оператор был вежлив и улыбчив?",
                                    "Хорошо помыли авто на мойке?"])
    const [count, setCount] = useState(0)
    const [oneQuestion, setOnequsetion] = useState('')
    useEffect(()=>{
        if(count<data.length){
            setOnequsetion(data[count])
        }else{
            alert("спасибо за ответы")
        }
        
    })
    return(
        <div className = 'main'>
            <div className="container m-auto item-center
                bg-color animate__animated animate__backInDown">
                    <div className="content m-auto">
                        <div className="answer text-center">
                            <p>{oneQuestion}</p>
                        </div>
                        <div className="answers">
                        <button onClick={()=>setCount(count+1)}>Нет</button>
                        <button onClick={()=>setCount(count+1)}>Да</button>
                        
                        </div>
                        
                  </div>
            </div>
        </div>

    )
}

export default Questions