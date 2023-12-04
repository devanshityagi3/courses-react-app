import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate(); 

     const users = [
       {
         id: 101,
         name: "Alice Johnson",
         email: "alice@example.com",
         password: "12345",
       },
       {
         id: 102,
         name: "Bob Smith",
         email: "bob@example.com",
         password: "password123",
       },
       {
         id: 103,
         name: "Scarlett Johanson",
         email: "scarlett@example.com",
         password: "1234"
       },
       {
         id: 104,
         name: "Will Smith",
         email: "Will@example.com",
         password: "1234"
       },
       {
         id: 105,
         name: "Devanshi Tyagi",
         email: "devanshi@example.com",
         password: "1234"
       },
       {
         id: 106,
         name: "Isha Jain",
         email: "Isha@example.com",
         password: "1234"
       },
     ];

     const handleLogin = () => {
       const user = users.find((user) => user.email === email);

       if (user && user.password === password) {
         navigate("/studentdashboard", {
           state: { userId: user.id, name: user.name, email: user.email },
         });
       } else {
         alert("Invalid credentials");
       }
     };
    return (
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        <div
          className="w-full md:w-1/2 bg-cover bg-center h-64 md:h-auto"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-vector/cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37328.jpg)",
          }}
        ></div>
        <div className="w-full md:w-1/2 bg-gray-200 flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto bg-white p-4"
            onSubmit={handleLogin}
          >
            <h2 className="text-4xl font-serif text-center font-bold py-6">
              Alemeno
            </h2>
            <div className="flex flex-col py-2">
              <label>Your email</label>
              <input
                className="border-b-2 border-slate-500 p-2"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                className="border-b-2 border-slate-500 p-2"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="border w-full my-5 py-2 bg-slate-600 hover:bg-slate-800 text-white rounded"
              type="submit"
            >
              Log in
            </button>
            <div className="flex flex-col md:flex-row justify-between font-thin">
              <p className="flex items-center md:mr-4">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </p>
              <Link
                to="/signup"
                className="border w-full md:w-40 bg-slate-500 text-white rounded mt-4 md:mt-0 hover:bg-slate-800 flex justify-center"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
}
 
export default Login;