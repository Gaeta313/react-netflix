import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MainGallery from './components/MainGallery';
import MyNav from './components/MyNav';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <MyNav />
      <SideBar />
      <MainGallery />
      
    </div>
  );
}

export default App;
