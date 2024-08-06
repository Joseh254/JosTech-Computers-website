import React from 'react'
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useUserStore from '../../../store/userStore';
import { api_url } from '../../../utills/config';
import toast from "react-simple-toasts";
import "./Profile.css"

const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const user = useUserStore((state) => state.user);

  
  return (
    <div>Profile</div>
  )
}

export default Profile; 