import React from 'react';

export default function Balance({ transactions }) {
  const balance = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  
  return (
    <div className="balance">
      <h2>Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
}
