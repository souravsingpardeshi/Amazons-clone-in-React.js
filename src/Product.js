import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider.js";
function Product({ id, title, image, price, rating}) {
	 const [{},dispatch] = useStateValue();
	 const addToBakset = () => {
	 	dispatch({
	 	type: "ADD_TO_BASKET",
	 	item: {
	 		id: id,
	 		title: title,
	 		image: image,
	 		price: price,
	 		rating: rating,
	 	},
	 });
	 };

	return (
		<div className="product" >
		<div className="product__info">
<p>{title}</p>
<p className="product__price">
<small>Rs</small>
<strong>{price}</strong></p>
<div className="product__rating">
{
	Array(rating)
	.fill()
	.map((_) => (
		<p>⭐</p>
		))
}
</div>
</div>
<img src={image} alt="" />
<button onClick={addToBakset}>Add to basket</button>
</div>
		);
}

export default Product;