import { motion } from "framer-motion";

export default function Slide({
  children,
  delay = 0,
  classNmae = "",
}: {
  children: React.ReactNode;
  delay?: number;
  classNmae?: string;
}) {
  return (
    <motion.div
      className={classNmae}
      initial={{ opacity: 0, y: "50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        type: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}
