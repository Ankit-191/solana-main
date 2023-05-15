
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import Navbar from './components/Navbar';
import Developer from './components/Developer';
import Started from './components/Started';
import Digdipper from './components/Digdipper';
import Gotosource from './components/Gotosource';
import Developerupdate from './components/Developerupdate';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Add/>
      <Navbar/>
      <Developer/>
      <Started/>
      <Digdipper/>
      <Gotosource/>
      <Developerupdate/>
      <Footer/>
    </>
  );
}

export default App;
