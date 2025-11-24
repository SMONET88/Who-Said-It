import { useNavigate } from "react-router-dom";
import { quotes } from "../quotes/quotes";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
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
  
  const handleAddQuoteClick = () => {
    navigate("/add");
  }

  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertical center
        alignItems: "center",
        paddingTop: 50,
      }}>
        {playGame && (
          <>
            <Typography variant="h1" gutterBottom>
              {chosenQuote}
            </Typography>
            <form onSubmit={handleGuess} style={{ display: 'flex', gap: '12px' }}>
              <TextField
                variant="outlined"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                sx={{ width: 250, input: { color: 'white' }, }} 
              />
              <Button type="submit" variant="contained">Enter</Button>
            </form>

            {isCorrect && (
              <div>
                <h1>✅</h1>
                <Button onClick={playGameClick}>New Quote</Button>
              </div>
            )}

          </>
        )}


        <Stack direction="row" spacing={4}>
          <Button onClick={playGameClick}>
            Play Game
          </Button>
          <Button onClick={handleClick}>
            Back
          </Button>
          <Button onClick={handleListClick}>
            Show List
          </Button>
          <Button onClick={handleAddQuoteClick}>
            Add Quote
          </Button>
        </Stack>
      </Box>

    </>
  );
};

export default MainPage;
