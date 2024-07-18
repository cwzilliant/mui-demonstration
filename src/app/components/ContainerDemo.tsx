import Container from "@mui/material/Container";

const ContainerDemo = () => {
  // https://mui.com/material-ui/react-container/

  return (
    <>
      <Container sx={{ bgcolor: "lightcoral", my: 2 }}>
        This text is in a container
      </Container>

      <Container disableGutters sx={{ bgcolor: "lightcoral", my: 2 }}>
        This text is in a container. Gutters are disabled.
      </Container>
    </>
  );
};

export default ContainerDemo;
