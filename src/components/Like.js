import React, { useState, useEffect } from "react";

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
		<div className="dataLike" onClick={updateLike}>
			{pressedLike === false ? (
				<i className="far fa-heart"></i>
			) : (
				<i className="fas fa-heart"></i>
			)}
			{like > 0 ? like : null}
		</div>
	);
};

export default Like;
