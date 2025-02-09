
const Subscribe = () => {
    return (
         <div className='border-2 rounded-2xl border-white  bg-[#FFFFFF1A] p-6 mx-6 lg:max-w-7xl lg:mx-auto relative z-40 mb-[-200px]'>
            <div className="bg-linear-to-r from-cyan-200 to-orange-200 text-center rounded-xl py-20 space-y-3 px-4">
                <h1 className='text-2xl text-black font-bold'>Subscribe to our Newsletter</h1>
                <p>Get the latest updates and news right in your inbox!</p>
                <div className='flex flex-col lg:flex-row gap-3 justify-center'>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-white border border-[#ebe3e3] lg:w-1/3 px-6 py-4 rounded-xl " />
                <button className="h-14 bg-linear-to-r from-orange-300 to-pink-300 px-6 rounded-xl">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;