import logo from './logo.svg';
import './App.css';

function App() {
  let number = 11;
  let mess;
  if(number < 10){
    mess = <button type = "button">Lesser</button>
  }
  else{
    mess = <input type = "button" value = "greater"></input>
  }
  return(
  <div>
    {mess}
  </div>
  );
}

export default App;
