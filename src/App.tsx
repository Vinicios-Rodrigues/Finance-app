import { Dashboard } from "./components/Dashboard/Dashboard";
import { ExtractTable } from "./components/ExtractTable/ExtractTable";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <ExtractTable />
    </>
  );
}

export default App;
