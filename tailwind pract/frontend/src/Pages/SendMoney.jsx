function SendMoney() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border h-min text-card-foreground max-w-md p-4  w-96 bg-white shadow-lg rounded-lg ">
        <h3 className="text-3xl font-bold text-center">Send Money</h3>

        <div className="flex item-center ml-5 mt-5 ">
          <span className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            A
          </span>
          <h3 className="text-2xl font-semibold mt-2 ml-3">
            Friend&apos;s Name
          </h3>
        </div>

        <div className="h-4"></div>

        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70  ml-4 mt-4"
          htmlFor="amount"
        >
          Amount (in Rs)
        </label>

        <input
          type="number"
          className="mt-5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          id="amount"
          placeholder="Enter amount"
        />

        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white mt-10">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}

export default SendMoney;
