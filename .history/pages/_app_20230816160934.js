import React from "react";  // Import React library
import Head from "next/head";  // Import Next.js Head component for managing metadata

// Import Material-UI components and utilities
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import "./global.css";  // Import global CSS styles

// Define the MyApp component
export default function MyApp(props) {
  const { Component, pageProps } = props;

  // Remove server-side injected CSS when component mounts
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Create a Material-UI theme
  const muiTheme = createTheme();

  return (
    <React.Fragment>
      {/* Set title and meta tags for the page */}
      <Head>
        <title>real estate page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* Provide Material-UI theme to the app */}
      <ThemeProvider theme={muiTheme}>
        {/* CssBaseline sets a consistent baseline for styles */}
        <CssBaseline />
        {/* Render the main component with its props */}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

