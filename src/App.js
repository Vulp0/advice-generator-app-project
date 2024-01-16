import './App.css';
import Dice from './icon-dice.svg';
import Separator from './pattern-divider-mobile.svg';

function App() {
  return (
    <div className="App">
      <main className='MainContainer'>
        <header className='AdviceNumber'>advice #69</header>
        <main className='AdviceText'>"actual advice"</main>
        <img className='Separator' src={Separator} alt=''></img>
        <button className='NewAdviceButton'>
          <img src={Dice} alt=''></img>
        </button>
      </main>
    </div>
  );
}

export default App;
