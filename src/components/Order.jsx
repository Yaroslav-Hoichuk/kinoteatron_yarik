import React from "react";
import "../css/order.css"
import '../css/styles.css'

function Order() {
    return (
        <div className="order-form">

                <form method="post" id="send-order">

                    <h1>Order tickets</h1>

                    <p>Film name: Man in black</p><br />

                    <p>Price for one ticket: 5$</p><br />

                    <label htmlFor="num-tickets1">Number of tickets:</label><br />
                    <input type="text"  id="num-tickets1" /><br />

                    <label htmlFor="ccNumber">Credit card #: </label><br />
                    <input type="text" id="ccNumber"/><br/>

                    <label htmlFor="ccExpiration">Expiration: </label><br />
                    <input type="text" id="ccExpiration"/><br/>

                    <label htmlFor="ccCVV">CVV: </label><br />
                    <input type="text" id="ccCVV"/><br/>

                    <input type="submit" value="Submit order"></input>
                </form>

        </div> 
    );
}

export default Order;