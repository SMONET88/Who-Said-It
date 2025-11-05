import { useNavigate } from "react-router-dom";
import { quotes } from "../quotes/quotes";

import { Button, Stack, ThemeProvider, Typography } from "@mui/material";
import theme from "./ThemeColors";
import { useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [playGame, setPlayGame] = useState(false);
  const [chosenQuote, setChosenQuote] = useState("");

  const handleClick = () => {
    navigate("/");
  };

  const playGameClick = () => {
    setPlayGame(true);
    setChosenQuote(quotes[randomIndex].quote);
    console.log(`should be playing game`);
  };

  return (
    <>
      <div>
        {playGame && (
          <Typography variant="h1" gutterBottom>
            {chosenQuote}
          </Typography>
        )}
      </div>

      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2}>
          <Button color="primary" onClick={playGameClick}>
            Play Game
          </Button>
          <Button color="secondary" onClick={handleClick}>
            Back
          </Button>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default MainPage;
