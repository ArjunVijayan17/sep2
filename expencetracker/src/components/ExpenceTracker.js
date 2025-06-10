import React, { useState } from 'react';
import "./ExpenceTracker.css"
function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  

  const addExpense = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    };

    setExpenses([...expenses, newExpense]);
    setTitle('');
    setAmount('');
  };
   const deleteExpense = (id) => {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(filteredExpenses);
  };

  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>

      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: '5px', width: '100%' }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}/>
        <button type="submit" style={{ margin: '5px' }}>Add Expense</button>
      </form>

      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.title}: {expense.amount.toFixed(2)}
             <button
              onClick={() => deleteExpense(expense.id)}
              
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="total">Total: {total.toFixed(2)}</h3>
    </div>
  );
}

export default ExpenseTracker;
