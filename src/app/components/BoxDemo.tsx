import Box from "@mui/material/Box";

const BoxDemo = () => {
  // https://mui.com/material-ui/react-box/

  return (
    <>
      {/* sx prop */}
      <Box
        component="section"
        sx={{
          padding: 2,
          border: "1px dashed grey",
          bgcolor: "lightcoral",
          borderRadius: 50,
        }}
      >
        Using sx prop
      </Box>

      <Box
        my={2}
        component="section"
        p={2}
        border="1px dashed grey"
        bgcolor="lightcoral"
        borderRadius={50}
      >
        Not using sx prop
      </Box>

      {/* spacing */}
      {/* https://mui.com/system/spacing/ */}
      <Box my={2} bgcolor="lightgreen" p="2px">
        Using pixels
      </Box>

      <Box my={2} bgcolor="lightgreen" p={2}>
        Using MUI spacing units
      </Box>
    </>
  );
};

export default BoxDemo;
