import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

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
      password: "1234",
    },
    {
      id: 104,
      name: "Will Smith",
      email: "Will@example.com",
      password: "1234",
    },
    {
      id: 105,
      name: "Devanshi Tyagi",
      email: "devanshi@example.com",
      password: "1234",
    },
    {
      id: 106,
      name: "Isha Jain",
      email: "Isha@example.com",
      password: "1234",
    },
  ];

  const handleSignUp = () => {
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      navigate("/login", {
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
            "url(https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      ></div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="max-w-md p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 font-serif">Alemeno</h2>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="w-full md:w-1/2 mb-3 p-2 rounded border-b-2"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <input
              type="email"
              className="w-full mb-3 p-2 rounded border-b-2"
              placeholder="Your Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="w-full mb-3 p-2 rounded border-b-2"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="rounded bg-blue-500 w-full text-white font-bold"
            >
              Register
            </button>
            <Link
              to="/login"
              className="text-blue-500 hover:underline cursor-pointer flex justify-center md:justify-end"
            >
              Already a user?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
