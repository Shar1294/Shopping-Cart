import React, { useState } from "react";


const CartProductItem = ({size, qty}) => {

    
    return (
        <div>
            <table style={{color:"black"}}>
                <tr>
                    <td>25mph Vest Small Size</td>
                    <td>{size}</td>
                    <td>{qty}</td>
                    <td>{(19.99 * qty).toFixed(2)}</td>
                </tr>
            </table>
        </div>
    )

}

export default CartProductItem;