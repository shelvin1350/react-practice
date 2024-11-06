import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import Assi from './Assi';
import Counter from './Counter';
import Amazon from './Amazon';
import PropEx from './PropEx';

function App() {
  return(
  <div>
    {/* <SignUp/> */}
    {/* <Assi/> */}
    {/* <Counter/> */}
    {/* <Amazon/> */}
    <h1>Product List</h1>
    <PropEx products="Laptop" price="999" description="High performance Laptop"/>
    <PropEx products="Smartphone" price="699" description="Latest smartphone with powerful features"/>
    <PropEx products="Headphone" price="199" description="Noice cancelling over-ear headphone"/>
    
  </div>
  );
}


export default App;
