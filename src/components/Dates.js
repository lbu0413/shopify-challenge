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
	let [selectedDate, setSelectedDate] = useState(new Date());
	return (
		<StyledDates>
			<DatePicker
				className="picker"
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				dateFormat="yyyy-MM-dd"
				showYearDropdown
			/>
		</StyledDates>
	);
};

export default Dates;
