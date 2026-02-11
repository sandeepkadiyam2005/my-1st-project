import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) return;
    register(name);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#efefef] px-4 py-16">
      <div className="mx-auto max-w-xl rounded-3xl border border-slate-300 bg-[#e7e7e7] p-8 sm:p-12">
        <h1 className="text-center text-3xl font-semibold tracking-[0.25em] text-slate-600">USER REGISTRATION</h1>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Work Email"
            className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
          />
          <button type="submit" className="mx-auto block rounded-lg bg-slate-600 px-9 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Create
          </button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-600">
          Already have an account? <Link to="/login" className="font-semibold text-slate-800">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
