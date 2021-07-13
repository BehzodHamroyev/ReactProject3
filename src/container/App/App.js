import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Swipper from '../swiper/swiper';
import About from '../About/About';
import Templates from '../Templates/Templates';
import Customer from '../Customer/Customer';
import Price from '../Price/Price';
import Reytings from '../Reytings/Reytings';
import LearnHomerun from '../LearnHomerun/LearnHomerun';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Swipper/>
      <About/>
      <Templates/>
      <Customer/>
      <Price/>
      <Reytings/>
      <LearnHomerun/>
      <Footer/>
    </div>
  );
}

export default App;
