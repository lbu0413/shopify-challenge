import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLike = styled.div`
	.dataLike {
		width: 600px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 10px;
		cursor: pointer;
		border: none;
		padding: 0;
	}
	.dataLike i {
		font-size: 1.5rem;
		margin: 5px;
	}
	.fa-heart {
		color: red;
	}
`;

const Like = () => {
	const [like, setLike] = useState(100);
	const [pressedLike, setPressedLike] = useState(false);

	useEffect(() => {
		const numberOfLikesData = localStorage.getItem("numberOfLikes");
		const likePressedData = localStorage.getItem("likePressed");
		if (numberOfLikesData) {
			setLike(parseInt(numberOfLikesData));
		}
		if (likePressedData === "true") {
			setPressedLike(Boolean(true));
		} else {
			setPressedLike(Boolean(false));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("numberOfLikes", like);
		localStorage.setItem("likePressed", pressedLike);
	});

	const updateLike = () => {
		if (pressedLike === false) {
			setLike(like + 1);
			setPressedLike(true);
		} else {
			setLike(like - 1);
			setPressedLike(false);
		}
	};

	return (
		<StyledLike>
			<div className="dataLike" onClick={updateLike}>
				{pressedLike === false ? (
					<i className="far fa-heart"></i>
				) : (
					<i className="fas fa-heart"></i>
				)}
				{like > 0 ? like : null}
			</div>
		</StyledLike>
	);
};

export default Like;
