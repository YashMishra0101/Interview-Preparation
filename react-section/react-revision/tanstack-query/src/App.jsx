import { TanStackDataFetch } from "./components/index";
import Providers from "./providers/Providers";
function App() {
  return (
    <>
      <Providers>
        <TanStackDataFetch />
      </Providers>
    </>
  );
}

export default App;
