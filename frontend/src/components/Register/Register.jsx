import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("userImage", image);
    formData.append("name", name);

    fetch(`http://localhost:3310/user/register`, {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (response.status === 201) {
          navigate("/user/login");
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
    <div className="generalContainer-wrapper">
      <section className="generalContainer">
        <h2>Enregistrement</h2>
        <div className="registerContainer">
          <form onSubmit={handleSubmit}>
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
            <label htmlFor="image">
              Image
              <input
                name="image"
                type="file"
                id="image"
                onChange={handleChangeImage}
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
        </div>
      </section>
    </div>
  );
}
