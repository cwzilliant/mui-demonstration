import Box from "@mui/material/Box";

const BoxDemo = () => {
  // https://mui.com/material-ui/react-box/

  return (
    <>
      {/* sx prop */}
      <Box
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
        p={2}
        border="1px dashed grey"
        bgcolor="lightcoral"
        borderRadius={50}
      >
        Not using sx prop
      </Box>

      {/* spacing */}
      {/* https://mui.com/system/spacing/ */}
      <Box my={2} bgcolor="lightgreen" p={2}>
        ✅ Using MUI spacing units
      </Box>

      <Box my={2} bgcolor="lightgreen" p="2px">
        Using pixels
      </Box>

      <Box my={2} bgcolor="lightgreen" p="5%">
        Using percentage
      </Box>

      {/* component prop */}
      <Box component="section" my={2} bgcolor="lightblue" p={2}>
        HTML section element
      </Box>

      <Box component="code" my={2} bgcolor="lightblue" p={2}>
        HTML code element
      </Box>

      <Box component="form" my={2} bgcolor="lightblue" p={2}>
        HTML form element
      </Box>

      <Box component="span" my={2} bgcolor="lightblue" p={2}>
        HTML span element
      </Box>
    </>
  );
};

export default BoxDemo;
