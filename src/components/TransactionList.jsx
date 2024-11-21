import React from 'react';

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="transactions">
      <h3>Transactions</h3>
      {transactions.map(transaction => (
        <div 
          key={transaction.id} 
          className={`transaction ${transaction.amount > 0 ? 'income' : 'expense'}`}
        >
          <span>{transaction.description}</span>
          <div>
            <span>${Math.abs(transaction.amount).toFixed(2)}</span>
            <button 
              className="delete-btn" 
              onClick={() => onDelete(transaction.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
