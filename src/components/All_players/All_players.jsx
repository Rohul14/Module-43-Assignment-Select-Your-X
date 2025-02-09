import PropTypes from 'prop-types';


function All_players({players,handleByePlayer}) {
    // console.log(players)
    const {img,name,country,flag,club,position,footed,price,id,}=players

    return (
        <div className='border-2 border-[#1313131A] p-4 rounded-xl space-y-4'>
            <img className='w-full rounded-md h-[230px] bg-cover' src={img} alt="" />
            <div className='font-bold text-xl flex gap-2'>
                <img className='w-[28px] h-[28px]' src="https://img.icons8.com/?size=80&id=ckaioC1qqwCu&format=png" alt="" />
                <p>{name}</p>
                </div>
            <div className='flex justify-between items-center border-b-2 pb-3 border-[#1313131A]'>
                <p className='flex gap-2 font-semibold items-center'>
                <img className='w-6' src={flag} alt="" />
                 {country}</p>
                 <button className='border bg-blue-100 text-black border-blue-700 px-4 py-2 rounded-3xl '>{club}</button>

            </div>
            <h1 className='font-semibold'>Rating</h1>
            <div className='flex justify-between items-center'>
                <p className='font-medium'>Position: {position}</p>
                <p className='font-medium'>Footed: {footed}</p>
            </div>
            <div className='flex justify-between items-center '>
                <p className='font-medium'>Price: {price}$</p>
                <button 
                    onClick={()=>handleByePlayer(price,name)}
                    className='bg-blue-100 hover:bg-blue-400 hover:text-white text-black rounded-3xl text-sm transition-all ease-in-out cursor-pointer border border-blue-700 px-4 py-1'
                >Choose Player</button>
            </div>

        </div>
    );
}

All_players.propTypes={
    players:PropTypes.array.isRequired,
    handleByePlayer:PropTypes.func
}

export default All_players;