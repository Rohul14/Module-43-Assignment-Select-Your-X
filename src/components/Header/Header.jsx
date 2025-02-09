import icon from '../../../src/assets/image/football-log.jpg'
import PropTypes from 'prop-types';

const Header = ({coinAdd}) => {
    return (
        <nav className='flex justify-between items-center py-8 mx-6 lg:max-w-7xl lg:mx-auto'>
            <div>
                <img className='w-[70px] h-[70px]' src={icon} alt="" />
            </div>
            <div className='flex gap-2.5 lg:flex-row items-center lg:gap-12'>
                <p className='max-md:hidden text-[#131313B3]'>Home</p>
                <p className='max-md:hidden text-[#131313B3]'>Fixture</p>
                <p className='max-md:hidden text-[#131313B3]'>Teams</p>
                <p className='max-md:hidden text-[#131313B3]'>Schedules</p>
                <button 
                    className="border border-gray-400 cursor-pointer rounded-md px-6 py-3 hover:text-gray-900 flex items-center gap-2 hover:bg-amber-50"
                ><span>{coinAdd}</span> Coin <img className='w-6' src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png" alt="" /></button>
            </div>
        </nav>
    );
};

Header.propType={
    coinAdd:PropTypes.string.isRequired
}

export default Header;