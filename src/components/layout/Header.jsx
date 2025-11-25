import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'

const Header = () => {
    return (
        <>


            <Flex className="main max-w-[1400px] m-auto py-[30px] justify-between">
                <div
                    className=""><Link to={'/'}><Image src={'/images/DokanLogo.png'} /></Link>
                </div>



                <div className="">
                    <ul className='menuText leading-[120%] text-[16px] text-[#25252D]'>
                        <Flex className={'gap-5'}>
                            <Link to={'features'}>
                                <Flex className={'gap-2.5'}>
                                    <li className=' font-semibold'>Features</li>
                                    <Image src={'/images/Shape.png'} />
                                </Flex>
                            </Link>
                            <Link to={'modules'}>
                                <li className=' font-semibold'>Modules</li>
                            </Link>
                            <Link to={'themes'}>
                                <li className=' font-semibold'>Themes</li>
                            </Link>
                            <Link to={'mobile-apps'}>
                                <Flex className={'gap-2.5'}>
                                    <li className=' font-semibold'>Mobile Apps</li>
                                    <Image src={'/images/Shape.png'} />
                                </Flex>
                            </Link>
                            <Link to={'demo'}>
                                <li className=' font-semibold'>Demo</li>
                            </Link>
                            <Link to={'resource'}>
                                <Flex className={'gap-2.5'}>
                                    <li className=' font-semibold'>Resource</li>
                                    <Image src={'/images/Shape.png'} />
                                </Flex>
                            </Link>
                            <Link to={'/'}>
                                <Flex className={'gap-2.5'}>
                                    <li className=' font-semibold'>Related Plugins</li>
                                    <Image src={'/images/Shape.png'} />
                                </Flex>
                            </Link>
                            <Link to={'/'}>
                                <li className=' font-semibold'>Pricing</li>
                            </Link>
                        </Flex>
                    </ul>
                </div>



                <Flex className="button gap-8 ">
                    <div className="font-semibold text-[16px]">Login</div>
                    <div className="font-bold text-[#FFFFFF] bg-[#7047EB] text-[14px] leading-[150%] py-4 px-[22px] rounded-2xl">Get Dokan</div>
                </Flex>






            </Flex>








        </>





    )
}

export default Header
