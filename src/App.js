import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({});
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSkillsChange = (event) => {
    const skills = formData.skills || [];
    if (event.target.checked) {
      skills.push(event.target.name);
    } else {
      const index = skills.indexOf(event.target.name);
      if (index > -1) {
        skills.splice(index, 1);
      }
    }
    setFormData({
      ...formData,
      skills: skills,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, formData]);
    setFormData({});
  };

  return (
    <div className="header">
        <h1 id="title">STUDENT ENROLMENT FORM</h1>
    <div className="container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="website">Website link</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="Profile">Profile link</label>
            <input
              type="text"
              id="profile"
              name="profile"
              value={formData.profile || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Selection gender */}
          <div id="gender">
            <label>Select gender</label>
            Male
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />

            Female
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleInputChange}
            />
          </div>

          {/* Skills selection */}
          <div>
            <label>Select skills</label>
            CSS
            <input
              type="checkbox"
              id="css"
              name="CSS"
              checked={formData.skills && formData.skills.includes("CSS")}
              onChange={handleSkillsChange}
            />
            HTML
            <input
              type="checkbox"
              id="html"
              name="HTML"
              checked={formData.skills && formData.skills.includes("HTML")}
              onChange={handleSkillsChange}
            />
            Java
            <input
              type="checkbox"
              id="java"
              name="Java"
              checked={formData.skills && formData.skills.includes("Java")}
              onChange={handleSkillsChange}
            />
          </div>
          <button type="submit">Register</button>
          </form>
        </div>
        <div className="user-container">
          <h2>Registered Users</h2>
          <ul className="user-list">
          {users.map((user, index) => (
          <li className="user" key={index}>
            <div className="user-profile">
              <img id="profilepho" src={user.profile} alt={user.name} />
            </div>
            <div className="user-details">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Website link: </strong> {user.website}
              </p>
              <p>
                <strong>Gender: </strong> {user.gender}
              </p>
              <p>
                <strong>Skills: </strong> {user.skills.join(", ")}
              </p>
            </div>
          </li>
        ))  }
          </ul>
        </div>
        {/* <div className="user-profile">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="Profile" />
        </div> */}
      </div>
    </div>
  );
}

export default App;
