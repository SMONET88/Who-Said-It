import { quotes } from "../quotes/quotes";
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
import { cloneElement, useState } from "react";

const ListPage = () => {
  const uniqueSpeaker: string[] = [];
  const [showQuotes, setShowQuotes] = useState(false);
  const [quoteList, setQuoteList] = useState<string[]>([]);
  const [dense, setDense] = useState(false);
  const [speakerChosen, setSpeaker] = useState('');

  quotes.forEach((s) => {
    if (!uniqueSpeaker.includes(s.speaker) && !s.speaker.includes("and")) {
      uniqueSpeaker.push(s.speaker);
    }
  });

  const onClick = (speaker: string) => {
    setSpeaker(speaker);
    const items: string[] = [];
    quotes.forEach((quote) => {
      if (quote.speaker === speaker) {
        items.push(quote.quote);
      }
    });

    setQuoteList(items);
    console.log(items);
    setShowQuotes(true);
  };

  function generate(element: React.ReactElement<unknown>) {
    const numArr: number[] = [];
    for (let i = 0; i < quoteList.length; i++) {
      numArr.push(i);
    }

    return numArr.map((value) =>
      cloneElement(element, {
        key: value,
      }),
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",   // two columns
          height: "100vh",        // full viewport height
        }}
      >
        {/* Left column: speakers */}
        <Stack
          spacing={2}
          direction="column"
          sx={{
            justifyContent: "center",   // vertical center
            alignItems: "flex-start",   // left align
            pl: 2,
            flex: 1,                    // take up some width
          }}
        >
          {uniqueSpeaker.map((speaker, index) => (
            <Button
              variant="contained"
              color="primary"
              key={index}
              onClick={() => onClick(speaker)}
            >
              {speaker}
            </Button>
          ))}
        </Stack>
    
        {/* Right column: quotes */}
        {showQuotes && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // vertical center
              alignItems: "center",     // horizontal center
              flex: 6,                  // take up more width
            }}
          >
            <Typography sx={{ mb: 2 }} variant="h6" component="div">
              {speakerChosen}'s Quotes
            </Typography>
    
            <List dense={dense}>
              {quoteList.map((quote, index) => (
                <ListItem key={index}>
                  <ListItemText primary={quote} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </>

  )
}

export default ListPage;
