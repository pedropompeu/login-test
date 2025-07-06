import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  test('renderiza o formulário de login por padrão', () => {
    render(<LoginPage />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  test('permite que o usuário digite nos campos de email e senha', () => {
    render(<LoginPage />);
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/senha/i) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'teste@exemplo.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senha123' } });

    expect(emailInput.value).toBe('teste@exemplo.com');
    expect(passwordInput.value).toBe('senha123');
  });

  test('mostra uma mensagem de erro em caso de falha no login', async () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'errado@exemplo.com' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'senhaerrada' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    expect(screen.getByRole('button', { name: /entrando.../i })).toBeDisabled();
    
    expect(await screen.findByText(/e-mail ou senha inválidos/i)).toBeInTheDocument();
    
    expect(screen.getByRole('button', { name: /entrar/i })).not.toBeDisabled();
  });

  test('mostra uma mensagem de sucesso em caso de login bem-sucedido', async () => {
    render(<LoginPage />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@react.dev' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

   await waitFor(() => {
  expect(screen.getByRole('heading', { name: /bem-vindo\(a\)!/i })).toBeInTheDocument();
}, { timeout: 2000 });
    expect(screen.getByText(/login realizado com sucesso/i)).toBeInTheDocument();
  });
});