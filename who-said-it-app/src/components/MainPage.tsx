import { useNavigate } from "react-router-dom";
import { quotes } from "../quotes/quotes";
import { Button, Stack, ThemeProvider, Typography } from "@mui/material";
//import theme from "./ThemeColors";
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
    setIsCorrect(false);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setChosenQuote(quotes[randomIndex].quote);
    setChosenSpeaker(quotes[randomIndex].speaker);
    setPlayGame(true);
  };

  console.log(`speaker: ${chosenSpeaker}`);

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (guess.toLowerCase() === chosenSpeaker.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }

  const handleListClick = () => {
    navigate("/list");
  }

  return (
    <>
      <div className='main-page'>
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
            {isCorrect && (
              <div>
                <h1>✅</h1>
                <button onClick={playGameClick}>New Quote</button>
              </div>
            )}

          </>
        )}


        <Stack direction="row" spacing={2}>
          <Button onClick={playGameClick}>
            Play Game
          </Button>
          <Button onClick={handleClick}>
            Back
          </Button>
          <Button onClick={handleListClick}>
            Show List
          </Button>
        </Stack>
      </div>

    </>
  );
};

export default MainPage;
