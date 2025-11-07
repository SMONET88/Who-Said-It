import { useNavigate } from "react-router-dom";
import { quotes } from "../quotes/quotes";

import { Button, Stack, ThemeProvider, Typography } from "@mui/material";
import theme from "./ThemeColors";
import { useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const [playGame, setPlayGame] = useState(false);
  const [chosenQuote, setChosenQuote] = useState("");
  const [chosenSpeaker, setChosenSpeaker] = useState("");
  const [guess, setGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const playGameClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setPlayGame(true);
    setChosenQuote(quotes[randomIndex].quote);
    setChosenSpeaker(quotes[randomIndex].speaker);
    console.log(`should be playing game`);
  };

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsCorrect(true);
    console.log(`guess is: ${guess}`);
  }

  return (
    <>
      <div>
        {playGame && (
          <>
            <Typography variant="h1" gutterBottom>
              {chosenQuote}
            </Typography>
            <form onSubmit={handleGuess}>
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              />
              <button type="submit">Enter</button>
            </form>

          </>
        )}
      </div>
      <>
        {isCorrect ? (
          <h1>CORRECT</h1>
        ) : <h1>FALSE</h1>}

      </>

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
