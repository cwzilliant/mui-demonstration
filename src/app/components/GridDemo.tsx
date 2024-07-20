import { Box, Grid } from "@mui/material";

const GridDemo = () => {
  // https://mui.com/material-ui/react-grid/

  return (
    <Grid container rowSpacing={4} columnSpacing={1}>
      {/* ROW 1 */}

      <Grid item xs={12} md={8}>
        <Box bgcolor="lightgreen">hello</Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box bgcolor="peru">hello</Box>
      </Grid>

      {/* ROW 2 */}

      <Grid item xs={12} md={4}>
        <Box bgcolor="turquoise">hello</Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box bgcolor="lightblue">hello</Box>
      </Grid>

      {/* ROW 3 */}

      <Grid item xs={12} md={1}>
        <Box bgcolor="green">hello</Box>
      </Grid>
      <Grid item xs={12} md={1}>
        <Box bgcolor="green">hello</Box>
      </Grid>
      <Grid item xs={12} md={1}>
        <Box bgcolor="green">hello</Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box bgcolor="pink">hello</Box>
      </Grid>
      <Grid item xs={12} md={1}>
        <Box bgcolor="green">hello</Box>
      </Grid>
      <Grid item xs={12} md={1}>
        <Box bgcolor="green">hello</Box>
      </Grid>
      <Grid item xs={12} md={1}>
        <Box bgcolor="green">hello</Box>
      </Grid>

      {/* ROW 4 AND 5 */}

      <Grid item xs={12} md={5}>
        <Box bgcolor="red">hello</Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box bgcolor="orange">hello</Box>
      </Grid>
    </Grid>
  );
};

export default GridDemo;
