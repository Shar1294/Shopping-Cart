import React, { useState } from "react";


const CartProductItem = ({ size, qty, onRemove }) => {

    const getSizeName = (size) => {
        let sizeName = '';
        switch (size) {
            case "S": sizeName = "Small"; break;
            case "M": sizeName = "Medium"; break;
            case "L": sizeName = "Large"; break;
        }

        return sizeName;
    }
    

    return (
        <tr style={{ color: "black" }}>
            <td>25mph Vest {getSizeName(size)}</td>
            <td>{size}</td>
            <td>{qty}</td>
            <td>{(19.99 * qty).toFixed(2)}</td>
            <td>
                <button onClick={onRemove}>Remove</button>
            </td>
        </tr>
    )

}

export default CartProductItem;