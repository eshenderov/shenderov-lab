import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Shenderov Lab</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
