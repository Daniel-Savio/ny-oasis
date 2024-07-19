import { motion } from "framer-motion";

export default function home() {
  return (
    <div>
      <section className="bg-gradient-to-tl from-orange-300 to-zinc-50  pt-20 px-2 h-screen">
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

        <div className="m-5">
          <h1>Next Section</h1>
        </div>
      </section>
    </div>
  );
}
