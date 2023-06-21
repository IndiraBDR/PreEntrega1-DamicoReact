
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar,ItemListContainer, ItemDetailContainer, Cart } from './components';
import { CartProvider } from './components/Cart/CartContex';




function App() {
  return (
    <>
      
      
      
  
   <CartProvider>
      <BrowserRouter>

      <NavBar></NavBar>
        <Routes>

          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi pagina"/>} />
          <Route path='/category/:catId' element={<ItemListContainer greeting="Bienvenidos a mi pagina"/>} />
          <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          
        </Routes>
      </BrowserRouter>
      </CartProvider>
      
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
