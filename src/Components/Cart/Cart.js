import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;

    const totalSalary = cart.reduce((sum,salary) => sum + salary.salary,0);
    const totalTransferRate = cart.reduce((sum,transfer) => sum + transfer.transfer,0);
    return (
        <div>
            <h5> Integrated Salary: {totalSalary}</h5>
            <h5> Integrated Transfer: {totalTransferRate}</h5>
        </div>
    );
};

export default Cart;