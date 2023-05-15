import React from 'react';

function MySelect() {
  return (
    <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
      <option className="py-2 px-4 bg-gray-100 hover:bg-gray-200">Option 1</option>
      <option className="py-2 px-4 bg-gray-100 hover:bg-gray-200">Option 2</option>
      <option className="py-2 px-4 bg-gray-100 hover:bg-gray-200">Option 3</option>
    </select>
  );
}

export default MySelect;
