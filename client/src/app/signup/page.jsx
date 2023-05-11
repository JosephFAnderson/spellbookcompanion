"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import './page.css';

export default function signup() {
  const router = useRouter();

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

      if(data) {
        router.push("/");
      }
      
    }catch (err) {
      console.error(err);
    }
  }

    return (
      <div className="abc">
        <div>
          <h1>Please Sign Up Here!</h1>
          <form className="formContainer" onSubmit={handleFormSubmit}>
            <section className="formField">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" placeholder="Username" required autoFocus></input>
            </section>
            <section className="formField">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text" placeholder="Email" required></input>
            </section>
            <section className="formField">
              <label htmlFor="password">Password</label>
              <input id="current-password" name="password" type="password" placeholder="Password" minLength="8" required></input>
            </section>
            <button className="submitBtn" type="submit">Sign Up</button>
          </form>
        </div>        
        
        <Link href="/login">Already have an account? Click here to log in.</Link>
      </div>   
    )
  }