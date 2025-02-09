import cover from '../../../src/assets/image/cover1.jpg'
import PropTypes from 'prop-types';



function Cover({handlerAddCion}) {
    return (
        <div className='py-16 mx-6 lg:max-w-7xl lg:mx-auto relative'>
                <img className='w-full object-cover absolute top-0 h-full rounded-xl' src={cover} alt="" />
            <div className='text-center space-y-1 lg:pb-10 lg:space-y-4 relative z-50'>
                
                <img className='w-1/3 lg:w-1/4 mx-auto' src="https://cdn-icons-png.flaticon.com/128/17873/17873706.png" alt="" />

                <h1 className='text-3xl font-bold text-white'>Assemble Your Ultimate Dream 11 Football Team</h1>
                <p className='text-[#dfddddd6] lg:text-xl'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handlerAddCion} className='bg-amber-500 text-xs text-white font-semibold  lg:text-lg py-4 px-6 rounded-xl hover:bg-yellow-500 cursor-pointer'>Claim Your Credit</button>
            </div>
        </div>
    );
}

Cover.propTypes = {
    handlerAddCion:PropTypes.func
};

export default Cover;