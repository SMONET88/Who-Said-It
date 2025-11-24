import "../App.css";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ResultsType = {
  quote: string
}

const ListPage = () => {
  const [showQuotes, setShowQuotes] = useState(false);
  const [quoteList, setQuoteList] = useState<ResultsType[]>([]);
  const [speakerChosen, setSpeaker] = useState("");

  const navigate = useNavigate();
  
  const Names = ['Sheedy', 'Ang', 'Bridgette', 'Lauren', 'Phia', 'Sam', 'Charlie', 'Ava', 'Unknown']

  const onClick = async (speaker: string) => {
    const results: ResultsType[] = await fetch(`http://localhost:3000/quotes/${speaker}`).then(resp => resp.json());
    setSpeaker(speaker);
    setQuoteList(results);
    setShowQuotes(true);
  };
  


  const handleClick = () => {
    navigate("/main");
  };
  
  

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // two columns
          height: "100vh", // full viewport height
        }}
      >
        {/* Left column: speakers */}
        <Stack
          spacing={2}
          direction="column"
          sx={{
            justifyContent: "center", // vertical center
            alignItems: "flex-start", // left align
            pl: 2,
            flex: 1, // take up some width
          }}
        >
          {Names.map((speaker, index) => (
            <Button
              variant="contained"
              color="primary"
              key={index}
              onClick={() => onClick(speaker)}
            >
              {speaker}
            </Button>
          ))}

          <Button onClick={handleClick}>Back</Button>
        </Stack>

        {/* Right column: quotes */}
        {showQuotes && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // vertical center
              alignItems: "center", // horizontal center
              flex: 6, // take up more width
            }}
          >
            <Typography sx={{ mb: 2 }} variant="h6" component="div">
              {speakerChosen}'s Quotes
            </Typography>

            <List>
              {quoteList.map((quote, index) => (
                <ListItem key={index}>
                  <ListItemText primary={quote.quote} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ListPage;
