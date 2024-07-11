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
    setImage(e.target.files[0]);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  let formData = new FormData()
  formData.append('username', username);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('userImage', `/images/${image.name}`);

  console.log(Object.fromEntries(formData.entries()).username, 'formadata username');
  console.log(username);
  console.log(email);
  console.log(password);
  console.log(image);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3310/user/register`, {
      method: 'POST',
      credentials: 'include',
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
        <form className='registerContainer'>
          <label htmlFor='username'>
            username
            <input
              id='username'
              name='username'
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
          <label htmlFor='userImage'>
            image
            <input
              name='userImage'
              type='file'
              id='userImage'
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
        </form>
      </section>
    </div>
  );
}
