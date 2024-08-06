import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { api_url } from "../../../../utills/config";
import toast from "react-simple-toasts";
import "./AdminProfile.css"

const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

function AdminProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const user = useUserStore((state) => state.user);

  useEffect(()=>{

    const fetchUser = async () => {
      if (user && user.role ==="admin") {
        try {
          const response = await axios.get(
            `${api_url}/api/users/getOneUser/${userId}`,
            { withCredentials: true },
          );
          
          if (response.data.success) {
            formik.setValues(response.data.data);
          } else {
            setError("Failed to fetch user data.");
          }
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError("Unauthorized");
        navigate("/Page404");
      }
    };

    fetchUser();

  },[user])


  async function handleImageUpload() {
    const payload = new FormData();
    payload.append("file", image);
    payload.append("upload_preset", preset);

    try {
      setImageLoading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudname}/upload`,
        payload,
      );
      console.log(response);
      
      setImageUrl(response.data.secure_url);
      formik.setFieldValue("profileImage", response.data.secure_url);
    } catch (error) {
      toast("Failed to upload image. Please try again.", { theme: "failure" });
    } finally {
      setImageLoading(false);
    }
  }

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      profilePicture:"",
      profileImage: "",
    },
    onSubmit: handleSubmit,
  });


  async function handleSubmit(values) {
    if (user) {
      try {
        setLoading(true);
        setError("");
        const response = await axios.patch(
          `${api_url}/api/users/updateUserDetails/${userId}`,
          values,
          { withCredentials: true },
        );
        if (response.data.success) {
          toast("profile updated successfully", { theme: "success" });
          // formik.resetForm();
          // navigate("/Admin");
        } else {
          setError("Failed to update profile. Please try again.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("You do not have permission to edit this profile.");
    }
  }

  return (
    <section className="adminProfile">
<div className="EditProfile">
      <div className="editUserProfileContainer">
        <h1>Update Your Profile</h1>
        <form onSubmit={formik.handleSubmit} >

          <img src={user.profileImage} alt={user.firstName} />
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
            {imageUrl && (
              <div className="editProfile">
                <img src={imageUrl} alt="Uploaded" className="uploadedImage" />
              </div>
            )}
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="updateProfilebtn" disabled={loading}>
            {loading ? "Please wait..." : "Update profile"}
          </button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default AdminProfile; 