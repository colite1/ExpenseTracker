import "./styles.css";
import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
export default function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}
