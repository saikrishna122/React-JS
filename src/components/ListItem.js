import AddToCartIcon from "../assets/icons/add_cart.svg";
import {useState} from "react";
const ListItem = ({ data }) => {
    const [message,setMessage]=useState("Not added to cart Yet")
    //let message="Not added to cart Yet" 
    const handleClick=()=>{
        //message="Added to cart !"
        setMessage("Added to cart !")
        console.log("clicked ",message);
    }

        const [counter, setCounter] = useState(0)

    const increaseCounterByOne = () => {
        // Add increasing logic
        setCounter(counter + 1);
    }

    const descreaseCounterByOne = () => {
        // Add descreasing logic
        if(counter <= 0) {
            return;
        }
        setCounter(counter - 1);
    
    }


    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
            <div className={"item-card__information"}>
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>
                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <small className={"cart-message"}>{message}</small>
            <button className={"cart-add"} onClick={handleClick}>
                <span>Add to Cart</span>
                <img src={AddToCartIcon} alt="Cart Icon"/>
            </button>
            
            <div className={"cart-addon"}>
                <button onClick={descreaseCounterByOne}><span> - </span></button>
                <span className={"counter"}>{counter}</span>
                <button onClick={increaseCounterByOne}><span> + </span></button>
            </div>
        </div>
    )
}

export default ListItem