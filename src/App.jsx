import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi pagina"/>
    </div>

  );
}

export default App;
