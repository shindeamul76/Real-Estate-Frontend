
import './App.css';
import Signup from "./signUp/Signup";
import Signin from './signUp/Signin';
import PropertyDetail from './components/PropertyDetail';
import GeneralInfo from './components/GeneralInfo';
import LocationInfo from './components/LocationInfo';
import Home from './DisplayProp/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicInfo from './components/BasicInfo';



function App() {
  return (

 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>}/>
       <Route path="/home" element={<Home/>} />
        <Route path="/BasicInfo" element={<BasicInfo/>} /> 
        <Route path="/PropertyDetail" element={<PropertyDetail/>} />
        <Route path="/GeneralInfo" element={<GeneralInfo/>} />
         <Route path="/LocationInfo" element={<LocationInfo/>} />
      </Routes>  
    </BrowserRouter>
     
  );
}

export default App;
