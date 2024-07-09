import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3310/user/register`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
        image,
        name
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          navigate('/user/login');
        } else {
          return response.json().then((data) => {
            console.info(data);
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='generalContainer-wrapper'>
      <section className='generalContainer'>
        <h2>Enregistrement</h2>
        <div className='registerContainer'>
          <label htmlFor='prénom'>
            username
            <input
              id='prénom'
              name='prénom'
              value={username}
              onChange={handleChangeUserName}
            />
          </label>
          <label htmlFor='email'>
            Email Address
            <input
              id='email'
              name='email'
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <label htmlFor='password'>
            Password
            <input
              name='password'
              type='password'
              id='password'
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <label htmlFor='image'>
            image
            <input
              name='image'
              type='text'
              id='image'
              value={image}
              onChange={handleChangeImage}
            />
          </label>

          <label htmlFor='province_name'>
            Province name
            <input
              name='name'
              type='text'
              id='name'
              value={name}
              onChange={handleChangeName}
            />
          </label>

          <button onClick={handleSubmit}>Confirmer</button>
        </div>
      </section>
    </div>
  );
}
