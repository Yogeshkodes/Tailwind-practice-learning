import Appbar from "../components/Appbar";
import Balacnce from "../components/Balacnce";
import Users from "../components/Users";

function Dashboard() {
  return (
    <>
      <Appbar />
      <Balacnce value={10000} />
      <Users />
    </>
  );
}

export default Dashboard;
