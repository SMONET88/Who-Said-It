import "../App.css";
import {
  Box, List,
  ListItem,
  ListItemText,
  Stack,
  Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ResultsType = {
  quote: string;
};

const ListPage = () => {
  const [showQuotes, setShowQuotes] = useState(false);
  const [quoteList, setQuoteList] = useState<ResultsType[]>([]);
  const [speakerChosen, setSpeaker] = useState("");

  const navigate = useNavigate();

  const Names = [
    "Sheedy",
    "Ang",
    "Bridgette",
    "Lauren",
    "Phia",
    "Sam",
    "Charlie",
    "Ava",
    "Unknown",
  ];

  const onClick = async (speaker: string) => {
    const results: ResultsType[] = await fetch(
      `http://localhost:3000/quotes/${speaker}`,
    ).then((resp) => resp.json());
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
            justifyContent: "center",
            alignItems: "flex-start",
            pl: 2,
            flex: 1,
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
              alignItems: "center",
              flex: 6,
              overflowY: "auto",
              minHeight: 0,
            }}
          >
            <Typography
              sx={{
                position: "sticky",
                top: 0,
                padding: 2,
                zIndex: 1,
                width: "100%",
                textAlign: "center",
              }}
              variant="h6"
              component="div"
            >
              {speakerChosen}'s Quotes
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              {quoteList.map((quote, index) => (
                <ListItem
                  sx={{
                    justifyContent: "center",
                  }}
                  key={index}
                >
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary={quote.quote}
                  />
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
