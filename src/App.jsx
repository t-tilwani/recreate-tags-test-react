import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import ErrorFallback from './ErrorFallback';

import Root from './root/Root';
import Tags from './pages/tags/Tags';
import Order from './pages/add-order/Order';
import CustomOrder from './pages/add-order/CustomOrder';
import Cart from './pages/shopping-cart/Cart';
import Orders from './pages/all-orders/Orders';



const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} errorElement={<ErrorFallback />}>
    <Route index element={<Navigate to='/tags' replace />} />
    <Route path='/tags' element={<Tags />} />
    <Route path='/add-order/:item' element={<Order />} /> 
    <Route path='/custom-order' element={<CustomOrder />}/>
    <Route path='/shopping-cart' element={<Cart />}/>
    <Route path='/orders' element={<Orders />}/>
  </Route>
));

function App() {
  
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}
export default App
