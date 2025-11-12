import { quotes } from "../quotes/quotes";
import "../App.css";
import { Stack } from "@mui/material";
import Button  from "@mui/material/Button";

const ListPage = () => {
  const uniqueSpeaker: string[] = [];

  quotes.forEach((s) => {
    if (!uniqueSpeaker.includes(s.speaker) && !s.speaker.includes("and")) {
      uniqueSpeaker.push(s.speaker);
    }
  });

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "flex-start", 
    //     height: "100vh", 
    //     pl: 2, 
    //     gap: 5,
    //   }}
    // >
      <Stack spacing={2} direction="column" sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          pl: 2, 
       }} >
      {uniqueSpeaker.map((speaker, index) => (
        <Button variant='contained' color='error' key={index}>{speaker}</Button>
      ))}

      </Stack>
   // </Box>
  );
};

export default ListPage;
