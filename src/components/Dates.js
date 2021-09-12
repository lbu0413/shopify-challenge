import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDates = styled.div`
	font-family: "Kaisei Tokumin", serif;
	box-sizing: border-box;
	display: flex;
`;
const StyledDatePicker = styled(DatePicker)`
	margin: 20px;
	padding: 3px;
	font-size: 1.3rem;
	cursor: pointer;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.75) 1px 1px 1px 0px;

	&:focus {
		outline: none;
		border: none;
		box-shadow: rgba(0, 0, 0, 2) 2px 2px 2px 0px;
	}
	&:hover {
		box-shadow: rgba(0, 0, 0, 2) 2px 2px 2px 0px;
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
				minDate={new Date("06-16-1995")}
				showYearDropdown
				scrollableYearDropdown
				yearDropdownItemNumber={30}
			/>
		</StyledDates>
	);
};

export default Dates;
