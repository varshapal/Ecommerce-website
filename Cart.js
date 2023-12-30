import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = () => {
    const cartItems = [
        {
          title: "Colors",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
          title: "Black and white Colors",
          price: 50,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
          title: "Yellow and Black Colors",
          price: 70,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
          title: "Blue Color",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];

    return (
        <Modal>
            {cartItems.map((item) => <li>{item.name}</li>)}
            <div>
                <span>Amount</span>
                <span>vdndkfdk</span>
            </div>
            <div className={classes.actions}>
              <button className={classes['button--alt']}>close</button>
            </div>
            
            
        </Modal>
    )
};

export default Cart;