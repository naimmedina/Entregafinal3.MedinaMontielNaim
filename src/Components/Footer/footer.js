import imgfooter from "../../img/toyota-logoescrito.png"
import './footer.css';

function Footer () {


    return (
        <div className="foot">
            <div>
                <img src= {imgfooter} alt="Nombre de la empresa" width="150"/>
            </div>
            <div>
                <ul>
                  <li>Uruguay</li>
                  <li>Albania 3738</li>
                  <li>CP 13000</li>
                  <li>Montevideo</li>
                  <li>Tel: +598 95730468</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer