import React from "react";
import { motion, scale } from "motion/react";
import team1 from "../../assets/Team/team1.jpg"
import team2 from "../../assets/Team/team2.jpg"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{y:[100,150,100]}}
            transition={{duration:4, repeat:Infinity }}
            src={team1}
            className="max-w-sm rounded-lg border-s-8 border-b-8 border-blue-700 shadow-2xl rounded-t-4xl rounded-br-4xl"
          />
          <motion.img
            animate={{x:[100,150,100]}}
            transition={{duration:6, delay:2, repeat:Infinity }}
            src={team2}
            className="max-w-sm rounded-lg border-s-8 border-b-8 border-blue-700 shadow-2xl rounded-t-4xl rounded-br-4xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{
              scale: 1,
              transition: { duration: 2 },
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33f3ff", "#2b28ee"],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For You !
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
