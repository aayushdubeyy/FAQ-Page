import './App.css';
import Card from './Card';
import backgroundPattern from './Images/Screenshot 2023-12-12 020640.png';
function App() {
  return (
    <div className='App'>

      <div className="">
        <img src={backgroundPattern} alt="" />
      </div>
      <div className=""></div>
      <div className="cart">
        <Card/>

      </div>
    </div>
  );
}

export default App;
