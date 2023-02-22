import { useContext } from "react";
import CardContext from "../../../store/card-context";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemform";

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    const cartCtx  = useContext(CardContext);
    const addToItemCart = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price:props.price
        })
    }

    return(
        <li>
            <div className={classes.meal}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>

            <div>
                <MealItemForm onAddToCart = {addToItemCart} id = {props.id}/>
            </div>
        </li>
    )

}

export default MealItem;