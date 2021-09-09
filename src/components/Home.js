import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const API_KEY = "wZ6sdAEOi88UthBmNdFFNB4RAiZclTNazxyHJ2Wi";

const StyledHome = styled.div`
	font-family: "Kaisei Tokumin", serif;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	background-color: black;
	color: white;
	height: 100vh;

	header {
		display: flex;
	}

	.dataDate {
		padding: 1%;
		font-size: 20px;
	}

	.dataContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.dataLike {
		display: flex;
		align-items: center;
		margin: 0;
		cursor: pointer;
		border: none;
		padding: 0;
	}
	.dataLike i {
		font-size: 1.5rem;
		margin: 5px;
	}

	.dataImage {
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.tomorrow,
	.yesterday {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
	}
	.yesterday i,
	.tomorrow i {
		font-size: 2rem;
		color: white;
		cursor: pointer;
	}

	.dataImage img {
		width: 400px;
		height: 400px;
		border: white;
	}
	.dataInfo {
		width: 600px;
	}

	.dataInfo p {
		font-size: 14px;
	}
	.myself {
		margin: 0;
		padding: 1%;
		font-size: 20px;
	}
	.fa-heart {
		color: red;
	}

	.yesterday:hover,
	.tomorrow:hover {
		transform: scale(1.1);
		transition: 0.3s;
	}
`;

const Home = () => {
	const [nasaData, setNasaData] = useState({});
	const [like, setLike] = useState(100);
	const [pressedLike, setPressedLike] = useState(false);

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
			.then((res) => {
				setNasaData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const likeUpdate = () => {
		if (pressedLike === false) {
			setLike(like + 1);
			setPressedLike(true);
		} else {
			setLike(like - 1);
			setPressedLike(false);
		}
	};
	return (
		<StyledHome>
			<header>
				<div className="dataDate">{nasaData.date}</div>
			</header>
			<div className="dataContainer">
				<h2 className="dataTitle">{nasaData.title}</h2>
				<div className="dataImage">
					<div className="yesterday">
						<i className="fas fa-arrow-left"></i>
						<p>Yesterday</p>
					</div>
					<img src={nasaData.url} alt={nasaData.title} />
					<div className="tomorrow">
						<i className="fas fa-arrow-right"></i>
						<p>Tomorrow</p>
					</div>
				</div>

				<div className="dataLike" onClick={likeUpdate}>
					{pressedLike === false ? (
						<i className="far fa-heart"></i>
					) : (
						<i className="fas fa-heart"></i>
					)}
					{like > 0 ? like : null}
				</div>
				<div className="dataInfo">
					<p>{nasaData.explanation}</p>
				</div>
			</div>
		</StyledHome>
	);
};

export default Home;
