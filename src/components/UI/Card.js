
import classes from "./Card.module.css"; 

const Card =(props) => {
    return <div className={`${classes.card} ${classes.className}`}>{props.children}</div>
}

export default Card;