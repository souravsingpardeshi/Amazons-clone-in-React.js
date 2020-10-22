import React from "react";
import "./Checkout.css";
import CurrencyFormat from "react-currency-format";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js";
import {useStateValue} from "./StateProvider.js";
function Checkout() {
	const [{basket}] = useStateValue();
	return (
		<div className="checkout">
		<div className="checkout__left">
		<img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349668_.jpg" alt="" />
		{basket?.length === 0 ? (
			<div className="">
			<h2>Your Basket is empty</h2>
			<p>
You have no items in your basket. To buy on ore more click "Add to Basket" button next to item.
			</p>
			</div>
			) : (
			<div>
			<h2 className="checkout__title">Your Shopping Basket</h2>
{basket.map(item => (
<CheckoutProduct 
id={item.id}
title={item.title}
image={item.image}
price={item.price}
rating={item.rating}
/>
	))}
			</div>
			)}
		</div>
		{basket.length > 0 && (
			<div className="checkout__right">
			<Subtotal />
		</div>
			)}
		</div>
		
		);
}

export default Checkout;