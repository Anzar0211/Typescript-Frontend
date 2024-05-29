import HText from "@/shared/HText"
import { BenefitType,SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import {
    HomeModernIcon,UserGroupIcon,AcademicCapIcon
} from '@heroicons/react/24/solid'
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:0.2}
    }
}

const benefits:Array<BenefitType>=[
    {
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of the Art Facilities",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero vitae libero"
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"100's of diverse classes",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero vitae libero"
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro trainers",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod libero vitae libero"
    }
]
type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}
const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADERS */}
            <motion.div className="md:w-3/5 md:my-5" initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}> 
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt et unde adipisci voluptatibus autem ratione deserunt consequuntur nam! Labore quibusdam nulla blanditiis eum veniam deserunt praesentium dignissimos accusamus? Architecto.</p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div className="md:flex items-center justify-between gap-6 mt-5"
            initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}}
            variants={container}
            >
                {benefits.map((benefit:BenefitType)=>(
                    <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 md:flex md:mt-28 items-center justify-between gap-20">
                {/* GRAPHIC */}
                <img src={BenefitsPageGraphic} alt="" className="mx-auto"/>

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} 
                            transition={{duration:0.5}} variants={{
                            hidden:{opacity:0,x:50},
                            visible:{opacity:1,x:0}
                            }}>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}<span className="text-primary-500">FIT</span></HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* DESCRIPTION */}
                    <motion.div 
                    initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{delay:0.2,duration:0.5}} variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                    }}
                    >
                        <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum mollitia deserunt illo quidem. Molestias dignissimos animi magni incidunt et reiciendis iusto, minus iure explicabo laborum sapiente beatae dolorum in quibusdam.</p>
                        <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt at magnam autem doloribus dolor, velit ipsa consectetur deleniti accusamus beatae atque, aliquam eius quibusdam? Eveniet quo inventore odio hic porro!</p>
                    </motion.div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:content-sparkles before:right-40 before:z-[-1] before:bottom-30">
                            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}
export default Benefits