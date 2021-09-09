import React, { useState, useEffect } from "react";
import Dates from "./Dates";
import Like from "./Like";
import axios from "axios";
import styled from "styled-components";
import { API_KEY } from "./Keys";

// https://api.nasa.gov/
// https://www.shopify.com/careers/frontend-developer-intern-remote-winter-2022-6932cbed

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

	.dataContainer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

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

	.dataImage {
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: baseline;
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
		margin: 0;
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

	/* .yesterday:hover,
	.tomorrow:hover {
		transform: scale(1.1);
		transition: 0.3s;
	} */
`;

const Home = () => {
	const [nasaData, setNasaData] = useState({});

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
			.then((res) => {
				setNasaData(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<StyledHome>
			<header>
				<Dates nasaData={nasaData} setNasaData={setNasaData} />
			</header>
			<div className="dataContainer">
				<h2 className="dataTitle">{nasaData.title}</h2>
				<div className="dataImage">
					<div className="yesterday">
						<i className="fas fa-arrow-left"></i>
					</div>
					<img src={nasaData.url} alt={nasaData.title} />
					<div className="tomorrow">
						<i className="fas fa-arrow-right"></i>
					</div>
				</div>
				<Like />
				<div className="dataInfo">
					<p>{nasaData.explanation}</p>
				</div>
			</div>
		</StyledHome>
	);
};

export default Home;
