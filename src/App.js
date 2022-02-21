import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AddUsers from "./components/AddUsers";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import Error from "./components/Error";


function App() {
  return (
  <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element = {<LandingPage/>}/>
    <Route path="/Users" element = {<Users/>}/>
    <Route path="/AddUsers" element = {<AddUsers/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
