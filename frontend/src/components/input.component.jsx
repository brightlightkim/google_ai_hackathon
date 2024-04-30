import { useState } from 'react';

const InputBox = ({
  name,
  type,
  id,
  value,
  placeholder,
  icon,
  disabled = false,
  hidden = false,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className={!hidden? 'relative w-[100%] mb-4': 'w-0 m-0 h-0'}>
      <input
        name={name}
        type={
          type == 'password' ? (passwordVisible ? 'text' : 'password') : type
        }
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        disabled={disabled}
        className={!hidden ? 'input-box' : 'w-0 h-0 m-0 p-0 border-0'}
      />

      {!hidden ? <i className={'fi ' + icon + ' input-icon'}></i> : ''}
      {type == 'password' ? (
        <i
          className={
            'fi fi-rr-eye' +
            (!passwordVisible ? '-crossed' : '') +
            ' input-icon left-[auto] right-4 cursor-pointer'
          }
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
        ></i>
      ) : (
        ''
      )}
    </div>
  );
};

export default InputBox;
