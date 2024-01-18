import './App.css';
import Dice from './icon-dice.svg';
import Separator from './pattern-divider-mobile.svg';

function App() {
    async function getAdvice() {
      const adviceObj = (await (await fetch("https://api.adviceslip.com/advice")).json()).slip;
      return adviceObj;
    }

    async function updateText() {
      let advice = await getAdvice();
      const AdviceNumberElement = document.querySelector(".AdviceNumber");
      const AdviceTextElement = document.querySelector(".AdviceText");

      AdviceNumberElement.textContent = "Advice #" + advice.id;
      AdviceTextElement.textContent = `"${advice.advice}"`;
    }
    
  return (
    <div className="App">
      <main className='MainContainer'>
        <header className='AdviceNumber'>advice #{69}</header>
        <main className='AdviceText'>"{"It is easy to sit up and take notice, what’s difficult is getting up and taking action"}"</main>
        <img className='Separator' src={Separator} alt=''></img>
        <button className='NewAdviceButton' onClick={updateText}>
          <img src={Dice} alt=''></img>
        </button>
      </main>
      <script src='./magic.js'></script>
    </div>
  );
}

export default App;
