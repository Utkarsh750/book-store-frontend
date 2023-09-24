import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar()

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`https://book-store-backend-h5sw.onrender.com/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully', { variant: 'success' })
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happend. Please Check console");
        enqueueSnackbar('Error', {variant: 'error'})
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-500 rounded-xl w-[600px] p-4 mx-auto">
        <h3 className="text-2xl">Are You Sure You Want to Delete this Book</h3>
        <button
          className="p-4 bg-red-700 text-white m-8 w-full"
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
