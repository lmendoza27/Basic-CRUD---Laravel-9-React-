import './App.css';
import Header from './Header'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      {/*<h1>Ecomm Project</h1>*/}
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" 
      element={
        <Protected Cmp={ProductList}>
          <ProductList />
        </Protected>
      }/>
      <Route path="/add" 
      element={
        <Protected Cmp={AddProduct}>
          <AddProduct />
        </Protected>
      }/>
      <Route path="/update/:id" 
      element={
        <Protected Cmp={UpdateProduct}>
          <UpdateProduct />
        </Protected>
      }/>
      <Route path="/search" 
      element={
        <Protected Cmp={SearchProduct}>
          <SearchProduct />
        </Protected>
      }/>
      </Routes>
     
   </BrowserRouter>
    </div>
  );
}

export default App;
