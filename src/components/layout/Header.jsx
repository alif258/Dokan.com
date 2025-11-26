import { useState } from "react";
import Flex from '../Flex';
import { Link } from 'react-router-dom';
import Image from '../Image';

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>

            <Flex className="main max-w-[1400px] m-auto py-[30px] justify-between items-center px-4 lg:px-0 ">



                <div className="absolute top-0 left-0 -z-100">
                    <Image src='/images/Ellipse.png' />
                </div>




                {/* Logo */}
                <div>
                    <Link to='/'>
                        <Image src='/images/DokanLogo.png' />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:block">
                    <ul className='poppins leading-[120%] text-[16px] text-[#25252D] '>
                        <Flex className='gap-6'>

                            <Link to='/features'>
                                <Flex className='gap-2.5 items-center'>
                                    <li className='font-semibold hover:text-[#7047EB]'>Features</li>
                                    <Image src='/images/Shape.png' />
                                </Flex>
                            </Link>

                            <Link to='/modules'>
                                <li className='font-semibold hover:text-[#7047EB]'>Modules</li>
                            </Link>

                            <Link to='/themes'>
                                <li className='font-semibold hover:text-[#7047EB]'>Themes</li>
                            </Link>

                            <Link to='/mobile-apps'>
                                <Flex className='gap-2.5 items-center'>
                                    <li className='font-semibold hover:text-[#7047EB]'>Mobile Apps</li>
                                    <Image src='/images/Shape.png' />
                                </Flex>
                            </Link>

                            <Link to='/demo'>
                                <li className='font-semibold hover:text-[#7047EB]'>Demo</li>
                            </Link>

                            <Link to='/resource'>
                                <Flex className='gap-2.5 items-center'>
                                    <li className='font-semibold hover:text-[#7047EB]'>Resource</li>
                                    <Image src='/images/Shape.png' />
                                </Flex>
                            </Link>

                            <Link to='/plugins'>
                                <Flex className='gap-2.5 items-center'>
                                    <li className='font-semibold hover:text-[#7047EB]'>Related Plugins</li>
                                    <Image src='/images/Shape.png' />
                                </Flex>
                            </Link>

                            <Link to='/pricing'>
                                <li className='font-semibold hover:text-[#7047EB]'>Pricing</li>
                            </Link>

                        </Flex>
                    </ul>
                </div>

                {/* Desktop Buttons */}
                <Flex className="hidden lg:flex gap-8 items-center">
                    <div className="font-semibold text-[16px] cursor-pointer">Login</div>
                    <div className="font-bold text-white bg-[#7047EB] text-[14px] leading-[150%] py-4 px-[22px] rounded-2xl cursor-pointer">
                        Get Dokan
                    </div>
                </Flex>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden block"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <svg width="28" height="28" fill="currentColor">
                            <path d="M6 6 L22 22 M6 22 L22 6" stroke="black" strokeWidth="2" />
                        </svg>
                    ) : (
                        <svg width="28" height="28" fill="currentColor">
                            <path d="M4 7h20M4 14h20M4 21h20" stroke="black" strokeWidth="2" />
                        </svg>
                    )}
                </button>

            </Flex>

            {/* Mobile Dropdown */}
            {open && (
                <div className="lg:hidden bg-gray-100 px-6 py-5 space-y-4 text-[17px] font-medium">

                    <Link to='/features'><p>Features</p></Link>
                    <Link to='/modules'><p>Modules</p></Link>
                    <Link to='/themes'><p>Themes</p></Link>
                    <Link to='/mobile-apps'><p>Mobile Apps</p></Link>
                    <Link to='/demo'><p>Demo</p></Link>
                    <Link to='/resource'><p>Resource</p></Link>
                    <Link to='/plugins'><p>Related Plugins</p></Link>
                    <Link to='/pricing'><p>Pricing</p></Link>

                    <hr className="border-gray-300" />

                    <p className="font-semibold">Login</p>
                    <div className="font-bold text-white bg-[#7047EB] text-[15px] py-3 px-5 rounded-xl inline-block">
                        Get Dokan
                    </div>
                </div>
            )}

        </>
    );
};

export default Header;
