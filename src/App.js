
import { QuoteClass } from './Quotes/QuotesClass';
import './App.scss';
import { useState } from 'react';
import { faMastodon, faSwift, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function App() {
  const [theme, setTheme] = useState("light"); 
  const handleTheme = () => {
    if(theme === "light") setTheme("dark")
    else setTheme("light")
  }
  return (
    <div className="App">
      <button onClick={handleTheme} style={{backgroundColor: 'transparent', border: "0px", cursor:"pointer"}}>
        <img src={require(`../src/assets/${theme === "light" ? "moon":"sun"}.png`)} height={"50"}/>
      </button>
      <QuoteClass  theme={theme}/> 
      <section className='footer' id={`${theme}Footer`}>
        <div className='author'>Created by <a href='https://github.com/CarlosG1272' target={"_blank"}>Carlos Guerra</a></div>
        <div className='author'><a href='https://www.freecodecamp.org/learn' target={"_blank"}>FreeCodeCamp</a> Challenge´s</div>
      </section>
    </div>
  );
}

export default App;
