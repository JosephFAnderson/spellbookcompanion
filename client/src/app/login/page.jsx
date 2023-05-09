import Link from "next/link";
import "./page.css";

export default function Login() {
    return (
      <div>
        <div>
          <h1>Please Log In Here!</h1>
          <form>
            <section>
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" required autoFocus></input>
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input id="current-password" name="password" type="password" minLength="8" autoComplete="current-password" required></input>
            </section>
            <button type="submit">Log in</button>
          </form>
        </div>        
        
        <Link href="/signup">New user? Click here to create account.</Link>
      </div>      
    )
  }
  