import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  // queryCache: new QueryCache({
  //   onError: (error) => toast.error(`Something went wrong: ${error.message}`)
  // }),
  // mutationCache: new MutationCache({
  //   onError: (error) => toast.error(`Something went wrong: ${error.message}`)
  // }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false
    }
  }
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
