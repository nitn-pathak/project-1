import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';  
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import "./styles/style.scss"
import "./styles/colors.scss"
import "./styles/home.scss"
import Contact from './components/Contact';
import Services from './components/Services';


function App() {
  return (
    <div>
   
      <Router>
   
          <Header> </Header>

        
        <Routes>

          <Route path='/' element={<Home></Home>} />
          <Route path='/contact' element= {<Contact></Contact>}/>
          <Route path='/services' element={<Services></Services>} />
          

        </Routes>
         
        <Footer></Footer>
  
       </Router>
      
      
    </div>
  );
}

export default App;
