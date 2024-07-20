import { AddIcCallOutlined, Mail } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Fab,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

const ThemeDemo = () => {
  const colors: string[] = [
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
  ];
  return (
    <>
      <Stack flexDirection="row">
        {colors.map((color: any) => (
          <Stack key={color} px={2} alignItems="center">
            <Button variant="contained" color={color}>
              Button
            </Button>
            <Checkbox defaultChecked color={color} />
            <Fab color={color}>
              <AddIcCallOutlined />
            </Fab>
            <RadioGroup
              defaultValue="one"
              name="radio-buttons-group"
              color={color}
            >
              <FormControlLabel
                value="one"
                control={<Radio color={color} />}
                label="One"
                color={color}
              />
              <FormControlLabel
                value="two"
                control={<Radio color={color} />}
                label="Two"
                color={color}
              />
            </RadioGroup>
            <Slider defaultValue={90} color={color} />
            <Switch defaultChecked color={color} />
            <TextField label="Field" variant="outlined" color={color} />
            <Box py={2}>
              <Badge badgeContent={4} color={color}>
                <Mail color="action" />
              </Badge>
            </Box>
            <CircularProgress color={color} />
          </Stack>
        ))}
      </Stack>
      <Stack mt={4}>
        <Typography variant="h1">h1 text</Typography>
        <Typography variant="h2">h2 text</Typography>
        <Typography variant="h3">h3 text</Typography>
        <Typography variant="h4">h4 text</Typography>
        <Typography variant="h5">h5 text</Typography>
        <Typography variant="h6">h6 text</Typography>
        <Typography>regular text</Typography>
      </Stack>
      <Box mt={4} height="700px" width="1000px" bgcolor="lightgray">
        <Box display="flex" height={1} width={1}>
          <Box mr={1} height="100px" width="100px" bgcolor="blue" />
          <Box mr={1} height="100px" width="100px" bgcolor="green" />
          <Box mr={1} height="100px" width="100px" bgcolor="purple" />
          <Box mr={1} height="100px" width="100px" bgcolor="yellow" />
          <Box mr={1} height="100px" width="100px" bgcolor="red" />
        </Box>
      </Box>
    </>
  );
};

export default ThemeDemo;
