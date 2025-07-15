import React from "react"
import Github from "/public/github-icon-1-logo-svgrepo-com.svg"
import Linkedin from "/public/linkedin-svgrepo-com.svg"
import Bcharity from "/public/bcharity.jpeg"
import { easeIn, motion } from "framer-motion"
import {reveal} from "./utils/animation"

function App() {
  return (
    <main className="main">
      <motion.div className="container" initial="hiddenVariant" animate="revealedVariant" transition={{staggerChildren: 0.2, delayChildren:1.3}}>
      <motion.h1 className="subtext" initial={{y:50, opacity:0}} animate={{y:0,opacity:1}} transition={{ease:easeIn,type: "spring"}}>Hey! Thanks for checking out my website!</motion.h1>
      <motion.h2 className="subtext2" initial={{y:50, opacity:0}} animate={{y:0,opacity:1}} transition={{ease:easeIn,type: "spring"}}>I'm Justin, a computer science student at the University of Waterloo! I love creating <u>sites and apps</u> and learning new things! I also enjoy badminton🏸, ping pong🏓, and piano🎹.</motion.h2>
        <div className="icons">
        <motion.a href="https://github.com/JustinTan-1" target="_blank" whileHover={{scale:1.05}} variants={reveal}><img src={Github} className="icon" /></motion.a>
        <motion.a href="https://www.linkedin.com/in/justintan217/" target="_blank" whileHover={{scale:1.05}} variants={reveal}><img src={Linkedin} className="icon" /></motion.a>
        </div>
      </motion.div>

      <div id="experience--section">
      <motion.div className="experience" id="experience" initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.2, duration:1, ease:easeIn,type: "spring"}}><h1 className="subtext">Experience</h1></motion.div>
      <div className="experience--container">
      <motion.img className="experience--icon" src={Bcharity} initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.5, duration:1, ease:easeIn,type: "spring"}}/>
      <motion.div initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.5, duration:1, ease:easeIn,type: "spring"}}>
      <motion.h1 className="experience--title">B-Charity</motion.h1>
      <motion.h2 className="experience--title">Software Developer Intern</motion.h2>
      <motion.p className="experience--description">2022</motion.p>
      </motion.div>
      </div>
      </div>

    <section id="skills">
      <motion.h1 initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.2, duration:1, ease:easeIn,type: "spring"}}>Technology</motion.h1>
      <motion.div initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.5, duration:1, ease:easeIn,type: "spring"}} className="skills-grid">
        <div className="skill-item">
          <img src="React.png" alt="React" />
        </div>
        <div className="skill-item">
          <img src="/JavaScript.png" alt="JavaScript" />
        </div>
        <div className="skill-item">
          <img src="/Node.png" alt="Node.js" />
        </div>
        <div className="skill-item">
          <img src="/Python.png" alt="Python" />
        </div>
        <div className="skill-item">
          <img src="/Docker.png" alt="Docker" />
        </div>
        <div className="skill-item">
          <img src="/Java.png" alt="Java" />
        </div>
        <div className="skill-item">
          <img src="/PostgresSQL.png" alt="Postgres " />
        </div>
        <div className="skill-item">
          <img src="/Flask.png" alt="Flask" />
        </div>
        <div className="skill-item">
          <img src="/PyTorch.png" alt="PyTorch" />
        </div>
        <div className="skill-item">
          <img src="/Git.png" alt="Git" />
        </div>
        <div className="skill-item">
          <img src="/HTML5.png" alt="HTML" />
        </div>
        <div className="skill-item">
          <img src="/CSS3.png" alt="CSS" />
        </div>
        <div className="skill-item">
          <img src="/scikit-learn.png" alt="sci-kit learn" />
        </div>
        <div className="skill-item">
          <img src="/OpenCV.png" alt="OpenCV" />
        </div>
      </motion.div>
    </section>

  <section id="projects">
    <motion.h1 initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.2, duration:1, ease:easeIn,type: "spring"}}>Projects</motion.h1>
    <motion.div initial={{opacity: 0, y:50}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.5, duration:1, ease:easeIn,type: "spring"}} class="projects-grid">
      <div class="project-card">
        <h3>Math Recognition <a href="https://github.com/JustinTan-1/math-recognition" target="_blank"><img src="/GitHub.png" className="github--redirect"></img></a></h3>
        <p>Chrome extension that allows users to draw math symbols and copy their desired symbol. </p>
      </div>
      <div class="project-card">
          <h3>DiscordX <a href="https://github.com/JustinTan-1/discordXAPI" target="_blank"><img src="/GitHub.png" className="github--redirect"></img></a></h3>
        <p>Discord mass message management. Connects to your discord account and allows you to monitor channels and reply to messages easily with Google Gemini API.</p>
      </div>
    </motion.div>
  </section>
  </main> 
  )
}

export default App
