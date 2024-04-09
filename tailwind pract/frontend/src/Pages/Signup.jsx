import Heading from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [Firstname, setFistname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  //   console.log(Firstname);
  //   console.log(Lastname);
  //   console.log(Username);
  //   console.log(Password);

  return (
    <main className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="h-max w-80  bg-white text-center rounded-lg p-2 px-4">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create your account"} />

        <InputBox
          onchange={(e) => setFistname(e.target.value)}
          placeholder="John"
          label={"First name"}
        />
        <InputBox
          onchange={(e) => setLastname(e.target.value)}
          placeholder="Doe"
          label={"Last name"}
        />
        <InputBox
          onchange={(e) => setUsername(e.target.value)}
          placeholder="Yogesh@gmail.com"
          label={"Email"}
        />
        <InputBox
          onchange={(e) => setPassword(e.target.value)}
          placeholder="123456"
          label={"Password"}
        />
        <div className="pt-4">
          <Button
            label={"Sign up"}
            onClick={() => {
              axios.post("https://localhost:3000/api/v1/user/signup", {
                username: Username,
                password: Password,
                firstName: Firstname,
                lastName: Lastname,
              });
            }}
          />
        </div>
        <BottomWarning
          label={"Already have an account ? "}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </main>
  );
}

export default Signup;
