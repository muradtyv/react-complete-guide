import { time } from "console";
import { useContext, useEffect, useState } from "react";
import CardContext from "../../store/card-context.js";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";



const HeaderCartButton = (props) => {
    const [btnHighLighted, setBtnHighLight] = useState(false);
    const cartCtx = useContext(CardContext);

    const numberOfCartitems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    // const {items} = cartCtx;

    // const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ""}`;

    // useEffect(() => {
        
    //     if(items.length === 0) {
    //         return;
    //     }
    //     setBtnHighLight(true)

    //    const timer = setTimeout(() => {
    //     setBtnHighLight(false);
    //    }, 300)

    //    return () => {
    //     clearTimeout(timer)
    //    }
    // }, [items])

    return <button className={classes.button} onClick = {props.onClick}>
        <span className= {classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartitems}</span> 
    </button>
}

export default HeaderCartButton;