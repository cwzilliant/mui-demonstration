import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const FlexboxDemo = () => {
  // https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox

  return (
    <>
      {/*
        ---- parent properties ----
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"

        ---- children properties ----
        flexGrow="2"
        alignSelf="flex-end"
      */}

      <Box height="700px" width="1000px" bgcolor="lightgray">
        <Box display="flex" height={1} width={1}>
          <Box height="100px" width="100px" bgcolor="blue" />
          <Box height="100px" width="100px" bgcolor="green" />
          <Box height="100px" width="100px" bgcolor="purple" />
          <Box height="100px" width="100px" bgcolor="yellow" />
          <Box height="100px" width="100px" bgcolor="red" />
          <Box height="100px" width="100px" bgcolor="turquoise" />
          <Box height="100px" width="100px" bgcolor="pink" />
          <Box height="100px" width="100px" bgcolor="orange" />
          <Box height="100px" width="100px" bgcolor="brown" />
          <Box height="100px" width="100px" bgcolor="honeydew" />
          <Box height="100px" width="100px" bgcolor="black" />
        </Box>
      </Box>

      {/* <Box height="700px" width="1000px" bgcolor="lightgray">
        <Box display="flex">
          <Typography variant="h4">Text</Typography>
          <Box
            bgcolor="purple"
            height="100px"
            width="100px"
            borderRadius={50}
          ></Box>
          <Image src="/dance.jpg" width={200} height={200} alt="dance" />
          <Box>
            <Button variant="contained">Drop all tables</Button>
          </Box>
        </Box>
      </Box> */}

      {/* Problem */}
      {/* <Box height="700px" width="1000px" bgcolor="lightgray">
        <HelpOutlineIcon />
        <Typography variant="h6">Hello there!</Typography>
        <CloseIcon />
      </Box> */}

      {/* Solution */}
      {/* <Box height="700px" width="1000px" bgcolor="lightgray">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <HelpOutlineIcon />
            <Typography ml={1} variant="h6">
              Hello there!
            </Typography>
          </Box>
          <CloseIcon />
        </Box>
      </Box> */}
    </>
  );
};

export default FlexboxDemo;
