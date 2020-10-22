import React from "react";
import "./Subtotal.css";
import {getBasketTotal} from "./reducer";
import {useStateValue} from "./StateProvider.js";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
	const [{basket}, dispatch] = useStateValue();
	return (
	 <div className="subtotal">
	 <CurrencyFormat
	 renderText={(value) => (
<>
<p>subtotal({basket.length} items):<strong>({value})</strong></p>
<small className="subtotal__gift">
<input type="checkbox" /> This order contains a gift</small>
	 	</>)}
	 decimalScale={2}
	 value={getBasketTotal(basket)}
	 displayType={"text"}
	 thousandSeparator={true}
	 prefix={'INR'}
	  />
	 <button>Proceed to checkout</button>
	 </div>
	);
}

export default Subtotal;