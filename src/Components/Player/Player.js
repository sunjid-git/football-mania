import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Card,Button } from 'react-bootstrap';

const Player = (props) => {

    const {img,name,team,salary,transfer,nation} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (


        <Card style={{ width: '25rem' }}>
            <Card.Body>
            <div className="player">
                <Card.Title variant="success">{name}</Card.Title>
                <img src={img} alt=""/>
                     
                <Card.Text>
                <h5>Club : {team}</h5>
                <h5>Club : {team}</h5>
                <h5>Salary : {salary}</h5>
                <h5>Transfer Rate : {transfer}</h5>
                <h5>Origin Nation : {nation}</h5>
                </Card.Text>

                <Button className="add-btn" onClick={()=>handleAddPlayer(props.player)}>
                <FontAwesomeIcon icon={faUser} />+ Add in the List
                </Button>

            </div>
            </Card.Body>
        </Card>

       

    );
};

export default Player;