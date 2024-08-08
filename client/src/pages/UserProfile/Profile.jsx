import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useUserStore from '../../../store/userStore';
import { api_url } from '../../../utills/config';
import toast from "react-simple-toasts";
import "./Profile.css";

const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(""); // Preview URL for selected image
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(""); // URL for uploaded image
  const user = useUserStore((state) => state.user);

  // Fetch user data
  
  
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `${api_url}/api/users/getOneUser/${userId}`,
        { withCredentials: true }
      );

      if (response.data.success) {
        formik.setValues(response.data.data);
        setImageUrl(response.data.data.profilePicture || "");
        setImagePreview(response.data.data.profilePicture || "");
      } else {
        setError("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data.");
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
      console.log(user);
      
    } else {
      setError("Unauthorized");
      navigate("/Page404");
    }
  }, [user, userId, navigate]);

  // Set formik field value when imageUrl changes
  useEffect(() => {
    if (imageUrl) {
      formik.setFieldValue("profilePicture", imageUrl);
    }
  }, [imageUrl]);

  async function handleImageUpload() {
    if (!image) {
      toast("Please select an image to upload.", { theme: "failure" });
      return;
    }

    const payload = new FormData();
    payload.append("file", image);
    payload.append("upload_preset", preset);

    try {
      setImageLoading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudname}/upload`,
        payload
      );

      if (response.data.secure_url) {
        setImageUrl(response.data.secure_url);
        setImagePreview(response.data.secure_url);
      } else {
        toast("Failed to upload image. Please try again.", { theme: "failure" });
      }
    } catch (error) {
      toast("Failed to upload image. Please try again.", { theme: "failure" });
    } finally {
      setImageLoading(false);
    }
  }

  function handleChange(e) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
      } else {
        toast("Please select a valid image file.", { theme: "failure" });
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      profilePicture: "",
    },
    onSubmit: async (values) => {
      if (user) { 
        try {
          setLoading(true);
          setError("");
          const response = await axios.patch(
            `${api_url}/api/users/updateUserDetails/${userId}`,
            values,
            { withCredentials: true }
          );
          if (response.data.success) {
            toast("Profile updated successfully", { theme: "success" });
            // Optionally navigate or reset form
            // formik.resetForm();
            // navigate("/");
          } else {
            setError("Failed to update profile. Please try again.");
          }
        } catch (error) {
          console.error("Error updating profile:", error);
          setError("Failed to update profile. Please try again.");
        } finally {
          setLoading(false);
        }
      } else {
        setError("You do not have permission to edit this profile.");
      }
    },
  });

  return (
    <div className="EditProfile">
      <div className="editUserProfileContainer">
        <h1>Update Your Profile</h1>
        <form onSubmit={formik.handleSubmit}>
          <img
            src={imagePreview || user.profilePicture}
            alt={user.firstName || "Profile"}
            className="profilePicture"
          />
          <div className="editProfile">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </div>

          <div className="editProfile">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </div>

          <div className="editProfile">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <div className="uploaduserimagewrapper">
            <input type="file" className="file" onChange={handleChange} />
            <button
              type="button"
              onClick={handleImageUpload}
              disabled={imageLoading || !image}
              className="uploadbtn"
            >
              {imageLoading ? "Uploading..." : "Upload Image"}
            </button>
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="updateProfilebtn" disabled={loading}>
            {loading ? "Please wait..." : "Update profile"}
          </button>
        
        </form>
      </div>
    </div>
  );
}

export default Profile;
