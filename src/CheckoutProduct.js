import React from "react";
import "./Checkout.js";
import "./CheckoutProduct.css";
import {useStateValue} from "./StateProvider.js";
function CheckoutProduct({ id, title, image, price, rating}) {
const [{basket}, dispatch] = useStateValue();
const removeFromBasket = () => {
	dispatch({
		type: "REMOVE_FROM_BASKET",
		id: id,
	});
}
	return (
		<div className="checkoutProduct">
		<img className="checkoutProduct__image" src={image} alt="" />
		<div className="checkoutProduct__info">
		<p className="checkoutProduct__title">{title}</p>
		<p className="CheckoutProduct__price">

<small>Rs</small>
<strong>{price}</strong></p>
<div className="checkoutProduct__rating">
{
	Array(rating)
	.fill()
	.map((_) => (
		<p>⭐</p>
		))
}
</div>
<button onClick={removeFromBasket}>Remove From Basket </button>
		</div>
		</div>
	);
}

export default CheckoutProduct;