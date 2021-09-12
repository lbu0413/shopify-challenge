import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Dates from "./Dates";
import Like from "./Like";
import client from "../lib/client";
import formatDate from "../lib/formatDate";
import styled from "styled-components";

const StyledHome = styled.div`
	box-sizing: border-box;
	font-family: "Kaisei Tokumin", serif;
	box-sizing: border-box;
	background-color: white;
	height: 100vh;
	& > header {
		display: flex;
	}
`;
const ImageContainer = styled.section`
	& > img {
		width: 400px;
		height: 400px;
		border: white;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
			rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
			rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
	}
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: end;
	margin-bottom: 20px;

	@media (max-width: 800px) {
		& > img {
			width: 300px;
			height: 300px;
		}
	}
`;

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0;
`;

const ArrowButtonWrapper = styled(Wrapper)`
	& > i {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #1f1f1f;
		font-size: 2rem;
		cursor: pointer;
	}
`;

const DataExplanation = styled.section`
	width: 600px;
	padding: 10px;
	& > p {
		margin: 0;
		font-size: 14px;
	}
	& > p:last-child {
		display: flex;
		justify-content: flex-end;
		margin: 20px;
		font-size: 1rem;
	}
	@media (max-width: 800px) {
		width: 80%;
	}
`;

const Title = styled.h2`
	width: 80%;
	text-align: center;
`;

const initialData = {
	date: "",
	explanation: "",
	hdurl: "",
	media_type: "",
	service_version: "",
	title: "",
	url: "",
};

const Home = () => {
	const [nasaData, setNasaData] = useState(initialData);
	const [loading, setLoading] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());

	useEffect(() => {
		setLoading(true);
		const fetch = async () => {
			const { data, status } = await client(formatDate(selectedDate));
			if (status === 200) setNasaData(data);
			setLoading(false);
		};
		fetch();
	}, [selectedDate]);

	const handleDate = (direction = 1) => {
		const today = new Date();
		const delta = 24 * 60 * 60 * 1000 * direction;
		const resultDate = new Date(selectedDate.getTime() + delta);
		if (resultDate > today) return;
		setSelectedDate(resultDate);
	};
	return (
		<>
			<StyledHome>
				<header>
					<Dates
						nasaData={nasaData}
						selectedDate={selectedDate}
						setSelectedDate={setSelectedDate}
					/>
				</header>
				<Wrapper>
					<Title>{nasaData.title}</Title>
					<ImageContainer>
						<ArrowButtonWrapper onClick={() => handleDate(-1)}>
							{formatDate(selectedDate) !==
							formatDate(new Date("06-16-1995")) ? (
								<i className="fas fa-chevron-left"></i>
							) : null}
						</ArrowButtonWrapper>
						<img src={nasaData.url} alt={nasaData.title} />
						<ArrowButtonWrapper onClick={() => handleDate()}>
							{formatDate(selectedDate) !== formatDate(new Date()) ? (
								<i className="fas fa-chevron-right"></i>
							) : null}
						</ArrowButtonWrapper>
					</ImageContainer>
					<DataExplanation>
						{loading ? <Loader /> : <Like selectedDate={selectedDate} />}
						<p>{nasaData.explanation}</p>
						{nasaData.copyright ? <p>©{nasaData.copyright}</p> : <p>{null}</p>}
					</DataExplanation>
				</Wrapper>
			</StyledHome>
		</>
	);
};

export default Home;
