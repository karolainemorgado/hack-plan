import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const LoginForm = ({ onSubmit, isDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        isDarkMode={isDarkMode}
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        isDarkMode={isDarkMode}
      />
      <Button 
        label={"Login"}
        isDarkMode={isDarkMode}
      />
    </form>
  );
};

export default LoginForm;