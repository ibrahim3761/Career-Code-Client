import React, { Suspense } from "react";
import Banner from "./Banner";
import { Briefcase, Code, BarChart3, Rocket } from "lucide-react";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:3000/jobs").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <Banner></Banner>
      </div>

      <div  className="bg-white w-full px-4 md:px-10">
        <Suspense fallback={'Loading'}>
            <HotJobs jobsPromise={jobsPromise}></HotJobs>
        </Suspense>
      </div>
      <div className="container mx-auto px-4">
        {/* Top Categories Section */}
        <section className="my-14">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Top Job Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Tech", icon: <Code size={32} /> },
              { name: "Business", icon: <Briefcase size={32} /> },
              { name: "Marketing", icon: <BarChart3 size={32} /> },
              { name: "Startups", icon: <Rocket size={32} /> },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-md hover:shadow-xl"
              >
                {cat.icon}
                <p className="mt-2 font-semibold text-lg">{cat.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Career Paths Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Explore Career Paths
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Become a Full-Stack Developer",
                desc: "Master frontend and backend tech with job-ready skills.",
                color: "from-indigo-400 to-indigo-600",
              },
              {
                title: "Climb the Corporate Ladder",
                desc: "Sharpen your leadership and communication in business roles.",
                color: "from-pink-400 to-pink-600",
              },
              {
                title: "Thrive in Creative Marketing",
                desc: "Build brands, run campaigns, and own digital spaces.",
                color: "from-green-400 to-green-600",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl text-white shadow-lg bg-gradient-to-br ${card.color} transform hover:scale-105 transition-transform duration-300`}
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
