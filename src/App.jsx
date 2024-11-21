import React, { useState, useEffect } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Budget Tracker</h1>
      </div>
      <Balance transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <TransactionList 
        transactions={transactions} 
        onDelete={deleteTransaction} 
      />
    </div>
  );
}
