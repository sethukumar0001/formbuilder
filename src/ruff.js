import React from "react";
import Form from "react-jsonschema-form";
import { Card, Row, Col } from "reactstrap";
import { SchemaTypes } from "./types";

function App(props) {
	const schema = {
		title: "A registration form",
		description: "A simple form example.",
		type: "object",
		required: ["firstName", "lastName"],
		properties: {
			color: {
				type: "string",
				title: "color picker",
				default: "#151ce6",
			},
			Name: {
				type: "string",
				title: "First name",
				// default: "Chuck",
			},
			lastName: {
				type: "string",
				title: "Last name",
			},
			telephone: {
				type: "string",
				title: "Telephone",
				minLength: 10,
			},
			select: {
				type: "boolean",
				title: "select box",
				description: "This is the select-description",
			},
		},
	};

	const uiSchema = {
		firstName: {
			"ui:autofocus": true,
			"ui:emptyValue": "",
			"ui:autocomplete": "family-name",
		},
		lastName: {
			"ui:emptyValue": "",
			"ui:autocomplete": "given-name",
		},
		age: {
			"ui:widget": "updown",
			"ui:title": "Age of person",
			"ui:description": "(earthian year)",
		},
		bio: {
			"ui:widget": "textarea",
		},
		password: {
			"ui:widget": "password",
			"ui:help": "Hint: Make it strong!",
		},
		date: {
			"ui:widget": "alt-datetime",
		},
		telephone: {
			"ui:options": {
				inputType: "tel",
			},
		},
		select: {
			"ui:widget": "select",
		},
		radio: {
			"ui:widget": "radio",
		},
		color: {
			"ui:widget": "color",
		},
	};

	const formData = {
		firstName: "",
		lastName: "Norris",
		age: 75,
		bio: "Roundhouse kicking asses since 1940",
		password: "noneed",
	};

	return (
		<div className="d-flex justify-center-between mt-5 align-content-center">
			<div style={{ width: "33%" }} className="p-2">
				<Card style={{ minHeight: "610px" }}>
					<h2 className="text-center mt-2">Type</h2>
					<hr />
					<div style={{ margin: 15 }}>
						<Row>
							{SchemaTypes.map((item) => {
								return (
									<Col md="6">
										<ul className="cursor-pointer">
											<li
												style={{
													listStyleType: "none",
													borderWidth: "1px",
													borderColor: "lightGray",
													borderStyle: "solid",
													padding: 14,
													cursor: "pointer",
													textAlign: "center",
													borderRadius: "10px",
												}}
											>
												{item.name}
											</li>
										</ul>
									</Col>
								);
							})}
						</Row>
					</div>
				</Card>
			</div>
			<div style={{ width: "33%" }} className="p-2">
				<Card style={{ minHeight: "610px" }}>
					<h2 className="text-center mt-2">Selected Fields</h2>
					<hr />a
				</Card>
			</div>
			<div style={{ width: "33%" }} className="p-2">
				{" "}
				<Card style={{ minHeight: "610px" }}>
					<h2 className="text-center mt-2">Preview</h2>
					<hr />
					<div style={{ margin: 15 }}>
						<Form
							schema={schema}
							uiSchema={uiSchema}
							formData={formData}
							onChange={console.log("changed")}
							onSubmit={console.log("submitted")}
							onError={console.log("errors")}
							liveValidate
							// showErrorList={false}
						/>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default App;
