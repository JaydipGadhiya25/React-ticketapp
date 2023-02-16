import React from 'react';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/Navbar';
import Featured from '../../component/featured/Featured';
import PropertyList from '../../component/propertylist/PropertyList';
import './Home.css'
import HomeGuest from '../../component/homeguestlist/HomeGuest';
import MailBox from '../../component/mailbox/MailBox';
import Footer from '../../component/footer/Footer';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <HomeGuest/>
        <MailBox/>
        <Footer/>
      </div>
    </div>
  )
}
export default Home;
