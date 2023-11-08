import { Dashboard } from "./pages/Dashboard";
import GlobalStyle from "./styles/global";
import { IntlProvider } from "./hooks/intl";
function App() {
  return (
    <IntlProvider>
      <GlobalStyle />
      <Dashboard />
    </IntlProvider>
  );
}

export default App;
