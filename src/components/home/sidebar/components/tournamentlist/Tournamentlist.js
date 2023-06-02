import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { matchs_service } from "../../../../../services/matchs.service";
import { series_service } from "../../../../../services/series.service";

const Tournamentlist = () => {
    const { id } = useParams();
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournamentData = async () => {
            const tournamentData = await series_service.getTournamentBySerieId(id);
            const tournamentsData = await Promise.all(
                tournamentData.data.map(async (tournament) => {
                    const matchsData = await matchs_service.getMatchsByTournamentId(tournament.id);
                    return {
                        id: tournament.id,
                        name: tournament.name,
                        league_name: tournament.serie.leagueId.name + " " + tournament.serie.fullName,
                        begin_at: tournament.beginAt,
                        end_at: tournament.endAt,
                        matchs: matchsData
                    };
                })
            );
            console.log(tournamentsData);
            setTournaments(tournamentsData);
        };

        fetchTournamentData();
    }, [id]);

    return (
        <div>
            <h1>Tournament List</h1>
            {tournaments.map((tournament) => (
                <div key={tournament.id}>
                    <h2>{tournament.name}</h2>
                    <h3>{tournament.league_name}</h3>
                    <h3>{tournament.begin_at}</h3>
                    <h3>{tournament.end_at}</h3>
                    <ul>
                        {tournament.matchs.map((match) => (
                            <li key={match.id}>{match.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Tournamentlist;
