import React, { useEffect, useState } from "react";
import { comp_service } from "../../services/comp.service";

const Complist = () => {
  const [compData, setCompData] = useState({ series: [], totalPages: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await comp_service.getAllCompData(1);
        setCompData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données d'équipe :", error);
        setCompData({ series: [], totalPages: 0 });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Informations de la route</h1>
      {compData.series.map((serie) => (
        <div key={serie.id}>
          <h2>Nom de la série : {serie.fullName}</h2>
          <p>Date de début : {serie.beginAt}</p>
          <p>Date de fin : {serie.endAt}</p>
          <hr />
        </div>
      ))}
    </div>

	
  );
};

export default Complist;
