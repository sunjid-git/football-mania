import React from 'react';
import './Cart.css'
import { Card} from 'react-bootstrap';
const Cart = (props) => {
    const cart = props.cart;

    const totalSalary = cart.reduce((sum,salary) => sum + salary.salary,0);
    const totalTransferRate = cart.reduce((sum,transfer) => sum + transfer.transfer,0);

    return (

        <Card className="col-md-4">

                <h5>Added Player: {cart.length}</h5>
                {/* <ol className="list-group"> */}
                {
                    cart.map(player => <button> {player.name} ${player.salary} ${player.transfer}</button> )
                }
                {/* </ol> */}

                <h5> Total Salary: {totalSalary}</h5>
                <h5> Total Transfer Cost: {totalTransferRate}</h5>

        
        </Card>

        
    );
};

export default Cart;