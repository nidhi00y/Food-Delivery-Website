import React,{useState,useContext} from 'react'
import "./FoodItem.css"
import { StoreContext } from '../../Context/Contet';

const FoodItem = ({ id, name, price, description, image }) => {

    const [itemCount,setItemCount] = useState(0)
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
    
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
                {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src="src\assets\add_icon_white.png" alt='"'/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src='src\assets\remove_icon_red.png'/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src="src\assets\add_icon_green.png"/>
                </div>

                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src="src\assets\rating_starts.png" alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>

        </div>
    )
}

export default FoodItem
