import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'

const Banner = () => {
  return (
 <Container>
  <Flex className="flex-col lg:flex-row items-center justify-between pt-10 sm:pt-16 lg:pt-22 pb-10 sm:pb-16 lg:pb-36 gap-6 lg:gap-0">
    {/* Text Section */}
    <div className="text w-full lg:w-[624px]">
      <p className="text-[16px] sm:text-[18px] font-semibold leading-[130%] text-[#2947BF] poppins">
        Senior Editor
      </p>

      <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold leading-[120%] text-[#0C2D57] poppins my-4 sm:my-5">
        Abu Darda Ishaq
      </h2>

      <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[150%] text-[#575757] lato">
        Abu Darda Ishaq is weDevs’s Senior Editor. Previously, he was the Managing Editor
        of content marketing for Barnes & Noble, where he also founded The Barnes & Noble
        Sci-Fi & Fantasy Blog and published a novelette by the Malaysian fantasy author Zen
        Cho that won a Hugo Award in 2019. At the start of his career, Joel won awards of
        his own from the Illinois Press Association for his work as a local journalist. He
        currently lives in Brooklyn, NY.
      </p>
    </div>

    {/* Image Section */}
    <div className="photo w-full lg:w-auto flex justify-center lg:justify-end pt-6 lg:pt-0">
      <Image className="max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-full h-auto" src="/images/man.png" />
    </div>
  </Flex>
</Container>




  )
}

export default Banner
