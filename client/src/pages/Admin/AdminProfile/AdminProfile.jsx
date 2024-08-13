import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { api_url } from "../../../../utills/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminProfile.css";

const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

function AdminProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      if (user && user.role === "admin") {
        try {
          const response = await axios.get(
            `${api_url}/api/users/getOneUser/${userId}`,
            { withCredentials: true },
          );

          if (response.data.success) {
            formik.setValues(response.data.data);
            setImageUrl(response.data.data.profilePicture || "");
            setImagePreview(response.data.data.profilePicture || "");
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
  }, [user, userId, navigate]);

  async function handleImageUpload() {
    if (!image) {
      return ""; // No image to upload
    }

    const payload = new FormData();
    payload.append("file", image);
    payload.append("upload_preset", preset);

    try {
      setImageLoading(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudname}/upload`,
        payload,
      );

      if (response.data.secure_url) {
        setImageUrl(response.data.secure_url);
        formik.setFieldValue("profilePicture", response.data.secure_url);
        return response.data.secure_url;
      } else {
        toast.error("Failed to upload image. Please try again.");
        return "";
      }
    } catch (error) {
      toast.error("Failed to upload image. Please try again.");
      return "";
    } finally {
      setImageLoading(false);
    }
  }

  function handleChange(e) {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
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

          // Handle image upload if a new image is selected
          if (image) {
            const uploadedImageUrl = await handleImageUpload();
            if (!uploadedImageUrl) {
              setLoading(false);
              return toast.error("Faile to upload image");
            }
            values.profilePicture = uploadedImageUrl; // Update the profile picture URL
          }

          // Submit profile update
          const response = await axios.patch(
            `${api_url}/api/users/updateUserDetails/${userId}`,
            values,
            { withCredentials: true },
          );

          if (response.data.success) {
            toast.success("Profile updated successfully");
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
    },
  });

  return (
    <section className="adminProfile">
      <div className="EditProfile">
        <div className="editUserProfileContainer">
          <h1>Update Your Profile</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="profileImageWrapper">
              <img src={imagePreview || user.profilePicture} alt="Profile" />
            </div>
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
            </div>

            {error && <p className="error">{error}</p>}
            <button
              type="submit"
              className="updateProfilebtn"
              disabled={loading}
            >
              {loading ? "Please wait..." : "Update profile"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminProfile;
