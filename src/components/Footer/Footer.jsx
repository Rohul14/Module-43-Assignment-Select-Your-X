import log from '../../../src/assets/image/football-log.jpg'
const Footer = () => {
    return (
        <div className=''>
            <div className=" bg-[#06091A] ">
                <div className='pt-60'>
                    <img className='mx-auto w-28 rounded-full' src={log} alt="" />
                </div>
                <div className=" grid grid-cols-1 gap-6 lg:grid-cols-3 pt-20 p-8 lg:px-36">
                <nav className="space-y-4">
                    <h6 className="text-2xl font-bold text-white">About Us</h6>
                    <p className="text-[#FFFFFF99] w-[300px]">BrandingWe are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav className="space-y-4">
                    <h6 className="text-2xl font-bold text-white">Quick Links</h6>
                    <li className="text-[#FFFFFF99]">Home</li>
                    <li className="text-[#FFFFFF99]">Services</li>
                    <li className="text-[#FFFFFF99]">About</li>
                    <li className="text-[#FFFFFF99]">Contact</li>
                </nav>
                <nav className="">
                    <h6 className="text-2xl font-bold text-white">Subscribe</h6>
                    <p className="text-[#FFFFFF99] my-4">Subscribe to our newsletter for the latest updates.</p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="bg-white px-2 lg:px-6 py-4 rounded-l-xl " />
                        <button className="h-14 bg-linear-to-r from-orange-300 to-pink-300 px-2 lg:px-6 rounded-r-xl">Subscribe</button>
                </nav>
                
                </div>
                <div className="border-t border-[#FFFFFF99] py-10 px-4">
                    <aside className="text-[#FFFFFF99] text-center">
                            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Footer;