import React, { useState } from "react";
import styled from "styled-components";
import formatDate from "../lib/formatDate";

const StyledLike = styled.div`
	.dataLike {
		width: 600px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 10px;
		border: none;
		padding: 0;
	}
	.dataLike i {
		font-size: 1.5rem;
		margin: 5px;
		cursor: pointer;
	}
	.fa-heart {
		color: #ff335a;
	}
	@media (max-width: 600px) {
		.dataLike {
			margin: 10px;
			width: 400px;
		}
	}
`;

const likeStateData = {
	numberOfLikes: 0,
	likePressed: false,
};

const Like = ({ selectedDate }) => {
	const formattedDate = formatDate(selectedDate);

	const localStorageLike = JSON.parse(localStorage.getItem(formattedDate));
	const [likeState, setLikeState] = useState(localStorageLike || likeStateData);
	const { numberOfLikes, likePressed } = likeState;

	const updateLike = () => {
		localStorage.setItem(
			formattedDate,
			JSON.stringify({
				...likeState,
				numberOfLikes: likePressed ? numberOfLikes - 1 : numberOfLikes + 1,
				likePressed: !likePressed,
			})
		);
		setLikeState({
			numberOfLikes: likePressed ? numberOfLikes - 1 : numberOfLikes + 1,
			likePressed: !likePressed,
		});
	};

	return (
		<StyledLike>
			<div className="dataLike" onClick={() => updateLike()}>
				{likePressed === false ? (
					<i className="far fa-heart"></i>
				) : (
					<i className="fas fa-heart"></i>
				)}
				{numberOfLikes > 0 ? numberOfLikes : null}
			</div>
		</StyledLike>
	);
};

export default Like;
