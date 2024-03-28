import './App.css';
import About from './components/about/about';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Tabs from './components/tabs/Tales';
import Contacts from './components/contacts/Contacts';
import { useState } from 'react';
import Footer from './components/footer/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('Главная');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
   <>
    <Header onTabChange={handleTabChange} />
   <main>
   <Hero />
   <About />
   <Tabs activeTab={activeTab} />
   <Contacts />
   </main>
   <Footer />
   </>
  );
}

export default App;
