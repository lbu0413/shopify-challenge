import React from "react";
import styled from "styled-components";
import { BarLoader } from "react-spinners";

const StyledLoading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.fa-space-shuttle {
		margin: 10px;
		font-size: 30px;
		animation: loading-animation 3s infinite;
	}
	@keyframes loading-animation {
		0% {
			transform: translateX(-500%);
		}
		50% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(700%);
		}
	}
`;

const Loader = () => {
	return (
		<StyledLoading>
			<i className="fas fa-space-shuttle"></i>
			<BarLoader
				className="loadingScreen"
				color="#1f1f1f"
				loading={true}
				width="100%"
				speedMultiplier="0.7"
			/>
		</StyledLoading>
	);
};

export default Loader;
