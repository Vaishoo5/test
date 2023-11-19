import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
import Greet from './components/Greet';
import Button from './components/Button';
import Inputs from './components/Inputs';
// import Utils from './components/Utils';
import ClassComp from './components/ClassComp';
import Toggle from './components/ClassComp';
import LifeCycle from './components/LifeCycle';
import InputText from './components/InputText';
import RenderList from './components/RenderList';
import Item from './components/Item';
import History from './components/History';
import User from './components/User';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Error from './components/Error';
import FetchData from './components/FetchData';
import Context from './components/Context';
import Counter from './components/Reducer';
import Ref from './components/Ref';

function App() {
  return (
    // <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Ref/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
      
          
       
    // </div>
  );
}

export default App;


{/* <Greet name="Vaishoo" vdEmployee='false' color='green'/> */}
          {/* <Button/> */}
         
          {/* <Inputs type='range'/>
          <Toggle/>
          <LifeCycle/>
          <InputText/>
          <RenderList/> */}
          {/* <Input/> */}
{/* <Route path="/about" element={<Button/>}>
             <Route path="/item" element={<Item/>}></Route>
          </Route> */}

      //     fetch('https://jsonplaceholder.typicode.com/comments')
      // .then(response => response.json())
      // .then(json => console.log(json))