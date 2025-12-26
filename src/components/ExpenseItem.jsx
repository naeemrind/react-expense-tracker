const ExpenseItem = ({ item, onDelete }) => {
  return (
    <>
      <div className="expense-data-row">
        <span>
          <p className="header-for-mobile">Name</p> {item.title}
        </span>
        <span>
          <p className="header-for-mobile">Amount</p> Rs. {item.amount}
        </span>
        <span>
          <p className="header-for-mobile">Date</p> {item.date}
        </span>
        <span>
          <p className="header-for-mobile">Category</p> {item.category}
        </span>
        <span>
          <p className="header-for-mobile">Action</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </span>
      </div>
    </>
  );
};

export default ExpenseItem;
