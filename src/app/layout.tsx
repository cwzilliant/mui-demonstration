"use client";

import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
};

export default RootLayout;
