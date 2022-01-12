import React from "react";

const ItemCard = ({ item }) => {
	return (
		<div className="col" >
			<div className="card h-100">
				<div style={{ display: 'flex', justifyContent: 'flex-start', position: 'absolute', left: '0' }} className="categorycontains">
					<span className={`badge rounded-pill bg-${item.category.color}`} style={{ right: '89%', zIndex: '1' }}> {item.category.name} </span>
				</div>
				<img
					src={item.images[0]}
					className="card-img-top"
					alt="Hollywood Sign on The Hill"
				/>
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.description}</p>
					<p className="card-text " ><i className="fas fa-rupee-sign"></i>{item.expected_price}  </p>
				</div>
			</div>
		</div>
	);
};
export default ItemCard;