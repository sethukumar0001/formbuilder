import React, { useState, useReducer } from "react";
import Form from "react-jsonschema-form";
import { Card, Row, Col } from "reactstrap";
import { SchemaTypes } from "./types";

function App(props) {
	const [schema, setSchema] = useState({
		title: "New Form",
		properties: {},
	});
	const [uiSchema, setUiSchema] = useState({});
	const [formData, setFormData] = useState({});

	const handleChangeSchema = (e) => {
		console.log(e.schema);
		console.log(schema);
		let properties = schema.properties;
		setSchema({
			...schema,
			properties: Object.assign(properties, e.schema),
		});
		// setSchema({...schema})
		// setUiSchema({...uiSchema})
	};
	console.log(schema);

	const FormAction = ({ schema, uiSchema, formData }) => (
		<Form
			schema={schema}
			uiSchema={uiSchema}
			formData={formData}
			liveOmit
			// onChange={console.log("changed")}
			// onSubmit={console.log("submitted")}
			// onError={console.log("errors")}
			liveValidate
			showErrorList={false}
		/>
	);

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
										<ul
											className="cursor-pointer"
											onClick={(e) => handleChangeSchema(item)}
										>
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
					<hr />
				</Card>
			</div>
			<div style={{ width: "33%" }} className="p-2">
				{" "}
				<Card style={{ minHeight: "610px" }}>
					<h2 className="text-center mt-2">Preview</h2>
					<hr />
					<div style={{ margin: 15 }}>
						<FormAction
							schema={schema}
							uiSchema={uiSchema}
							formData={formData}
						/>
					</div>
				</Card>
			</div>
		</div>
	);
}

export default App;
