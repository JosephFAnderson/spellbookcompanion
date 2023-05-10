"use client"
import Link from "next/link";
import './page.css';

export default function signup() {

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try{
      const username = event.target.username.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

      const payload = { username, email, password }
      
      const res = await fetch( "http://localhost:3001/api/users/signup", {
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
          <h1>Please Sign Up Here!</h1>
          <form onSubmit={handleFormSubmit}>
            <section>
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" required autoFocus></input>
            </section>
            <section>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text" required></input>
            </section>
            <section>
              <label htmlFor="password">Password</label>
              <input id="current-password" name="password" type="password" minLength="8" required></input>
            </section>
            <button type="submit">Sign Up</button>
          </form>
        </div>        
        
        <Link href="/login">Already have an account? Click here to log in.</Link>
      </div>   
    )
  }