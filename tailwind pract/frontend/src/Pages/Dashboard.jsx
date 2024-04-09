import Appbar from "../components/Appbar";
import Balacnce from "../components/Balacnce";
import Users from "../components/Users";

function Dashboard() {
  return (
    <>
      <Appbar />
      <div className="m-8">
        <Balacnce value={10000} />
        <Users />
      </div>
    </>
  );
}

export default Dashboard;
