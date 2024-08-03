"use client";

import { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import EditBanner from "@/EditBanner/EditBanner";
import Card from "./Card";

const BannerImageComp = () => {
  const [backgrounds, setBackgrounds] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("banners.json")
      .then((res) => res.json())
      .then((data) => setBackgrounds(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEdit = (id) => {
    const data = backgrounds.find((banner) => banner.id === id);
    setEditId(id);
    setCurrentData(data);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleSave = (updatedData) => {
    setBackgrounds((prevBackgrounds) =>
      prevBackgrounds.map((banner) =>
        banner.id === editId ? { ...banner, ...updatedData } : banner
      )
    );
    handleCloseEdit();
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setShowModal(false);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {backgrounds.map((background) => (
          <div key={background.id} className="relative">
            <Card background={background} />
            <MdModeEdit
              onClick={() => handleEdit(background.id)}
              className="absolute top-0 right-0 m-2 cursor-pointer text-white bg-blue-800 
              border border-white p-1 rounded-full text-4xl"
            />
          </div>
        ))}
      </div>
      {isEditing && (
        <EditBanner
          isOpen={showModal}
          onClose={handleCloseEdit}
          data={currentData}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default BannerImageComp;
