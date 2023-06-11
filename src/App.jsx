import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi pagina"/>
      <ItemDetailContainer/>
    </div>

  );
}

export default App;
