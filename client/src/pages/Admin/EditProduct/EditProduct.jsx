import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useUserStore from "../../../../store/userStore";
import { api_url } from "../../../../utills/config";
import toast from "react-simple-toasts";
import "./EditProduct.css";

const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchProduct = async () => {
      if (user && user.role === "admin") {
        try {
          const response = await axios.get(
            `${api_url}/api/products/getOneProduct/${productId}`,
            { withCredentials: true },
          );
          if (response.data.success) {
            formik.setValues(response.data.data);
          } else {
            setError("Failed to fetch product data.");
          }
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError("Unauthorized");
        navigate("/Page404");
      }
    };

    fetchProduct();
  }, [user, productId, navigate]);

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
      setImageUrl(response.data.secure_url);
      formik.setFieldValue("productImage", response.data.secure_url);
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
      productName: "",
      productPrice: "",
      productDescription: "",
      productImage: "",
    },
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values) {
    if (user?.role === "admin") {
      try {
        setLoading(true);
        setError("");
        const response = await axios.patch(
          `${api_url}/api/products/updateproduct/${productId}`,
          values,
          { withCredentials: true },
        );
        if (response.data.success) {
          toast("Product updated successfully", { theme: "success" });
          formik.resetForm();
          navigate("/AdminProducts");
        } else {
          setError("Failed to update product. Please try again.");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setError("You do not have permission to edit a product.");
    }
  }

  return (
    <div className="EditProduct">
      <div className="addProductContainer">
        <h1>Update Product</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="AddProducts">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              name="productName"
              value={formik.values.productName}
              onChange={formik.handleChange}
            />
          </div>

          <div className="AddProducts">
            <label>Product Price</label>
            <input
              type="number"
              placeholder="Enter Product Price"
              name="productPrice"
              value={formik.values.productPrice}
              onChange={formik.handleChange}
            />
          </div>

          <div className="AddProducts">
            <label>Product Description</label>
            <input
              type="text"
              placeholder="Enter Product Description"
              name="productDescription"
              value={formik.values.productDescription}
              onChange={formik.handleChange}
            />
          </div>

          <div className="uploadimagewrapper">
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
              <div className="AddProducts">
                <img src={imageUrl} alt="Uploaded" className="uploadedImage" />
              </div>
            )}
          </div>

          {error && <p className="error">{error}</p>}
          <button type="submit" className="AddProductbtn" disabled={loading}>
            {loading ? "Please wait..." : "Update Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
