import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar'
import {Switch, Route, Router } from "react-router-dom"
import Products from './component/Products';
import Cart from './component/Cart';
import Checkout from './component/Checkout'
import About from './component/About';
import Contact from './component/Contact';
import Succes from './component/Success';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/success" component={Succes} />
        <Home/>
      </Switch>
    </>
  );
}

// function App() {
//   return (
//       <Navbar/>
//       <Routes>
//           <Route path="/" component={Home} exact/>
//           <Route path="/products" component={Products} exact/>
//       </Routes>

//   );
// }
export default App;