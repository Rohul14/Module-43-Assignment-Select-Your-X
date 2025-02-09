import { MdOutlineDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';

PlayerSelect.propTypes = {
    player:PropTypes.object,
    handlerRemove:PropTypes.func,
    setSelected:PropTypes.func
};

function PlayerSelect({player,handlerRemove,setSelected}) {
    // console.log('add player' ,player)
    const {name,position,img}=player;
    return (
        <div>
            <div>
            <div className='border border-[#bcbbbb99] p-4 rounded-xl flex justify-between items-center mb-5'>
                 <div className='flex gap-5 items-center'>
                     <img className="rounded-full h-[80px] object-center w-[80px]" src={img} alt="" />
                     <div>
                         <h1 className="font-bold">{name}</h1>
                         <p className="font-semibold">Position: {position}</p>
                     </div>
                 </div>
                 <div>
                     <button
                        onClick={()=> handlerRemove(player)}
                        className="text-3xl cursor-pointer text-red-400"
                    ><MdOutlineDeleteForever /></button>
                 </div>
            </div>
            
        </div>
          
        </div>
    );
}

export default PlayerSelect;