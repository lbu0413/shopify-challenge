import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { API_KEY } from "./Keys";
import "react-datepicker/dist/react-datepicker.css";

const StyledDates = styled.div`
	font-family: "Kaisei Tokumin", serif;
	box-sizing: border-box;
	display: flex;
	.dataDate {
		width: 200px;
		padding: 5%;
		font-size: 20px;
		cursor: pointer;
		border: none;
		color: white;
	}
	.picker {
		margin: 10%;
		padding: 1%;
		font-size: 1.5rem;
		cursor: pointer;
		background-color: black;
		color: white;
		border: none;
	}
	.picker:focus {
		outline: none;
		border: none;
	}
	.picker:hover {
		text-decoration: underline;
	}
`;

const Dates = ({ nasaData }) => {
	const formatDate = (sampleDate) => {
		const year = sampleDate.getFullYear();
		const month = (sampleDate.getMonth() + 1).toString().padStart(2, "0");
		const date = sampleDate.getDate().toString().padStart(2, "0");
		return `${year}-${month}-${date}`;
	};

	const [selectedDate, setSelectedDate] = useState(new Date());

	return (
		<StyledDates>
			<div className="dataDate">{nasaData.date}</div>
			{/* <DatePicker
				className="picker"
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				dateFormat="yyyy-MM-dd"
				showYearDropdown
			/> */}
		</StyledDates>
	);
};

export default Dates;
