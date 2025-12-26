import toast, { Toaster } from "react-hot-toast";

import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((item) => item.id !== id));
    // Toast
    toast.success("Expense deleted.", {
      duration: 2000,
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#228abf",
      },
      iconTheme: {
        primary: "#228abf",
        secondary: "#ffffff",
      },
    });
    //Toast end
  };

  const deleteAllExpenses = () => {
    if (window.confirm("Are you sure you want to delete all expenses?")) {
      setExpenses([]);
      // Toast
      toast.success("All expenses deleted.", {
        duration: 2000,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#228abf",
        },
        iconTheme: {
          primary: "#228abf",
          secondary: "#ffffff",
        },
      });
    }
  };

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

  //
  return (
    <>
      <Toaster />
      <h1 className="main-title">Expense Management System</h1>
      {expenses.length > 0 && (
        <button className="delete-all-btn" onClick={deleteAllExpenses}>
          Delete All
        </button>
      )}

      <ExpenseForm onAddExpense={addExpense} />
      <div className="total-expenses">
        <h1>
          Total Expenses:&nbsp;&nbsp;&nbsp;&nbsp;Rs. {totalExpenses.toFixed(2)}
        </h1>
      </div>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </>
  );
};

export default App;
