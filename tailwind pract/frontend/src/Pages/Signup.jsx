import Heading from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

function Signup() {
  return (
    <main className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="h-max w-80  bg-white text-center rounded-lg p-2 px-4">
        <Heading label={"Sign Up"} />
        <SubHeading label={"Enter your information to create your account"} />

        <InputBox placeholder="John" label={"First name"} />
        <InputBox placeholder="Doe" label={"Last name"} />
        <InputBox placeholder="Yogesh@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign up"} />
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
