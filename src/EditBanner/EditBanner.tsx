'use client'

import React, { useState } from 'react';

interface EditBannerProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  onSave: (updatedData: any) => void;
}

const EditBanner: React.FC<EditBannerProps> = ({ isOpen, onClose, data, onSave }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" checked={isOpen} readOnly />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit Banner</h3>
          <div className="py-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
              placeholder="Title"
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
              placeholder="Description"
            />
            {/* Add more fields as needed */}
          </div>
          <button onClick={handleSave} className="btn btn-primary mr-2">Save</button>
          <button onClick={onClose} className="btn">Close</button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7" onClick={onClose}>Close</label>
      </div>
    </>
  );
};

export default EditBanner;
