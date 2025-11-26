import Flex from "../Flex";
import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F1EDFD] pt-16 sm:pt-20 lg:pt-32 pb-10 sm:pb-12 lg:pb-16">
        <Container>
          <footer>
            <div className="px-4 sm:px-6 lg:px-0">

              {/* Responsive Columns */}
              <div className="flex flex-wrap gap-10 sm:gap-12 lg:gap-0">

                {/* Column 1 */}
                <div className="w-full sm:w-[45%] lg:w-auto lg:mr-[118px]">
                  <Image className="mb-8" src="/images/LogoFooter.png" />
                  <ul>
                    {["About Us", "Testimonials", "Affiliates", "Partners", "Contact Us"].map((item) => (
                      <li key={item} className="pb-4">
                        <Link className="hover:text-[#7047EB] lato text-[18px] text-[#828282]">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="w-full sm:w-[45%] lg:w-auto lg:mr-[113px]">
                  <h4 className="poppins font-semibold text-2xl text-[#393939] mb-8">Product</h4>
                  <ul>
                    {[
                      "Features",
                      "Modules",
                      "Pricing",
                      "Dokani Theme",
                      "Compatible Theme",
                      "Compatible Plugins"
                    ].map((item) => (
                      <li key={item} className="pb-4">
                        <Link className="hover:text-[#7047EB] lato text-[18px] text-[#828282]">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="w-full sm:w-[45%] lg:w-auto lg:mr-[118px]">
                  <h4 className="poppins font-semibold text-2xl text-[#393939] mb-8">Quick Links</h4>
                  <ul>
                    {[
                      "Support Area",
                      "Support Policy",
                      "Refund Policy",
                      "Terms of Service",
                      "Coupons"
                    ].map((item) => (
                      <li key={item} className="pb-4">
                        <Link className="hover:text-[#7047EB] lato text-[18px] text-[#828282]">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="w-full sm:w-[45%] lg:w-auto">
                  <h4 className="poppins font-semibold text-2xl text-[#393939] mb-8">
                    Keep Updated
                  </h4>

                  {/* Email Input */}
                  <form>
                    <div className="relative w-full">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="lg:w-[390px] w-full bg-white rounded-4xl text-[16px] lato text-[#828282] py-4 pl-8 pr-14 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9"
                      >
                        <Image src="/images/sent.png" />
                      </button>
                    </div>
                  </form>

                  {/* Social Icons */}
                  <Flex className="gap-4 mt-6">
                    <Image src="/images/fb.png" />
                    <Image src="/images/x.png" />
                    <Image src="/images/in.png" />
                  </Flex>
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-16 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Buttons + Users */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex gap-5">
                    <div className="text-white bg-[#7047EB] text-[16px] py-3 px-8 rounded-xl lato">
                      Download
                    </div>

                    <div className="text-[#7047EB] border text-[16px] py-3 px-8 rounded-xl lato">
                      Try Demo
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="lato text-[16px] text-[#575757] border-b">
                      Join 10,000+ Users
                    </p>
                    <Image src="/images/tenJon.png" />
                  </div>
                </div>

                {/* Payment Logo */}
                <div>
                  <Image src="/images/paybal.png" />
                </div>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-[#D3D3D3] pt-6 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
                <Image src="/images/weDevs.png" />
                <div className="text-center sm:text-right">
                  <p className="lato text-[14px] text-[#575757]">
                    Copyright © 2008-2022, weDevs Pte. Ltd.
                  </p>
                  <p className="lato text-[14px] text-[#575757]">
                    weDevs® is a registered trademark of weDevs Pte. Ltd.
                  </p>
                </div>
              </div>

            </div>
          </footer>
        </Container>
      </div>
    </>
  );
};

export default Footer;
