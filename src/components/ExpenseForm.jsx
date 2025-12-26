import toast from "react-hot-toast";

import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = Number(amount);
    if (!title || !amount || !date || !category)
      return alert("Fill all fields.");
    if (enteredAmount <= 0) return alert("Amount cannot be zero");

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category,
    };
    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
    setCategory("");
    // Toast
    toast.success("Expense added successfully.", {
      duration: 2000,
    });
  };

  //
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Expense Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter expense name.."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount.."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Choose a category</option>
              <option value="Food">Food</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Shopping">Shopping</option>
              <option value="Utilitiess">Utilities</option>
            </select>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
