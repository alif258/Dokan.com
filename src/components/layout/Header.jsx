import { useState } from "react";
import Flex from '../Flex';
import { Link } from 'react-router-dom';
import Image from '../Image';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex className=" max-w-[1400px] mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-0 justify-between items-center">

        {/* Background ellipse */}
        <div className="absolute top-0 left-0 -z-10">
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
          <ul className="poppins flex gap-6 text-[16px] leading-[120%] text-[#25252D]">
            {[
              { name: "Features", sub: true },
              { name: "Modules", sub: false },
              { name: "Themes", sub: false },
              { name: "Mobile Apps", sub: true },
              { name: "Demo", sub: false },
              { name: "Resource", sub: true },
              { name: "Related Plugins", sub: true },
              { name: "Pricing", sub: false }
            ].map((item) => (
              <Link key={item.name} to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Flex className="gap-2.5 items-center">
                  <li className="font-semibold hover:text-[#7047EB]">{item.name}</li>
                  {item.sub && <Image src='/images/Shape.png' />}
                </Flex>
              </Link>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <Flex className="hidden lg:flex gap-6 items-center">
          <div className="font-semibold text-[16px] cursor-pointer">Login</div>
          <div className="font-bold text-white bg-[#7047EB] text-[14px] py-3 px-6 rounded-2xl cursor-pointer">
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
        <div className="lg:hidden bg-gray-100 px-6 py-5 space-y-4 text-[16px] font-medium">
          {[
            "Features",
            "Modules",
            "Themes",
            "Mobile Apps",
            "Demo",
            "Resource",
            "Related Plugins",
            "Pricing"
          ].map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
              <p className="hover:text-[#7047EB]">{item}</p>
            </Link>
          ))}

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
