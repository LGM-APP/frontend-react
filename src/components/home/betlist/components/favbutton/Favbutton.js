import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { fav_service } from '../../../../../services/fav.service';

const FavButton = ({ teamId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = async () => {
    try {
      if (isFavorite) {
        await fav_service.deleteFavoriteTeam(teamId);
      } else {
        await fav_service.addFavoriteTeam(teamId);
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Erreur lors de la mise à jour des favoris : ', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="focus:outline-none"
    >
      <FontAwesomeIcon
        icon={isFavorite ? fasHeart : farHeart}
        className="text-red-500 text-xl"
      />
    </button>
  );
};

export default FavButton;
