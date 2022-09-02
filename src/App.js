import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from './components/Footer';
import MainGallery from './components/MainGallery';
import MyNav from './components/MyNav';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <MyNav />
      <SideBar />
      <MainGallery />
      <Footer />
      
    </div>
  );
}

export default App;
