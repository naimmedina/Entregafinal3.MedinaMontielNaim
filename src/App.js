import 'bulma/css/bulma.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './pages/Error';
import Itemlistcontainer from './Components/Itemlistcointainer';
import Itemdetailcontainer from './Components/ItemDetailsContainer/Itemdetails.container';
import Navbar from './Components/Navbar'


function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Itemlistcontainer/>}/>
            <Route path="/category/:categoryId" element={<Itemlistcontainer/>}/>
            <Route path="/item/:itemId" element={<Itemdetailcontainer/>}/>
            <Route path="*" element={<Error/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;