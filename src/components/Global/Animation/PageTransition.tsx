import { motion } from "framer-motion";

type ChildrenProps = {
    children: React.ReactNode;
}

const PageTransition = ( {children} : ChildrenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    > 
        {children}
    </motion.div>
  );
};

export default PageTransition;
