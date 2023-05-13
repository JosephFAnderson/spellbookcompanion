"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserContext } from "../context/user";
import "./page.css";

export default function Login() {  
  const router = useRouter();
  const [user, setUser] = useUserContext();

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
      

      if (data){
        setUser(data);
        router.push("/characters");
      }
    }catch (err) {
      console.error(err);
    }
  }

    return (
      <div className="abc">
        <div>
          <h1>Please Log In Here!</h1>
          <form className="formContainer" onSubmit={handleFormSubmit}>
            <section className="formField">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" type="text" placeholder="Username" required autoFocus></input>
            </section>
            <section className="formField">
              <label htmlFor="password">Password</label>
              <input id="current-password" name="password" type="password" minLength="8" placeholder="Password" required></input>
            </section>
            <button className="button" type="submit">Log in</button>
          </form>
        </div>        
        
        <Link href="/signup">New user? Click here to create account.</Link>
      </div>      
    )
  }
  