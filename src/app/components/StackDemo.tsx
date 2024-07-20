import { Box, Stack } from "@mui/material";

const StackDemo = () => {
  // https://mui.com/material-ui/react-stack/

  // flexDirection="row"

  return (
    <Stack>
      <Box height="100px" width="100px" bgcolor="blue" />
      <Box height="100px" width="100px" bgcolor="green" />
      <Box height="100px" width="100px" bgcolor="purple" />
      <Box height="100px" width="100px" bgcolor="yellow" />
      <Box height="100px" width="100px" bgcolor="red" />
    </Stack>
  );
};

export default StackDemo;
