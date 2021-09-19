import React from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledDates = styled.div`
	font-family: "Kaisei Tokumin", serif;
	box-sizing: border-box;
	display: flex;
`;

const StyledIcon = styled.div`
	margin: 20px 5px 20px 20px;
	font-size: 1.3rem;
	@media (max-width: 720px) {
		font-size: 16px;
	}
`;
const StyledDatePicker = styled(DatePicker)`
	margin: 20px 20px 20px 0px;
	padding: 3px;
	width: 120px;
	font-size: 1.3rem;
	cursor: pointer;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.75) 2px 2px 2px 0px;
	-webkit-appearance: none;
	&:focus {
		outline: none;
		border: none;
		box-shadow: rgba(0, 0, 0, 2) 3px 3px 3px 0px;
	}
	&:hover {
		box-shadow: rgba(0, 0, 0, 2) 3px 3px 3px 0px;
	}
	@media (max-width: 720px) {
		width: 100px;
		font-size: 16px;
	}
`;

const Dates = ({ setSelectedDate, selectedDate }) => {
	return (
		<StyledDates>
			<StyledIcon>
				<i className="far fa-calendar-alt"></i>
			</StyledIcon>
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
