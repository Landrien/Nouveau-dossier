import React, { useState, useEffect } from 'react';

const DatabaseComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effectue une requête à la base de données pour récupérer les données
    fetchDataFromDatabase()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  const fetchDataFromDatabase = async () => {
    // Effectuez ici votre logique pour récupérer les données de la base de données
    // Par exemple, vous pouvez utiliser la bibliothèque axios pour effectuer une requête HTTP
    // vers une API qui renvoie les données
    const response = await axios.get('/api/data');
    return response.data;
  };

  return (
    <div>
      <h1>Données de la base de données :</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseComponent;
