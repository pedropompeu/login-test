import * as React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulação de chamada a uma API de autenticação
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === 'user@react.dev' && password === 'password123') {
      setIsLoggedIn(true);
    } else {
      setError('E-mail ou senha inválidos.');
    }

    setIsLoading(false);
  };

  if (isLoggedIn) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Bem-vindo(a)!</h1>
        <p>Login realizado com sucesso.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h1 className={styles.title}>
          <div className={styles.logo}>
          <svg
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C9.243 2 7 4.243 7 7V11H5C4.44772 11 4 11.4477 4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12C20 11.4477 19.5523 11 19 11H17V7C17 4.243 14.757 2 12 2ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z"
              fill="currentColor"
            />
          </svg>
        </div>Acesse sua conta</h1>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.inputGroup}>
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            aria-label="Email"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
            aria-label="Password"
          />
        </div>
        <button type="submit" disabled={isLoading} className={styles.button}>
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;