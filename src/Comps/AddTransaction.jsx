import React, { useState } from 'react';

const AddTransaction = () => {
  const [transactionType, setTransactionType] = useState('');

  return (
    <div className="w-full my-8 px-8 text-fontColor">
      <h1 className="font-semibold mb-4 text-xl">Add Transaction</h1>
      <div className="w-full p-4 bg-divColor rounded-md">
        <div className="w-full flex items-center gap-5">
          {/* Title Input */}
          <span className="flex-1">
            <h1 className="font-semibold text-lg mb-4">Title</h1>
            <input
              type="text"
              placeholder="Enter Your Title"
              className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
            />
          </span>

          {/* Amount Input */}
          <span className="flex-1">
            <h1 className="font-semibold text-lg mb-4">Amount</h1>
            <input
              type="number"
              placeholder="Enter Amount"
              className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
            />
          </span>
        </div>

        {/* description  */}

         <span className="w-full">
            <h1 className="font-semibold text-lg my-4">Description </h1>
            <textarea
              
              placeholder="Enter Description"
              className="bg-iconBG w-full p-2 outline-none border-none rounded-md"
            />
          </span>
        {/* Radio Buttons */}
        <div className="mt-6 flex items-center gap-5">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="transactionType"
              value="Expense"
              checked={transactionType === 'Expense'}
              onChange={(e) => setTransactionType(e.target.value)}
              className="accent-blue-500"
            />
            <span className="text-base font-medium">Expense</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="transactionType"
              value="Income"
              checked={transactionType === 'Income'}
              onChange={(e) => setTransactionType(e.target.value)}
              className="accent-green-500"
            />
            <span className="text-base font-medium">Income</span>
          </label>
        </div>

        {/* Add Button  */}

        <div className='w-full curs mt-4 flex justify-center items-center'>
            <h1 className='bg-blue cursor-pointer font-semibold md:px-40 py-2 md:w-auto w-full text-center rounded-md '>Add Transaction </h1>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
