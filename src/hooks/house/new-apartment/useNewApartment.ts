import { useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

interface FormValues {
  name: string;
  location: string;
  amount: number;
  details: string;
  rooms: number;
  bathrooms: number;
  petFriendly: boolean;
}

const useNewApartment = () => {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [image3, setImage3] = useState<File | null>(null);
  const [image4, setImage4] = useState<File | null>(null);

  const useCreateDropzone = (
    setImage: React.Dispatch<React.SetStateAction<File | null>>,
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    return useDropzone({
      accept: {
        "image/png": [],
        "image/jpg": [],
        "image/jpeg": [],
        "image/webp": [],
      } as Accept,
      multiple: false,
      onDrop: (acceptedFiles) => {
        setImage(acceptedFiles[0] || null);
        setIsDragging(false);
      },
      onDropRejected: () => {
        toast.error(
          "Invalid file type. Please upload an image (PNG, JPG, JPEG, or WEBP).",
        );
        setIsDragging(false);
      },
      onDragEnter: () => {
        setIsDragging(true);
      },
      onDragLeave: () => {
        setIsDragging(false);
      },
    });
  };

  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [isDragging3, setIsDragging3] = useState(false);
  const [isDragging4, setIsDragging4] = useState(false);

  const dropzone1 = useCreateDropzone(setImage1, setIsDragging1);
  const dropzone2 = useCreateDropzone(setImage2, setIsDragging2);
  const dropzone3 = useCreateDropzone(setImage3, setIsDragging3);
  const dropzone4 = useCreateDropzone(setImage4, setIsDragging4);

  const onSubmit = (values: FormValues) => {
    console.log("Form data: ", values);
  };

  return {
    // Images
    image1,
    image2,
    image3,
    image4,

    // Set Images
    setImage1,
    setImage2,
    setImage3,
    setImage4,

    // Dropzones
    dropzone1,
    dropzone2,
    dropzone3,
    dropzone4,

    // Dragging States
    isDragging1,
    isDragging2,
    isDragging3,
    isDragging4,

    // Core Functions
    onSubmit,
  };
};

export default useNewApartment;
