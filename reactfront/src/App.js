import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// First CRUD
import ShowProducts from './components/ShowProducts';
import CreateProducts from './components/CreateProducts';
import EditProducts from './components/EditProducts';

// Other examples
import Sum from './components/simple_test/Sum';

// Second CRUD
import ShowProducts2 from "./components/product/ShowProducts";
import CreateProducts2 from "./components/product/CreateProducts";
import EditProducts2 from "./components/product/EditProducts";

// Third CRUD

import ShowFoods from './components/food/ShowFoods';
import CreateFoods from './components/food/CreateFoods';
import EditFoods from './components/food/EditFoods';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowProducts/> }/>
          <Route path='/create' element={ <CreateProducts/> }/>
          <Route path='/edit/:id' element={ <EditProducts/> }/>

          <Route path='/sum' element={ <Sum/> }/>

          <Route path='/crud' element={ <ShowProducts2/> }/>
          <Route path='/create_2' element={ <CreateProducts2/> }/>
          <Route path='/edit_2/:id' element={ <EditProducts2/> }/>

          <Route path='/food' element={ <ShowFoods/>}/>
          <Route path='create_3' element={ <CreateFoods/> }/>
          <Route path='/edit_3/:id' element={ <EditFoods/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
