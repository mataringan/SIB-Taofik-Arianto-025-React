import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authLoginAPI } from "./users/authSlice.js";

function AuthLoginForm() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const doSubmit = (event) => {
    event.preventDefault();
    dispatch(authLoginAPI({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <form name="loginForm" onSubmit={doSubmit}>
      <div className="form-group-collection">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={emailChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={passwordChange}
            value={password}
          />
        </div>

        <input type="submit" value="Login" />

        <div className="message">
          {authState.isLoginPending && (
            <div>
              <img
                src="https://mir-s3-cd-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif"
                alt="Loading..."
              />
            </div>
          )}
          {authState.isLoginSuccess && <div>Success.</div>}
          {authState.errorMessage && <div>{authState.errorMessage}</div>}
        </div>
      </div>
    </form>
  );
}

export default AuthLoginForm;
