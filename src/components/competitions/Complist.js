import React, { useEffect, useState } from "react";
import { comp_service } from "../../services/comp.service";
import ComplistTable from "./ComplistTable";
import Pagination from "../pagination/Pagination";

const Complist = () => {
  const [compData, setCompData] = useState({ series: [], totalPages: 0 });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await comp_service.getAllCompData(currentPage);
        setCompData(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données d'équipe :", error);
        setCompData({ series: [], totalPages: 0 });
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      <h1 className="text-6xl">Informations de la route</h1>
      <ComplistTable series={compData.series} />
      <Pagination
        currentPage={currentPage}
        totalPages={compData.totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Complist;
