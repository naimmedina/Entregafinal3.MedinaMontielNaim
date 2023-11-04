import { useState } from "react";

const CheckoutForm = ({onConfirm}) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault ()
        const userData = {
            name,phone,email
        }
        onConfirm(userData)
    }

    return (
        <div className="field form-checkout">
            <form className="box"onSubmit={handleConfirm}>
            <label className="label">Nombre</label>
            <div className="control">
            <input 
             className="Input"
             type='text'
             placeholder="Text input"
             value={name}
             onChange={({ target }) => setName(target.value)}/>
            </div>


            <label className="label">Telefono</label>
            <div>
            <input 
                className="Input"
                type='text'
                placeholder="Text input"
                value={phone}
                onChange={({ target }) => setPhone(target.value)} />
            </div>


            <label className="label">Email </label>
            <div className="control">
            <input 
                className="Input"
                type='text'
                placeholder="Text input"
                value={email}
                onChange={({ target }) => setEmail(target.value)}/>
            </div>

                <div>
                    <button type="submit" className="button  is-danger is-outlined">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}


export default CheckoutForm