import React from "react";
import { NavLink } from "react-router-dom";

function MainPage(props) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignContent: "center",
			}}
		>
			<div
				style={{
					marginLeft: "25%",
					width: "100%",
					marginTop: "20%",
					padding: "5%",
					background: "lightGray",
					cursor: "pointer",
				}}
			>
				<NavLink to="/from-scratch" style={{ textDecoration: "none" }}>
					<p style={{ textAlign: "center", color: "black" }}>
						Form Builder -Scratch
					</p>
				</NavLink>
			</div>
			<div
				style={{
					marginRight: "25%",
					marginTop: "20%",
					padding: "5%",
					width: "100%",
					background: "#82E0AA",
					cursor: "pointer",
				}}
			>
				<NavLink to="/from-builder" style={{ textDecoration: "none" }}>
					<p style={{ textAlign: "center", color: "black" }}>
						Form Builder - React-jsonschema-form
					</p>
				</NavLink>
			</div>
		</div>
	);
}

export default MainPage;
