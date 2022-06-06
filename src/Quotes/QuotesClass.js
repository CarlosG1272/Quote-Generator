import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components"

export class QuoteClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isLoading: true, 
            data: [],
            current: {}
        }
    }


    colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c',
'#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];

    color = ()=> Math.floor(Math.random() * this.colors.length);

    
    
    information = () =>{
        return  fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(r=> r.json())
        .then(data=> {
            const quotes = data.quotes
            
            this.setState(this.state.data = quotes)

            this.setState( this.state.current = quotes[this.random()] )
            // La vaina es que cuando le coloco setCurrent(state[0]), pues por el delay mi state esta vacio  XDXD
            // this.setState(this.state.isLoading = !this.state.isLoading)
            // QUE FINO LOCO, CON CLASS COMPONENTS IS MORE EASY !! DONT NEED IS LOADING
        })
    }

    colorChange = ()=>{
        // Claro p, si defino mis variables fuera de esta función, estas estarán undefined, asi que tengo que definirlas dentro de mi función, siendo asi que hasta que no se ejecute esta función pues no se asignarán los valores de body y text
        let body = document.querySelector("body");
        let text = document.querySelector("#quote-box");
        let button = document.querySelectorAll(".button"); 
        let buttonBigger = document.querySelector(".buttonBigger");
        let index = this.color()
        body.style.backgroundColor = this.colors[index]
        text.style.color = this.colors[index]
        button.forEach(el=> el.style.backgroundColor = this.colors[index])
        buttonBigger.style.backgroundColor = this.colors[index]
        }   
    
    componentDidMount(){
        this.information()
        this.colorChange() 
    }
        

     random = ()=>{
        let index = Math.floor(Math.random()*this.state.data.length) 
        return index
    }

    change = (e)=> {
        if(e) e.preventDefault()
        let valor = this.state.data[this.random()]
        this.colorChange()
        return this.setState(this.state.current = valor)
    }




   
        render(){
        return(
            <section className={this.props.theme} id="quote-box">
                <section id="text">
                    " {this.state.current.quote} "
                </section>
                <div id="author">
                     - {this.state.current.author}
                </div>
        
                <div className="buttons">
            
                    <div id={"separator"}>
                        <a
                            className={"button"}
                            id={`${this.props.theme}button`}
                            title="Tweet this quote!"
                            target="_blank"
                            href="https://twitter.com/intent/tweet?hashtags=quotes&text=%22What%E2%80%99s%20money%3F%20A%20man%20is%20a%20success%20if%20he%20gets%20up%20in%20the%20morning%20and%20goes%20to%20bed%20at%20night%20and%20in%20between%20does%20what%20he%20wants%20to%20do.%22%20Bob%20Dylan"
                        >
                            <FontAwesomeIcon className="icon" icon={faTwitter}/>
                        </a>
                        <a
                            className={"button"}
                            id={`${this.props.theme}button`}
                            title="Post this quote on tumblr!"
                            target="_blank"
                            href="https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=Bob%20Dylan&content=What%E2%80%99s%20money%3F%20A%20man%20is%20a%20success%20if%20he%20gets%20up%20in%20the%20morning%20and%20goes%20to%20bed%20at%20night%20and%20in%20between%20does%20what%20he%20wants%20to%20do.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                        >
                            <FontAwesomeIcon className="icon" icon={faTumblr}/>
                        </a>
                    </div>
                        <button className="buttonBigger" id={`${this.props.theme}button`} onClick={(e)=>this.change(e)}>New quote</button>
                    
                </div>
                
            </section>)
    }
} 