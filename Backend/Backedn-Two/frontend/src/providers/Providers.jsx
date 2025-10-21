import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {children}
          <Toaster />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
