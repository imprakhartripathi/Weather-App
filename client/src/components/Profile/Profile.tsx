import React, { useState, useEffect } from "react";
// import "./Profile.css"

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    savedLocations: [] as string[],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("token"); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/get-user/${userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          setError(data.message || "Failed to fetch user data");
        }
      } catch (err) {
        setError("Something went wrong fetching user data");
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdateUser = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/edit-user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId,
          fullName: user.fullName,
          email: user.email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Profile updated successfully!");
      } else {
        setError(data.message || "Error updating profile");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleAddLocation = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/add-location", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId, // Use actual userId
          location,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setUser({ ...user, savedLocations: data.savedLocations });
        setLocation("");
      } else {
        setError(data.message || "Error adding location");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>

      {error && <p className="error-message">{error}</p>}

      <div className="profile-info">
        <h3>User Details</h3>
        <div className="profile-details">
          <p>
            <strong>Full Name:</strong>
            {isEditing ? (
              <input
                type="text"
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              />
            ) : (
              user.fullName
            )}
          </p>
          <p>
            <strong>Email:</strong>
            {isEditing ? (
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            ) : (
              user.email
            )}
          </p>
        </div>

        <button
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      <div className="saved-locations">
        <h3>Saved Locations</h3>
        <ul>
          {user.savedLocations.map((loc, index) => (
            <li key={index}>{loc}</li>
          ))}
        </ul>

        <div className="add-location">
          <input
            type="text"
            placeholder="Add location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleAddLocation}>Add Location</button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Profile;
