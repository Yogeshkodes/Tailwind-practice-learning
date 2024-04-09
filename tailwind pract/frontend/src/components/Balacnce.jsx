function Balacnce({ value }) {
  return (
    <div className="flex m-5">
      <span className="font-bold text-lg">Your Balance</span>
      <span className="ml-4 font-semibold text-lg">{value}</span>
    </div>
  );
}

export default Balacnce;
