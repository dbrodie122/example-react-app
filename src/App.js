import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CompanyList from './components/CompanyList';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import Stats from './components/Stats';

function App() {
  return (
    <div className='App container'>
      <div className='row'>
        <CompanyList />
        <ProductList />
        <UserList />
        <Stats />
      </div>
    </div>
  );
}

export default App;
