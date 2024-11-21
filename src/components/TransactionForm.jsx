import React, { useState } from 'react';

export default function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description || !amount) return;
    
    onAdd({
      id: Date.now(),
      description,
      amount: +amount
    });

    setDescription('');
    setAmount('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (negative for expense)"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
