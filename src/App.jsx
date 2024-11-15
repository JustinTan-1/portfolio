import React from "react"
import Justin from "./assets/Cropped_Image.png"
import Github from "./assets/github-icon-1-logo-svgrepo-com.svg"
import Linkedin from "./assets/linkedin-svgrepo-com.svg"
import Bcharity from "./assets/bcharity.jpeg"
import { easeIn, motion } from "framer-motion"
import {reveal} from "./utils/animation"

function App() {

  function onScrollClick() {
    document.getElementById("experience").scrollIntoView();
  }
  return (
    <main className="main">
      <motion.div className="container" initial="hiddenVariant" animate="revealedVariant" transition={{staggerChildren: 0.2, delayChildren:1.3}}>
      <motion.img src={Justin} className="headshot"initial={{opacity:0}} animate={{opacity :1}} transition={{duration: 1}}/>
      <motion.h1 className="subtext" initial={{y:50, opacity:0}} animate={{y:0,opacity:1}} transition={{ease:easeIn,type: "spring"}}>Hey! I'm Justin, a computer science student at the University of Calgary!</motion.h1>
        <div className="icons">
        <motion.a href="https://github.com/JustinTan-1" target="_blank" whileHover={{scale:1.05}} variants={reveal}><img src={Github} className="icon" /></motion.a>
        <motion.a href="https://www.linkedin.com/in/justintan217/" target="_blank" whileHover={{scale:1.05}} variants={reveal}><img src={Linkedin} className="icon" /></motion.a>
        </div>
        <motion.div className="links" href="#experience" whileHover={{scale:1.05}} variants={reveal} onClick={onScrollClick}>Experience</motion.div>
      </motion.div>
      <motion.div className="experience" id="experience" initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true, margin: "-200px"}} transition={{delay:0.2, duration:1, ease:easeIn,type: "spring"}}><h1 className="subtext">Experience</h1></motion.div>
      <div className="experience--container">
      <motion.img className="experience--icon" src={Bcharity} initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true, margin: "-200px"}} transition={{delay:0.5, duration:1, ease:easeIn,type: "spring"}}/>
      <motion.div initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true, margin: "-200px"}} transition={{delay:0.5, duration:1, ease:easeIn,type: "spring"}}>
      <motion.h1 className="experience--title">B-Charity</motion.h1>
      <motion.h2 className="experience--title">Software Developer Intern</motion.h2>
      <motion.p className="experience--description">2022</motion.p>
      </motion.div>
      </div>
    </main>
  )
}

export default App
