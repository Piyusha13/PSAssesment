
import Aos from 'aos';
import "aos/dist/aos.css";
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Navbar/Navbar';
import Page2 from './components/Page2/Page2';
import Page4 from './components/Page4/Page4';
import Page5 from './components/Page5/Page5';
import Footer from './components/footer/footer.jsx';
import Page3 from './components/page3/page3';
import Page6 from './components/Page6/Page6';

function App() {
  Aos.init();
  return (
    <>
    <Header/>
    <HeroSection/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    <Footer/>
    </>
  );
}

export default App;
