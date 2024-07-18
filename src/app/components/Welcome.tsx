"use client";

import { Box, styled } from "@mui/material";
import Image from "next/image";

const Welcome = () => {
  type SpinningImageCustomProps = {
    clockwise: boolean;
  };

  const SpinningImage = styled(Box, {
    shouldForwardProp: (prop) => prop !== "clockwise",
  })<SpinningImageCustomProps>(({ clockwise }) => ({
    ...(clockwise && {
      animation: "spin 6s linear infinite",
      "@keyframes spin": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    }),

    ...(!clockwise && {
      animation: "spin 6s linear infinite",
      "@keyframes spin": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(-360deg)",
        },
      },
    }),
  }));

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          src="/welcomeToTheDemonstration.png"
          alt="welcomeToTheDemonstration"
          height={200}
          width={1000}
        />
        <SpinningImage clockwise={true}>
          <Image src="/welcome.png" alt="welcome" height={500} width={500} />
        </SpinningImage>
      </Box>
    </>
  );
};

export default Welcome;
