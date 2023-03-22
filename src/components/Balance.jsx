import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <div className="container">
        <h4>Your Balance</h4>
        <h1>${total}</h1>
      </div>
    </>
  );
};
export default Balance;
