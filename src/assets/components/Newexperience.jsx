import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Newexperience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start end','end end']
    })

    const scale = useTransform(
        scrollYProgress,
        [0.2 ,0.4],
        [1,0.5]
    )
    const x = useTransform(
        scrollYProgress,
        [0.4,0.55],
        ["0%", "-20%"]
    )
    const opacity1 = useTransform(
        scrollYProgress,
        [0.55, 0.65],
        [0,1]
    )
    const opacity2 = useTransform(
        scrollYProgress,
        [0.65, 0.75],
        [0,1]
    )
    const opacity3 = useTransform(
        scrollYProgress,
        [0.75, 0.85],
        [0,1]
    )
  return (
    <div>
      <section ref={ref} className=" h-[200rem]">
      <div  className=" container mx-auto py-40 pb-56 text-white sticky top-[10vh] px-4 overflow-hidden">
            <div className=" grid md:grid-cols-2 col-span-1">
                <motion.div style={{x, scale }} className=" col-span-1">
                    <div className=" font-ClashDisplay font-bold lg:text-[195px] md:text-9xl text-7xl">My</div>
                    <div className=" font-ClashDisplay font-bold lg:text-[195px] md:text-9xl text-7xl sticky">Experience</div>
                </motion.div>
                <div className="p-5 ml-8 col-span-1">
                    <motion.div style={{opacity:opacity1}} className=" px-4 pb-10 border-l-2">
                        <div className="lg:text-4xl md:text-2xl font-ClashDisplay font-medium">
                            Data Engineer
                        </div>
                        <motion.div style={{}} className=" font-ClashDisplay font-light text-sm">
                        <div>2025 Mar - 2025 May</div>
                        <div>@Tata Consultancy Services</div>
                        </motion.div>
                    </motion.div>
                    <motion.div style={{opacity:opacity2}} className=" px-4 pb-10 border-l-2">
                        <div className="lg:text-4xl md:text-2xl font-ClashDisplay font-medium ">
                          Frontend Dev Intern
                        </div>
                        <motion.div style={{}} className=" font-ClashDisplay font-light text-sm">
                          <div>2023 Sept - 2023 Nov</div>
                          <div>@AIMagix</div>
                        </motion.div>
                    </motion.div>
                    <motion.div style={{opacity:opacity3}} className=" px-4 pb-10 border-l-2">
                        <div className=" lg:text-4xl md:text-2xl font-ClashDisplay font-medium">
                        Product Dev Intern
                        </div>
                        <motion.div style={{}} className=" font-ClashDisplay font-light text-sm">
                        <div>2022 Mar - 2023 Mar</div>
                        <div>@Business Innovation Club</div>
                        </motion.div>
                    </motion.div>
                </div> 
            </div>
        </div>
      </section>
    </div>
  )
}

export default Newexperience
