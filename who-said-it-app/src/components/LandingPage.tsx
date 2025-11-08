import { Box } from "@mui/material";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <Box>
      <h1>Who Said It?</h1>

      <motion.button
        style={ball}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        onClick={handleClick}
      />

      <p>Welcome to the most iconic things said by the members of vive</p>
    </Box>
  );
};

const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#dd00ee",
  borderRadius: "50%",
};

export default LandingPage;
