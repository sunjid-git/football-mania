import React,{useEffect, useState} from 'react';
import footballer from './fakeData/data.json';
import Player from './Components/Player/Player';
import Cart from './Components/Cart/Cart';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);

  const handleAddPlayer = (player) => {
    console.log('added',player);

    const newCart = [...cart,player];
    setCart(newCart);
  }

  const [players, setPlayer] = useState([]);

  useEffect(() =>{
    setPlayer(footballer);
    console.log(footballer);
  },[])

  return (
    <div className="App">

        <h1>Football Mania</h1>
   
        <h4>Total Listed Player: {players.length}</h4>
        <h5>Added Player: {cart.length}</h5>
        <Cart cart={cart}></Cart>

        {
          players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}> </Player>)
        }

    </div>
  );
}

export default App;
