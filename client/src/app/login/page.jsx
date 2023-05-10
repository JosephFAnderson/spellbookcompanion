"use client"
import Link from "next/link";
import "./page.css";

export default function Login() {

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try{
      const username = event.target.username.value;
      const password = event.target.password.value;

      const payload = { username, password }
      
      const res = await fetch( "http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json();

      console.log(data);
    }catch (err) {
      console.error(err);
    }
  }

    return (
      <div>
        <div>
          <h1>Please Log In Here!</h1>
          <form onSubmit={handleFormSubmit}>
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
  