import React from "react";
import styled from "styled-components";
import { ClipLoader } from "react-spinners";

const StyledLoading = styled.div`
	height: 100vh;
	background-color: #1f1f1f;
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

const Loader = () => {
	return (
		<StyledLoading>
			<h3>Data from NASA just took off..</h3>
			<i className="fas fa-space-shuttle"></i>
			<ClipLoader
				className="loadingScreen"
				color="#9013FE"
				loading={true}
				size={150}
			/>
		</StyledLoading>
	);
};

export default Loader;
