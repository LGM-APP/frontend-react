import React, { useEffect, useState } from "react";
import { fav_service } from "../../services/fav.service";
import { team_service } from "../../services/teams.service";

const Favorite = () => {
    const [favList, setFavList] = useState([]);
    const [teamInfo, setTeamInfo] = useState([]);

    useEffect(() => {
		const fetchData = async () => {
			try {
				const favData = await fav_service.getFavoriteTeams();
				setFavList(favData.data);

                const teamData = await team_service.getAllTeamsData(1);
                setTeamInfo(teamData.teams);

			} catch (error) {
				console.error(
					"Erreur lors de la récupération des favoris :",
					error
				);
			}
		};
		fetchData();
	}, [favList]);

    return (
        <div className="bg-gray-100 p-4 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Liste des favoris</h2>
        {favList && favList.length > 0 && teamInfo ? (
            <ul>
                {favList.map((fav) => {
                    const team = teamInfo.find(team => team.id === fav.idTeam);
                    return team ? (
                        <li className="p-4" key={team.id}>
                            <img className="w-16 h-16" src={team.imageUrl} alt={team.name} />
                            <p><span className="font-semibold">ID de l'équipe :</span> {team.id}</p>
                            <p><span className="font-semibold">Nom de l'équipe :</span> {team.name}</p>
                        </li>
                    ) : null;
                })}
            </ul>
        ) : (
            <p>Aucune équipe ajoutée dans la liste des favoris</p>
        )}
    </div>
    );
};

export default Favorite;
