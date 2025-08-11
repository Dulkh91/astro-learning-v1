import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center py-10">
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        ចុចខ្ញុំ ({count})
      </button>
    </div>
  );
}