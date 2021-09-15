import { motion } from "framer-motion"
import { useHistory } from "react-router"

const MVPage = () => {
  const history = useHistory();
  return (
    <motion.div className="MVPage" initial={{x: "100vw"}} animate={{x: 0}} exit={{x: "-100vw"}} transition={{duration: .5}}>
      <h1>MV Page</h1>
      <button onClick={() => history.push('/')}>back</button>
    </motion.div>
  )
}

export default MVPage