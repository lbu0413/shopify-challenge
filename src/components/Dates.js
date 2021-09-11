import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDates = styled.div`
	font-family: "Kaisei Tokumin", serif;
	box-sizing: border-box;
	display: flex;
`;
const StyledDatePicker = styled(DatePicker)`
	margin: 10%;
	padding: 1%;
	font-size: 1.5rem;
	cursor: pointer;
	background-color: #1f1f1f;
	color: white;
	border: none;

	&:focus {
		outline: none;
		border: none;
	}
	&:hover {
		text-decoration: underline;
	}
`;

const Dates = ({ setSelectedDate, selectedDate }) => {
	return (
		<StyledDates>
			<StyledDatePicker
				selected={selectedDate}
				onChange={(date) => setSelectedDate(date)}
				dateFormat="yyyy-MM-dd"
				maxDate={new Date()}
				showYearDropdown
			/>
		</StyledDates>
	);
};

export default Dates;
