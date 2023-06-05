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
                        logo: tournament.serie.leagueId.imageUrl,
                        name: tournament.name,
                        league_name: tournament.serie.leagueId.name + " " + tournament.serie.fullName,
                        begin_at: tournament.beginAt,
                        end_at: tournament.endAt,
                        matchs: matchsData
                    };
                })
            );
            setTournaments(tournamentsData);
        };

        fetchTournamentData();
    }, [id]);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                {tournaments.map((tournament) => (
                    <div key={tournament.id} className="my-4">
                        <h1 className="text-gray-800 text-xl font-bold sm:text-2xl mb-2">{tournament.league_name}</h1>
                        <img className="w-32 h-32" src={tournament.logo} alt="Tournament logo" />
                        <h3 className="text-md mb-2">{tournament.name}</h3>
                        <h3 className="text-md mb-2">Date de début : {tournament.begin_at}</h3>
                        <h3 className="text-md mb-4">Date de fin : {tournament.end_at}</h3>
                    </div>
                ))}
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6 text-center">Liste des matchs</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 bg-gray-100 divide-y">
                        {tournaments.map((tournament) => (
                            tournament.matchs.map((match) => (
                                <tr key={match.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{match.name}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tournamentlist;
