import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/actions/product.actions';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import HomeScreen from './components/screens/homescreen/HomeScreen'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Footer from './components/footer/Footer';
export const Layout=({children})=>{
  return (
   <div>
     <Header/>
     <div className="flex pt-10 mx-4 ">
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
    </Switch>
  </Router>
  );
};

export default App;
