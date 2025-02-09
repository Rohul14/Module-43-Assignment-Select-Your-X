import { useEffect, useState } from "react";
import All_players from "../All_players/All_players";
import PropTypes from 'prop-types';

const Available_Players = ({handleByePlayer}) => {
    const[available,setAvailable]=useState([])

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setAvailable(data))
    },[])
    return (
        <div className="py-10 mx-6 lg:max-w-7xl lg:mx-auto">
            <div className="flex flex-col lg:flex-row justify-between  gap-2">
                <h1 className="text-xl font-bold">Available Players: {available.length}</h1>
                <div className="flex gap-2 lg:gap-0">
                    <button className="border-y border-l px-4 py-3 rounded-l-md">Available</button>
                    <button className="border-y border-r px-4 py-3 rounded-r-md">Selected</button>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-10'>
                {
                    available.map(players=><All_players 
                        key={players.id}
                        handleByePlayer={handleByePlayer}
                        players={players}
                    ></All_players>)
                }
            </div>
        </div>
    );
};

Available_Players.propTypes={
    handleByePlayer:PropTypes.func
}

export default Available_Players;