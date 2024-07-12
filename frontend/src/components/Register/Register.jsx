import { useRef,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import button from "/sound/button2.mp3";

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const audioRef = useRef(null);
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate("/user/login");
      }, 500); // 0.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [redirect, navigate]);


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

  const handleSubmit = (event) => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    event.preventDefault();

    let formData = new FormData();
    formData.append("userImage", image);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);

    console.log(Object.fromEntries(formData.entries()), "formData entries");

    fetch(`http://localhost:3310/user/register`, {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (response.status === 201) {
          setRedirect(true);
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
       <audio ref={audioRef} src={button} />
      <section className='generalContainer'>
        <h2>Enregistrement</h2>
        <form className="registerContainer" onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username
            <input
              id="username"
              name="username"
              value={username}
              onChange={handleChangeUserName}
              required
            />
          </label>
          <label htmlFor="email">
            Email Address
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
              required
            />
          </label>
          <label htmlFor="userImage">
            Image
            <input
              name="userImage"
              type="file"
              id="userImage"
              onChange={handleChangeImage}
              required
            />
          </label>
          <label htmlFor="province_name">
            Province Name
            <input
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={handleChangeName}
            />
          </label>
          <button type="submit">Confirmer</button>
        </form>
      </section>
    </div>
  );
}
