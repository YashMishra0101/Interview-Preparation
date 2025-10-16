import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataFetching from "./DataFetchingTanStack";
import AddData from "./AddData";
import Header from "./component/header";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <AddData />
        <DataFetching />
      </QueryClientProvider>
    </>
  );
}

export default App;
