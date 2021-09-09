import React, { useState, useEffect } from "react";
import Dates from "./Dates";
import Like from "./Like";
import axios from "axios";
import styled from "styled-components";
import { API_KEY } from "./Keys";
import { ClipLoader } from "react-spinners";

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

	.dataImage {
		width: 90%;
		display: flex;
		justify-content: space-around;
		align-items: baseline;
	}

	.dayAfter,
	.dayBefore {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
	}
	.dayBefore i,
	.dayAfter i {
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

	.dataInfo .copyright {
		display: flex;
		justify-content: flex-end;
		margin-top: 5%;
		font-size: 1rem;
	}

	/* .dayBefore:hover,
	.tomorrow:hover {
		transform: scale(1.1);
		transition: 0.3s;
	} */
`;

const StyledLoading = styled.div`
	height: 100vh;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h3,
	.fa-space-shuttle {
		color: white;
	}

	.fa-space-shuttle {
		margin: 10px;
		font-size: 40px;
		animation: loading-animation 3s infinite;
	}
	@keyframes loading-animation {
		0% {
			transform: translateX(-300%);
		}
		50% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(300%);
		}
	}
`;

const Home = () => {
	const [nasaData, setNasaData] = useState({});
	const [loading, setLoading] = useState(true);
	const [loadingColor, setLoadingColor] = useState("#9013FE");

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
			.then((res) => {
				setNasaData(res.data);
				console.log(res.data);
				setTimeout(() => {
					setLoading(false);
				}, 3000);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			{loading ? (
				<StyledLoading>
					<h3>Data from NASA just took off..</h3>
					<i className="fas fa-space-shuttle"></i>
					<ClipLoader
						className="loadingScreen"
						color={loadingColor}
						loading={loading}
						size={150}
					/>
				</StyledLoading>
			) : (
				<StyledHome>
					<header>
						<Dates nasaData={nasaData} setNasaData={setNasaData} />
					</header>
					<div className="dataContainer">
						<h2 className="dataTitle">{nasaData.title}</h2>
						<div className="dataImage">
							<div className="dayBefore">
								<i className="fas fa-arrow-left"></i>
							</div>
							<img src={nasaData.url} alt={nasaData.title} />
							<div className="dayAfter">
								<i className="fas fa-arrow-right"></i>
							</div>
						</div>
						<Like />
						<div className="dataInfo">
							<p>{nasaData.explanation}</p>
							<p className="copyright">©{nasaData.copyright}</p>
						</div>
					</div>
				</StyledHome>
			)}
		</>
	);
};

export default Home;
