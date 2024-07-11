import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider.jsx';
import { jwtDecode } from 'jwt-decode';

import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [image, setImage] = useState('');
  const { setIsLoggedIn, setAuthUser, setToken, authUser, isLoggedIn, token } =
    useAuth();

  const navigate = useNavigate();

  // Gestionnaire de changement de l'email

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleDescriptionChange = (event) => {
  //   setDescription(event.target.value);
  // };
  // const handleImageChange = (event) => {
  //   setImage(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(name, description, image, 'formulaire');

    fetch(`http://localhost:3310/user/login`, {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          console.log("je suis connectée")
          setIsLoggedIn(true);
          return response.json();
        } else {
          setError('Email ou mot de passe incorrect');
          navigate('/user/login');
        }
      })
      .then((data) => {
        const token = data.token;
        setToken(token);
        const decodedToken = jwtDecode(token);
        setAuthUser({
          id: decodedToken.id,
          username: decodedToken.username,
          province_id: decodedToken.province,
        });
         navigate('/province');
      });
   
  };

  //   useEffect(() => {

  //     if (isLoggedIn && token) {

  //     fetch(`http://localhost:3310/user/${authUser.id}/province`, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         name,
  //         description,
  //         image,
  //       }),
  //     })
  //       .then((response) => {
  //         if (response.status === 201) {
  //           response.json();
  //           navigate('/province');
  //         } else {
  //           setError('province non cree');
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //  }

  //   }, [isLoggedIn,token])

  return (
    <div className='generalContainer-wrapper'>
      <section className='generalContainer'>
        <h2>Connectez-vous</h2>
        <div className='loginContainer'>
          <label htmlFor='email'>
            Email
            <input
              id='email'
              name='email'
              value={email}
              onChange={handleMailChange}
            />
          </label>

          <label htmlFor='password'>
            Password
            <input
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          {/* <label htmlFor='province'>
            Name of your province
            <input
              id='province'
              name='province'
              type='text'
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label htmlFor='province'>
            Describe your province
            <input
              id='description'
              name='description'
              type='text'
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
          <label htmlFor='image'>
            image
            <input
              name='image'
              type='text'
              id='image'
              value={image}
              onChange={handleImageChange}
            />
          </label> */}
          <button onClick={handleSubmit}>se connecter</button>
          <div>
            Vous n'avez pas encore de compte ?{' '}
            <span>
              <Link to='/user/register'>Enregistrez-vous</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
