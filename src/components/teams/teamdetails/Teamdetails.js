import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { team_service } from "../../../services/teams.service";
import { matchs_service } from "../../../services/matchs.service";
import Loader from "../../loader/Loader";

const Teamdetails = () => {
  const { id } = useParams();
  const [matchs, setMatchs] = useState([]);
  const [players, setPlayers] = useState([]);


  const fetch_all_data = async () => {
	const promises = [matchs_service.getMatchsByTeamId(id), team_service.getPlayerByTeamId(id)];
	await Promise.all(promises);
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      console.log("id", id);
      console.log("matchs", matchs);
      console.log("players", players);
      try {
        const matchsData = await matchs_service.getMatchsByTeamId(id);
        setMatchs(matchsData.matchs);

        const playersData = await team_service.getPlayerByTeamId(id);
        setPlayers(playersData.players);
      } catch (error) {
        console.error("Erreur lors de la récupération des données d'équipe :", error);
      }

    };

    fetchTeamData();
  });

  if (matchs.length === 0 && players.length === 0) {
    return (
      <div>
        <h1>Team Details</h1>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1>Team Details</h1>

      <h2>Matchs</h2>
      <ul>
        {matchs.map((match) => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul>

      <h2>Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Teamdetails;
