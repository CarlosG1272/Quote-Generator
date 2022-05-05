import React from "react";

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
        // Piensa p chato
        let body = document.querySelector("body");
        let text = document.querySelector("#quote-box");
        let index = this.color()
        body.style.backgroundColor = this.colors[index]
        text.style.color = this.colors[index]
        console.log(text)
        
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
            <section id="quote-box">
                <section id="text">
                    " {this.state.current.quote} "
                </section>
                <div id="author">
                     - {this.state.current.author}
                </div>
        
                <div className="buttons">
        
                    <div id={"separator"}>
                        <a
                            className="button"
                            id="tweet-quote"
                            title="Tweet this quote!"
                            target="_blank"
                            href="https://www.freecodecamp.org/learn"
                        >
                             <i className="fa fa-twitter"></i>
                            <img src="http://assets.stickpng.com/images/5847f91ccef1014c0b5e48b8.png" width={"35"} height={"25"}></img>
                        </a>
                        <a
                            className="button"
                            id="tumblr-quote"
                            title="Post this quote on tumblr!"
                            target="_blank"
                            href="https://github.com/CarlosG1272"
                        >
                            <i className="fa fa-tumblr"></i>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width={"30"} height={"30"}></img>
                        </a>
                    </div>
                        <button className="button" id="new-quote" onClick={(e)=>this.change(e)}>New quote</button>
                    
                </div>
                
            </section>)
    }
} 