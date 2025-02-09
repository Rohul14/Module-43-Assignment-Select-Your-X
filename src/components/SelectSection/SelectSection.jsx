
import  PropTypes  from 'prop-types';
import PlayerSelect from '../PlayerSelect/PlayerSelect';

const SelectSection = ({setSelected,selectPlayer,handlerRemove,addMorePlayer}) => {
    // console.log('add player',selectPlayer)
    return (
        <div className='py-10 mx-6 lg:max-w-7xl lg:mx-auto'>
            <div className="flex flex-col lg:flex-row justify-between items-center  gap-2">
                <h1 className="text-xl font-bold">Selected Players: ({selectPlayer.length}/6)</h1>
                <div className="flex gap-4 lg:gap-0">
                    <button 
                        onClick={()=> setSelected(false)}
                        className="border border-[#a3a2a299] lg:border-y-[1px] lg:border-l-[1px] lg:border-0 rounded-md lg:rounded-none px-6 py-3 lg:rounded-l-xl cursor-pointer "
                    >Available</button>

                    <button 
                        className="border-[#b2b0b099] lg:border-0 rounded-md lg:border-y-[1px] lg:border-r-[1px] px-6 py-3 lg:rounded-none lg:rounded-r-xl text-white bg-blue-600 hover:bg-blue-800 hover:text-white cursor-pointer"
                    >Selected({selectPlayer.length})</button>
                </div>
            </div>
                <div className='my-10'>
                    {
                        selectPlayer.map(player=> <PlayerSelect
                        player={player}
                        handlerRemove={handlerRemove}
                        setSelected={setSelected}
                        key={player.id}
                        ></PlayerSelect>)
                    }
                    <button
                        onClick={()=> setSelected(false)}
                        className="border rounded-2xl p-4 bg-blue-600 text-white hover:bg-blue-800 hover:text-white cursor-pointer"
                    >Add More Player</button>
            </div>
        </div>
    );
};

SelectSection.propTypes={
    setSelected:PropTypes.bool,
    selectPlayer:PropTypes.array,
    handlerRemove:PropTypes.func,
    addMorePlayer:PropTypes.func
}

export default SelectSection;