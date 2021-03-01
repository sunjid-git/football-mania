import React from 'react';
import './Cart.css'
import { Card,ListGroup} from 'react-bootstrap';
const Cart = (props) => {
    const cart = props.cart;

    const totalSalary = cart.reduce((sum,salary) => sum + salary.salary,0);
    const totalTransferRate = cart.reduce((sum,transfer) => sum + transfer.transfer,0);

    return (

        <Card >
          
                    
            <button className="total-amount"> Total Salary: ${totalSalary}</button>
            <button className="total-amount">Total Transfer Cost:  ${totalTransferRate}</button>
            <h5>Added Players: {cart.length}</h5>
            {
                cart.map(player =>
                     <p> {player.name} - Salary: ${player.salary} - Transfer rate: ${player.transfer} </p>
                     )
            } 
        </Card>
    );
};

export default Cart;