import Navbar from './Componentes/Navbar/Navbar'
import 'bulma/css/bulma.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div>
            <Navbar  />
            <ItemListContainer greeting={'Bienvenidos'}/>
        </div>
    );
};

export default App;