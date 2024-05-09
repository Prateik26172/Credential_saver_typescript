import { useState } from "react";
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
  const handleChangeBoth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("submitted");
    setCredentials({ email: Email, password: Password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center mt-[150px]">
      <div className="border flex flex-col gap-4 bg-white w-[350px] h-[350px] p-9">
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={handleChangeEmail}
            className="border p-2 rounded"
          />
        </div>
        <div>
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
    </div>
  );
};
export default EmailPasswordForm;
