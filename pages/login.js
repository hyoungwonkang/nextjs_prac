import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../styles/app.module.css'

export default function Home() {
  const [logginError, setLoginError] = useState(null);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = event.target.elements;
    setLoginError(null);
    handleLogin(email.value, password.value)
    .then(()=> router.push('/protected-route'))
    .catch((err)=>setLoginError(err.message));
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        
        
        <button type="submit">Login</button>
        
        {logginError && (
          <div className={styles.formError}>
            {logginError}
          </div>
        )}
      </form>
    </div>
  );
}

async function handleLogin(email, password) {
  const resp = await fetch('/api/login', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await resp.json();

  if(data.success) {
    return;
  }

  throw new Error('Wrong email or password');
}