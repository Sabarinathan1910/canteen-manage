import React from 'react';
import '../Styles/Login.css'
const Login = () => {
  return (
<div className="login-container">
<div className="login-box">
<h1>TVS <span>canteen</span></h1>
<form>
<div className="input-group">
<label htmlFor="username">Username</label>
<input type="text" id="username" name="username" placeholder="Enter your Username" />
</div>
<div className="input-group">
<label htmlFor="password">Password</label>
<input type="password" id="password" name="password" placeholder="Enter your Password" />
</div>
<div className="remember-me">
<input type="checkbox" id="rememberMe" name="rememberMe" />
<label htmlFor="rememberMe">Remember Me</label>
</div>
<button type="submit">Login</button>
</form>
</div>
</div>
  );
}
 
export default Login;