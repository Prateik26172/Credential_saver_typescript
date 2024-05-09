import { useState } from "react";
// import { useForm } from "react-hook-form";
import * as yup from "yup";

const UserValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required(),
});
const EmailPasswordForm = () => {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [Credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeBoth = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("submitted");
    try {
      await UserValidation.validate({
        email: Email,
        password: Password,
      });
      setCredentials({ email: Email, password: Password });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Validation error:", error.errors);
    }
  };

  return (
    <form className="flex justify-center mt-[150px]">
      <div className="border flex flex-col gap-4 bg-white w-[350px] h-[350px] p-9">
        <div className="flex gap-10  items-center">
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={handleChangeEmail}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex gap-3  items-center">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="Password"
            placeholder="Password"
            value={Password}
            onChange={handleChangePassword}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <button
            className="border flex p-2 shadow-md rounded bg-blue-500 text-white hover:bg-blue-700"
            onClick={handleChangeBoth}
          >
            Add
          </button>
        </div>
        <div>
          <p>saved Emails:{Credentials.email}</p>
          <p>saved Passwords:{Credentials.password}</p>
        </div>
      </div>
    </form>
  );
};
export default EmailPasswordForm;
