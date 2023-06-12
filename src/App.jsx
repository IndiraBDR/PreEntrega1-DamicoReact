
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar,ItemListContainer, ItemDetailContainer } from './components';



function App() {
  return (
    <>
      <NavBar></NavBar>
      
      
  

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi pagina"/>} />
          <Route path='/product-detalle/:id' element={ <ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>

    
    /*
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi pagina"/>
      <ItemDetailContainer/>
    </div>
    */
  );
}

export default App;
