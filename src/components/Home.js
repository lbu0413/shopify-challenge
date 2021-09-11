import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Dates from "./Dates";
import Like from "./Like";
import client from "../lib/client";
import formatDate from "../lib/formatDate";
import styled from "styled-components";

const StyledHome = styled.div`
	font-family: "Kaisei Tokumin", serif;
	box-sizing: border-box;
	justify-content: center;
	align-items: center;
	background-color: #1f1f1f;
	color: white;
	height: 100vh;

	header {
		display: flex;
	}

	.dayAfter,
	.dayBefore {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
	}
`;
const ImageContainer = styled.section`
	& > img {
		width: 400px;
		height: 400px;
		border: white;
		border-radius: 12px;
	}
	width: 90%;
	display: flex;
	justify-content: space-around;
	align-items: baseline;
`;

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ArrowButtonWrapper = styled(Wrapper)`
	color: white;
	& > i {
		font-size: 2rem;
		cursor: pointer;
	}
`;

const DataExplanation = styled.section`
	width: 600px;
	& > p {
		margin: 0;
		font-size: 14px;
	}
	& > p:last-child {
		display: flex;
		justify-content: flex-end;
		margin-top: 5%;
		font-size: 1rem;
	}
`;

const Title = styled.h2``;

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
		const fetch = async () => {
			setLoading(true);
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
			{loading ? (
				<Loader />
			) : (
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
								<i className="fas fa-arrow-left"></i>
							</ArrowButtonWrapper>
							<img src={nasaData.url} alt={nasaData.title} />
							<ArrowButtonWrapper onClick={() => handleDate()}>
								<i className="fas fa-arrow-right"></i>
							</ArrowButtonWrapper>
						</ImageContainer>
						<Like />
						<DataExplanation>
							<p>{nasaData.explanation}</p>
							<p>©{nasaData.copyright}</p>
						</DataExplanation>
					</Wrapper>
				</StyledHome>
			)}
		</>
	);
};

export default Home;
