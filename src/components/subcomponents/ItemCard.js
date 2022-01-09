import React from "react";

const ItemCard = ({ item }) => {
	return (
		<div className="col" >
			<div className="card h-100">
				<img
					src={item.images[0]}
					className="card-img-top"
					alt="Hollywood Sign on The Hill"
				/>
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.description}</p>
					<p className="card-text " ><i className="fas fa-rupee-sign"></i>{item.expected_price} Just </p>
					<p className="card-text" ><i className="fas fa-map-marker-alt"></i> {item.location_in_words}</p>
				</div>
			</div>
		</div>
	);
};
export default ItemCard;