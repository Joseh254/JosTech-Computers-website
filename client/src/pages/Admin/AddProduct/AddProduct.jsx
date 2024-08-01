import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import "./AddProduct.css";
import useUserStore from "../../../../store/userStore";
import { useNavigate } from "react-router-dom";
import { api_url } from "../../../../utills/config";
import toast from "react-simple-toasts";

function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const cloudname = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleSubmit = async (values) => {
    if (user) {
      if (user.role === "admin") {
        try {
          setLoading(true);
          setError("");
          const response = await axios.post(
            `${api_url}/api/products/create`,
            { ...values, productImage: imageUrl },
            { withCredentials: true },
          );

          if (response.data.success === true) {
            toast("Product Added to Database", { theme: "success" });
            formik.resetForm();
            setImageUrl("");
          } else {
            toast("Failed to add product. Please try again.", {
              theme: "failure",
            });
          }
        } catch (error) {
          setError(error.message);
          toast("Failed to add product. Please try again.", {
            theme: "failure",
          });
        } finally {
          setLoading(false);
        }
      } else {
        window.open(window.location.href, "_blank");
        navigate("/Page404");
      }
    } else {
      navigate("/Page404");
    }
  };

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
    } catch (error) {
      console.log(error);
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
    validate: (values) => {
      let errors = {};
      if (!values.productName) errors.productName = "Product name is required";
      if (!values.productPrice)
        errors.productPrice = "Product price is required";
      if (!values.productDescription)
        errors.productDescription = "Product description is required";
      if (!imageUrl) errors.productImage = "Product image is required";
      return errors;
    },
  });

  return (
    <>
      <AdminHeader />
      <h1 className="messagesheading">Add Products To Database</h1>
      <div className="addproductswrapper">
        <div className="addProductContainer">
          <form onSubmit={formik.handleSubmit}>
            <div className="AddProducts">
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Enter Product Name"
                name="productName"
                value={formik.values.productName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.productName && formik.errors.productName && (
                <p>{formik.errors.productName}</p>
              )}
            </div>

            <div className="AddProducts">
              <label>Product Price</label>
              <input
                type="number"
                placeholder="Enter Product Price"
                name="productPrice"
                value={formik.values.productPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.productPrice && formik.errors.productPrice && (
                <p>{formik.errors.productPrice}</p>
              )}
            </div>

            <div className="AddProducts">
              <label>Product Description</label>
              <input
                type="text"
                placeholder="Enter Product Description"
                name="productDescription"
                value={formik.values.productDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.touched.productDescription &&
                formik.errors.productDescription && (
                  <p>{formik.errors.productDescription}</p>
                )}
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
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="uploadedImage"
                  />
                </div>
              )}
            </div>

            {error && <p className="error">{error}</p>}

            <button
              type="submit"
              className="AddProductbtn"
              disabled={loading || imageLoading}
            >
              {loading ? "Please wait..." : "Add product"}
            </button>
            <p className="addedToDbMessage">{message}</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
