"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface EditBannerProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  onSave: (updatedData: any) => void;
}

const EditBanner: React.FC<EditBannerProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  
}) => {
  const [formData, setFormData] = useState(data);
  const [tempImage, setTempImage] = useState<string | null>(null);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedData = { ...formData };
    if (tempImage) {
      updatedData.image = tempImage;
    }
    onSave(updatedData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <>

      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={isOpen}
        readOnly
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit Banner</h3>
          <div className="py-4">
            <p>Title</p>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
              placeholder="Title"
            />

              <p>Description</p>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
              placeholder="Description"
            />




            <p>Image</p>
            <div className="mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="input input-bordered w-full"
              />
              {(tempImage || formData.image) && (
                <Image
                  src={tempImage || formData.image}
                  alt="Selected"
                  width={100}
                  height={100}
                  className="mt-2 w-[100px] h-[100px] rounded-full"
                />
              )}
            </div>
            <button onClick={handleSave} className="btn btn-primary mr-2">
              Save
            </button>
            <button onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          onClick={onClose}
        >
          Close
        </label>
      </div>
    </>
  );
};

export default EditBanner;
