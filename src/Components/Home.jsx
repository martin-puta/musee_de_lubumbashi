import React from 'react';
import '../Style/Home.css';
import MyImg from '../assets/visete.jpeg';

function Home() {
  return (
    <div className="container">
      <div className="text-section">
      <h1>Bienvenue sur le sites de musee de lubumbashi</h1>  
            <p>Bienvenue dans l’univers riche et diversifié des musées congolais. Explorez des collections uniques qui témoignent de l'histoire, de la culture et de l'art de notre pays.</p>  
            <a href="#" class="button">Voir plus →</a>  
      </div>
      <div className="image-section">
        <img src={MyImg} alt="Visite de musée" />
      </div>
    </div>
  );
}

export default Home;