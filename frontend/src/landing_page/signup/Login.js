import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3002/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("LOGIN:", data);

    if (data.success) {
      localStorage.setItem("token", data.token);

      // Redirect to dashboard app
      window.location.href = `http://localhost:3000?token=${data.token}`;
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "450px", marginTop: "60px" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="form-control" type="email" name="email" value={form.email}
          onChange={handleChange} required />

        <label>Password</label>
        <input className="form-control" type="password" name="password" value={form.password}
          onChange={handleChange} required />

        <button className="btn btn-primary w-100 mt-3" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
