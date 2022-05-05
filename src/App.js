import { Quote } from './Quotes/Quotes';
import { QuoteClass } from './Quotes/QuotesClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <QuoteClass /> 
      <section className='footer'>
        <div className='author'>Created by <a href='https://github.com/CarlosG1272' target={"_blank"}>Carlos Guerra</a></div>
        <div className='author'><a href='https://www.freecodecamp.org/learn' target={"_blank"}>FreeCodeCamp</a> Challenge´s</div>
      </section>
    </div>
  );
}

export default App;
