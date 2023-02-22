import React from "react";

import classes from "./Header.module.css"
import meals from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMEals</h1>
            <HeaderCartButton onClick = {props.onShow} />
        </header>

        <div className={classes["main-image"]}>
            <img src={meals} alt="a table of delicious food" /> 
        </div>
    </React.Fragment>
}


export default Header;