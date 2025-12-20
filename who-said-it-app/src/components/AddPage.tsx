import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const AddPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/main");
  };
  
  // const onSubmitClick = async () => {
   
  // };
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // vertical center
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <form style={{ display: "flex", gap: "12px" }}>
          <TextField
            variant="outlined"
            sx={{ width: 250, input: { color: "white" } }}
          />
          <Button type="submit" variant="contained">
            Submit New Quote
          </Button>
        </form>

        <Button onClick={handleClick}>Back</Button>
      </Box>
    </>
  );
};

export default AddPage;
