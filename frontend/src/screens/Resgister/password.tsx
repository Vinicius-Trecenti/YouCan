import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs'; // Importe os ícones 'eye' e 'eye-slash' do React Icons

function PasswordInputWithToggle(props: { typePassword: string | undefined; }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="relative h-15 border-2 border-gray-dark rounded" >
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={props.typePassword}
          id="password"
          value={password}
          
          onChange={(e) => setPassword(e.target.value)}

          className="w-full  px-3 py-4"
          />
        <span
          onClick={togglePasswordVisibility}
          className="absolute top-2 right-2 cursor-pointer"
        >
          {showPassword ? <BsEyeSlash /> : <BsEye />}
        </span>
      </div>
    </div>
  );
}

export default PasswordInputWithToggle;
