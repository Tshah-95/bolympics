import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";



export default function Dashboard() {
  const cards = [ "hello", "blop", "asdfasdf", "12joisdkfjkj" ].map((key) => {
    console.log(key);
    return (
      <div key={ key } className={ `relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md animate-[scale-in-fade_1s_ease-in-out_forwards]` } />
    );
  });
  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={ { once: true } }
        variants={ {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        } }
      >
        <motion.h1
          className="bg-gradient-to-br from-orange-400 via-red-500 to-stone-500 bg-clip-text text-center font-display text-4xl font-bold text-transparent drop-shadow-sm 2xs:text-5xl sm:text-6xl md:text-7xl md:leading-[5rem]"
          variants={ FADE_DOWN_ANIMATION_VARIANTS }
        >
          <Balancer>beer olympics. simplified.</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={ FADE_DOWN_ANIMATION_VARIANTS }
        >
          <Balancer>
            { "Beer olympics shouldn't take weeks of coordination. Let us simplify the process" }
          </Balancer>
        </motion.p>
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */ }
      <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        { cards }
      </div>
    </Layout>
  );
}
