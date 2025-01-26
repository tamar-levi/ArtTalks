import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PictureCard from './PictureCard';
import SearchBar from './SearchBar';

function Gallery() {
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await fetch('http://localhost:4000/pictures'); // כתובת ה-API שלך
        const data = await response.json();
        setPictures(data);
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures();
  }, []);

  const filteredPictures = pictures.filter((picture) =>
    picture.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    picture.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePictureClick = (id) => {
    navigate(`/picture/${id}`);
  };

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="gallery">
        {filteredPictures.map((picture) => (
          <div key={picture.id} onClick={() => handlePictureClick(picture.id)}>
            <PictureCard picture={picture} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
