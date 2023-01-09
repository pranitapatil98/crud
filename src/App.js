
import './App.css';
import AddUser from './component/addUser';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom"
//import Login from './component/Login';

function App() {
  return (
    <div>
      <Navbar/>
  
<Routes>
<Route path="/user" element={ <AddUser/> } />
{/* <Route path="/login" element={ <Login/> } /> */}
{/* <Route path="/" element={ <Login/> } /> */}

</Routes>

</div>
  );
}

export default App;
