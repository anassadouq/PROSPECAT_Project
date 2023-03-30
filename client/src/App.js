import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Authentification/Register';
import Login from './Authentification/Login';
import BlueHeader from './Blog/Header/BlueHeader'
import Header from './Blog/Header/Header';
import Footer from "./Footer/Footer/Footer";
import Blog from './Blog/Blog';
import LandingPage from './LandingPage/LandingPage';
import PricingPlan from './LandingPage/PricingPlan/PricingPlan';
import AdminPricingPlan from './LandingPage/PricingPlan/AdminPricingPlan';
import ProductFeatures from './LandingPage/ProductFeatures/ProductFeatures';
import FindLeads from './FindLeads/FindLeads';
import FindEmails from './FindEmails/FindEmails';
import ListManager from './ListManager/ListManager';
import Domaine from './DomaineSearch/Domaine';
import ChromeExtension from './ChromeExtension/ChromeExtension';
import Contact from './Contact/Contact';
import AuthGuard from './Authentification/AuthGuard'
export default class App extends Component{
  render(){
    return (
      <div id="all">
        <Router>
        <BlueHeader/>
          <div className='container'>
            <Header/>
          </div>
            <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<Blog/>}/>
              <Route path='/landing_page' element={<LandingPage/>}/>
              <Route path="/admin_pricingPlan" element={
                <AuthGuard>
                  <AdminPricingPlan/>
                </AuthGuard>
              }/>

              <Route path='/features' element={<ProductFeatures/>}/>
              <Route path='/find_leads' element={<FindLeads/>}/>
              <Route path='/find_emails' element={<FindEmails/>}/>
              <Route path='/list_manager' element={<ListManager/>}/>
              <Route path='/domaine_search' element={<Domaine/>}/>
              <Route path='/chrome_extension' element={<ChromeExtension/>}/>
              <Route path='/contact' element={<Contact/>}/>

            </Routes>
          <Footer/>
        </Router>
      </div>
    );
  }
}