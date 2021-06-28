import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/actions/product.actions';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import HomeScreen from './components/screens/homescreen/HomeScreen'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer';
import SingleItem from './components/singleitem/SingleItem'
import ViewTypes from './components/viewtypes/ViewTypes';
import Cart from './components/cart/Cart'
export const Layout=({children})=>{
  return (
   <div className="mx-4 text-xs sm:text-sm md:text-base">
     <Header/>
     <div className="pt-10 sm:flex ">
     <Sidebar/>
     <div className="w-full">
     {children}
     </div>
     </div>
     <Footer/>
   </div>
  )
}

       



const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(fetchProducts())
  },[dispatch])

  return (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Layout>
          <HomeScreen/>
        </Layout>
      </Route>
      <Route path='/view/:id'>
        <Layout>
          <SingleItem/>
        </Layout>
      </Route>
      <Route path='/collection/:type'>
        <Layout>
          <ViewTypes/>
        </Layout>
      </Route>
      <Route path='/cart'>
        <Layout>
          <Cart/>
        </Layout>
      </Route>

      
    </Switch>
  </Router>
  );
};

export default App;
