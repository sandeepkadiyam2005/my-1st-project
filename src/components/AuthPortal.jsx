import { useState } from "react";

const AuthPortal = () => {
  const [mode, setMode] = useState("login");

  return (
    <section className="section-padding bg-[#efefef]" id="auth">
      <div className="container-width grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Access portal
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-800">User {mode}</h2>
          <p className="mt-3 text-sm text-slate-500">
            Manage your orders, saved addresses, and payment approvals.
          </p>
          <div className="mt-6 flex gap-2 rounded-full bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${
                mode === "login" ? "bg-slate-700 text-white" : "text-slate-600"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode("registration")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${
                mode === "registration" ? "bg-slate-700 text-white" : "text-slate-600"
              }`}
            >
              Registration
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-300 bg-[#e7e7e7] p-6 sm:p-10">
          <div className="mx-auto max-w-xl">
            <h3 className="text-center text-3xl font-semibold tracking-[0.25em] text-slate-600">
              USER {mode === "login" ? "LOGIN" : "REGISTRATION"}
            </h3>
            <form className="mt-10 space-y-6">
              {mode === "registration" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
                  />
                </div>
              )}
              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
              />
              {mode === "registration" && (
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-xl border border-slate-500 bg-slate-600 px-4 py-3 text-sm text-white placeholder:text-slate-300"
                />
              )}
              <div className="flex items-center justify-between text-sm text-slate-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  Remember
                </label>
                <button type="button" className="hover:text-slate-700">
                  Forgot password?
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="rounded-lg bg-slate-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white"
                >
                  {mode === "login" ? "Login" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPortal;
