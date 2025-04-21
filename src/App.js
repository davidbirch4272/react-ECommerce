import Nav from './components/Nav';
import Landing from './components/landing';
import Highlights from './components/Highlights';
import { FaBeer } from 'react-icons/fa'; 
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
     <Nav />
     <Landing />
     <Highlights />
     <Featured />
     
     
    </div>
  );
}

export default App;
