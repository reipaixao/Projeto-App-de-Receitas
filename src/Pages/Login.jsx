// baseado no meu projeto da Elaine - https://github.com/tryber/sd-013-a-project-trybewallet/commit/668b077c70f48ff72c6ce11fc20c0c9225d4b590
import React, { useEffect, useState, useContext } from 'react';
import Context from '../context/Context';

function Login() {
  // salvando no estado as constantes de email, senha e botao
  const [disabled, setDisabled] = useState(true); // botao tem que estar disativado
  const { email, setEmail } = useContext(Context);
  const [password, setPassword] = useState('');

  // usar hook-useEffect para validaçao da senha e email
  useEffect(() => {
    // funçao para guardar constantes para o regex email e tamanho da senha
    const buttonDesabled = () => {
      const emailRegex = /\S+@\S+\.\S+/; // REGEX retirado do post: https://stackoverflow.com/questions/35788383/regex-validation-in-javascript-email
      const passwordLenght = 6;
      const isValid = emailRegex.test(email);
      const validation = password.length > passwordLenght && isValid;
      // criar uma condicional para validaçao de email e senha
      if (validation) {
        setDisabled(false);
      } else { setDisabled(true); }
    };
    buttonDesabled();
  }, [email, password]);

  // criar uma funçao para submeter os token no local storage,
  const handleSubmit = () => {
    // salvando no local storage
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };

  return (
    <div>
      {/* colocando value nos inputs, para ficarem no estado e serem alterados */}
      {/* criar um onchange chamando uma arrow Function com uma target
      para atualizaçao do estado do email e da senha */}
      <input
        type="email"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />
      {/* criando onclick e chamando a funçao handleSubmit criado acima */}
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleSubmit }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
