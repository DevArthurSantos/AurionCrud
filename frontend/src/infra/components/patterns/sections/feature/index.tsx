import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@infra/utils/getScrollAnimation";
import ScrollAnimationWrapper from "@/foundation/components/ScrollAnimationWrapper";

const features = [
  "Tutorials.",
  "Projects personal.",
  "Application testing.",
  "Minimum Viable Products.",
  "Rapid prototyping.",
  "Proof-of-concept apps.",
  "Small production applications."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-28 mb-28 sm:mt-28 sm:mb-28 py-0 sm:py-28 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 place-items-center gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper optionalClass="flex w-full items-center justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <img
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2 text-black-500">
              You can explore the features that we provide with fun and have their
              own functions each feature.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;