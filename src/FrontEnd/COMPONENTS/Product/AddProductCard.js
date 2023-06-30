import React, { useState } from 'react'
import './ProductCard.css'
import './PopUp.css'
import axios from 'axios';


const AddProductCard = ({ data }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [titre, setTitre] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [prix, setPrix] = useState('');
  const [image, setImage] = useState('');

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faites quelque chose avec les données soumises (par exemple, les envoyer à un serveur)
    const data = {
      titre: titre,
      restaurant: restaurant,
      prix: prix,
      image: image
    };

    axios.post('/api/menu', data)
      .then(response => {
        console.log(response.data);
        // Effectuez les actions nécessaires après l'enregistrement des données
      })
      .catch(error => {
        console.error(error);
        // Gérez les erreurs
      });

    // Réinitialisez les champs du formulaire
    setTitre('');
    setRestaurant('');
    setPrix('');
    setImage('');
    
  
    
    console.log(titre, prix, image, restaurant);
    closePopup();
  };

  return (
    <div className='product'>
      <div className='s1'>
        <svg id="Layer_1"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" onClick={openPopup} >
          <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z"/>
        </svg>
        {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Ajouter un plat</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="titre">Titre du plat:</label>
              <input type="text" id="titre" name="titre" value={titre} onChange={(e) => setTitre(e.target.value)} required />

              <label htmlFor="restaurant">Nom du Restaurant:</label>
              <input type="text" id="restaurant" name="restaurant" value={restaurant} onChange={(e) => setRestaurant(e.target.value)} required />

              <label htmlFor="prix">Prix:</label>
              <input type="text" id="prix" name="prix" value={prix} onChange={(e) => setPrix(e.target.value)} required />

              <label htmlFor="image">URL de l'image:</label>
              <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} required />

              <button type="submit">Ajouter</button>
              <button type="button" onClick={closePopup}>Annuler</button>
            </form>
          </div>
        </div>
      )}
      </div>
      
    </div>
    
  )
}

export default AddProductCard