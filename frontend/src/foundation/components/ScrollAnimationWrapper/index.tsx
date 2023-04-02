import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScrollAnimationWrapperProps = {
  children: ReactNode,
  optionalClass?: string
}

export default function ScrollAnimationWrapper({children, optionalClass, ...props}: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={optionalClass}
      {...props}
    >
      {children}
    </motion.div>
  )
}