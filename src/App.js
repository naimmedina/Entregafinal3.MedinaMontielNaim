import 'bulma/css/bulma.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './pages/Error';
import Itemlistcontainer from './Components/Itemlistcointainer';
import Itemdetailcontainer from './Components/ItemDetailsContainer/Itemdetails.container';
import Navbar from './Components/Navbar';
import { CartProvider } from './Components/context/Cartcontext';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/footer';
import Checkout from './Components/Checkout/Checkout';

function App() {
    return (
        <div>
            <BrowserRouter>
            <CartProvider>
            <Navbar/>
            <Routes>
            <Route path="/" element={<Itemlistcontainer/>}/>
            <Route path="/category/:categoryId" element={<Itemlistcontainer/>}/>
            <Route path="/item/:itemId" element={<Itemdetailcontainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path="*" element={<Error/>}/>
            </Routes>
            </CartProvider>
            </BrowserRouter>

            <Footer/>
        </div>
    );
};

export default App;