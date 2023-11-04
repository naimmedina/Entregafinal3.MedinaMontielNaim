import { useContext, useState } from "react"
import { cartContext } from "../context/Cartcontext"
import { db } from "../../config/firebase"
import { collection, documentId, getDocs, query, where, Timestamp, addDoc, writeBatch,} from "firebase/firestore"
import CheckoutForm from "../CheckOutForm/CheckOutForm"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart} = useContext(cartContext)
    const createOrder = async ({name,phone,email}) =>{
        setLoading (true)

        try {
            const objOrder = {
                buyer: {
                    name,phone,email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' ,ids)))
            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock
                const productAddedToCart = cart.find((prod) => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity;
                if(stockDB >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDB - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos fuera de Stock')
            }
        } catch (error) {
            console.error (error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1 className="cargando-title">Se esta generando su orden...</h1>
    }

    if(orderId){
        return <h1 className="cargando-title">El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1 className="title checkout-title">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout