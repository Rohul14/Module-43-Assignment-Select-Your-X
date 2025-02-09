import { useEffect, useState } from "react";
import All_players from "../All_players/All_players";
import PropTypes from 'prop-types';

const Available_Players = ({handleByePlayer,setSelected,selectPlayer}) => {
    const[available,setAvailable]=useState([])

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setAvailable(data))
    },[])
    return (
        <div className="py-10 mx-6 lg:max-w-7xl lg:mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                <h1 className="text-xl font-bold">Available Players: {available.length}</h1>
                <div 
                className="flex gap-4 lg:gap-0">
                    <button 
                        className="border-[#7d7c7c99] lg:border-0 rounded-md lg:border-y-[1px] lg:border-l-[1px] px-6 py-3 lg:rounded-none lg:rounded-l-xl text-white bg-blue-600 hover:bg-blue-800 hover:text-white cursor-pointer"
                    >Available</button>

                    <button 
                        onClick={()=> setSelected (true)}
                        className="border border-[#9c999999] lg:border-y-[1px] lg:border-r-[1px] lg:border-0 rounded-md lg:rounded-none px-6 py-3 lg:rounded-r-xl cursor-pointer"
                    >Selected({selectPlayer.length})</button>
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
    handleByePlayer:PropTypes.func,
    setSelected:PropTypes.bool,
    selectPlayer:PropTypes.array
}

export default Available_Players;