import React from 'react'
import Image from '../Image'

const MailSctn = () => {
    return (
        <div
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/lastBg.png')" }}
        >
            {/* Top Image */}
            <div className="flex justify-center">
                <Image
                    className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20"
                    src="/images/publish.png"
                />
            </div>

            {/* Form Section */}
            <div className="w-full px-4 sm:px-6 md:px-0 md:w-[500px] lg:w-[600px] mx-auto pb-28 sm:pb-32 md:pb-36">
                <form>
                    <div className="relative w-full">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-white rounded-4xl text-[15px] sm:text-[15px] md:text-[16px] lato text-[#828282] py-3 sm:py-3.5 md:py-4 pl-6 sm:pl-6 md:pl-8 pr-24 sm:pr-28 md:pr-36 focus:outline-none shadow-lg"
                            required
                        />

                        <button
                            type="submit"
                            className="absolute right-2 sm:right-2.5 md:right-3 top-1/2 -translate-y-1/2 lato text-[13px] sm:text-[13px] md:text-[14px] bg-[#7047EB] text-white rounded-4xl py-2.5 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 shadow"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MailSctn
