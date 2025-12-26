import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) {
    return (
      <div className="no-expenses">
        <p>No Expenses</p>
      </div>
    );
  }

  //
  return (
    <>
      <div className="expense-header-row">
        <span>Name</span>
        <span>Amount</span>
        <span>Date</span>
        <span>Category</span>
        <span>Action</span>
      </div>
      {expenses.map((item) => (
        <div key={item.id} className="expense-list">
          <ExpenseItem item={item} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
};

export default ExpenseList;
