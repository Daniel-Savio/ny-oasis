import { motion } from "framer-motion";
import Doni from "../../public/Dnoi.jpg";

export default function home() {
  return (
    <div className="h-screen bg-gradient-to-tl from-orange-300 to-zinc-50  pt-20 px-2 ">
      <section className="">
        <div className="flex w-full justify-center text-xl ">
          <h1 className="relative font-sans font-bold align-baseline gap-1 flex">
            Ny {""}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -2 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="font-cursive font-thin text-2xl text-primary"
            >
              Oasis
            </motion.div>
            <motion.div
              className="absolute min-w-14 h-1 bg-primary -bottom-1 right-0 px-2"
              initial={{ width: 0, scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {" "}
            </motion.div>
          </h1>
        </div>
      </section>

      <section className="m-5 justify-center text-center align-middle  md:flex md:justify-around md:gap-2 ">
        <div className="p-3 mx-auto my-5 shadow-lg bg-zinc-50 rounded-md w-fit">
          <img className="rounded-md w-80" src={Doni} alt="" />
        </div>

        <div className="">
          <h1 className=" w-fit font-bold gap align-top md:text-lg">
            O que você quer com o que seu cabelo
            <motion.div
              className="min-w-14 rounded-md h-fit pb-2 border-b-solid text-primary w-full px-2 font-cursive font-thin"
              initial={{ backgroundColor: "", opacity: 0 }}
              animate={{ backgroundColor: "white", opacity: 1, y: -5 }}
              transition={{
                duration: 0.4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              precisa !
            </motion.div>
          </h1>
        </div>
      </section>
    </div>
  );
}
