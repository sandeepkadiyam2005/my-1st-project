import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext.jsx";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useStore();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim()) return;
    login(username);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#efefef] px-4 py-16">
      <div className="mx-auto max-w-xl rounded-3xl border border-slate-300 bg-[#e7e7e7] p-8 sm:p-12">
        <h1 className="text-center text-4xl font-semibold tracking-[0.3em] text-slate-600">USER LOGIN</h1>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
          />
          <div className="flex items-center justify-between text-sm text-slate-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" /> Remember
            </label>
            <span>Forgot password?</span>
          </div>
          <button type="submit" className="mx-auto block rounded-lg bg-slate-600 px-9 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Login
          </button>
        </form>
        <p className="mt-7 text-center text-sm text-slate-600">
          New user? <Link to="/register" className="font-semibold text-slate-800">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
