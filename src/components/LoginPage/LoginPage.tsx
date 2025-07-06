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
        <h1 className={styles.title}>Login</h1>
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