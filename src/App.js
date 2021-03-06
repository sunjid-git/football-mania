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
        <h4>Listed Players: {players.length}</h4>
        <Cart cart={cart}></Cart>
        
        {
          players.map(player => <button> <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}> </Player> </button>  )
        }
    </div>
  );
}

export default App;
