import React, { useEffect, useState } from "react";

export function Quote(){

    const [isLoading, setIsLoading] = useState(true)
    const [state, setState] = useState([])
    const [current, setCurrent] = useState({})

    var colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c',
'#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];

    var color = ()=> Math.floor(Math.random() * colors.length);

    var body = document.querySelector("body");
    var text = document.querySelector("#quote-box");
    
    const colorChange = ()=>{
        let index = color()
        if(text){   
            body.style.backgroundColor = colors[index]
            text.style.color = colors[index]
        }
        }   

    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(r=> r.json())
        .then(data=> {
            const quotes = data.quotes
            setState(quotes)
            setCurrent(quotes[random()])
            // La vaina es que cuando le coloco setCurrent(state[0]), pues por el delay mi state esta vacio  XDXD
            setIsLoading(false)
            colorChange()
        })
    }, [])

   
    let random = ()=>{
        let index = Math.floor(Math.random()*state.length) 
        return index
    }

    const change = (e)=> {
        if(e) e.preventDefault()
        let valor = state[random()]
        colorChange()
        return setCurrent(valor)
    }


    



    if(isLoading){
        return(
            <section id="quote-box">
                <div>Cargando...</div>
                <section id="text">    
                </section>
                <div id="author">
                </div>
                <section>
                    <div>
                        <button id={"tweet-quote"}>twiter</button>
                        <button >telegram</button>
                    </div>
                    <button id={"new-quote"} onClick={(e)=> change(e)}>New quote</button>
                </section>
            </section>)
    }

    return(
    <section id="quote-box">
        <section id="text">
            " {current.quote} "
        </section>
        <div id="author">
             - {current.author}
        </div>

        <div class="buttons">

            <div id={"separator"}>
                <a
                    className="button"
                    id="tweet-quote"
                    title="Tweet this quote!"
                    target="_top"
                    href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Nothing%20is%20impossible%2C%20the%20word%20itself%20says%2C%20%E2%80%9CI%E2%80%99m%20possible!%E2%80%9D%22%20%E2%80%93Audrey%20Hepburn"
                >
                    <i class="fa fa-twitter"></i>
                </a>
                <a
                    className="button"
                    id="tumblr-quote"
                    title="Post this quote on tumblr!"
                    target="_blank"
                >
                    <i class="fa fa-tumblr"></i>
                </a>
            </div>
                <button class="button" id="new-quote" onClick={(e)=>change(e)}>New quote</button>
            
        </div>
        
    </section>)
}