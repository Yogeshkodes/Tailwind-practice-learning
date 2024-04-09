import { useState, useEffect } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);
  return (
    <div>
      <span className="font-bold mt-6 ml-5 text-lg">Users</span>

      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        type="text"
        placeholder="Search users..."
        className="w-full px-2 py-1 my-2 mx-2 border rounded border-slate-200"
      ></input>

      <div>
        {users.map((user) => (
          <User user={user} key={users._id} />
        ))}
      </div>
    </div>
  );
}

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={() => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}

export default Users;
