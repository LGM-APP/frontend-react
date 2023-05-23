import React from "react";

const Popup = ({ onConfirm, onCancel }) => {
	return (
		<div className="bg-white p-4 rounded shadow border border-cyan-950">
			<h3 className="text-lg font-semibold mb-2">Confirmation</h3>
			<p>Êtes-vous sûr de vouloir valider le panier ?</p>
			<div className="flex justify-end mt-4">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
					onClick={onConfirm}
				>
					Confirmer
				</button>
				<button
					className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
					onClick={onCancel}
				>
					Annuler
				</button>
			</div>
		</div>
	);
};

export default Popup;
