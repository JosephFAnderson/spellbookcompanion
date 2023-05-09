import Link from "next/link";
import './page.css';

export default function signup() {
    return (
      <div>
        <div>
          <h1>Please Sign Up Here!</h1>
          <form>
            <section>
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" autoComplete="username" required autoFocus></input>
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text" autoComplete="email" required></input>
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input id="current-password" name="password" type="password" minLength="8" autoComplete="current-password" required></input>
            </section>
            <button type="submit">Sign Up</button>
          </form>
        </div>        
        
        <Link href="/login">Already have an account? Click here to log in.</Link>
      </div>   
    )
  }