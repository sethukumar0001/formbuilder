import React, { Fragment, useState } from "react";
import Form from "react-jsonschema-form";
import {
	Card,
	Row,
	Col,
	Modal,
	ModalBody,
	ModalFooter,
	Button,
} from "reactstrap";
import { SchemaTypes } from "./types";
import DeleteLogo from "./svg/delete.svg";
function App() {
	/* -------------------------------------------------------------------------- */
	/*                               UseState Section                             */
	/* -------------------------------------------------------------------------- */

	const [schema, setSchema] = useState({
		title: "New Form",
		properties: {},
	});
	const [uiSchema] = useState({
		firstName: {
			"ui:autofocus": true,
			"ui:emptyValue": "",
			"ui:autocomplete": "family-name",
		},
	});
	const [formData] = useState({});
	const [isOpen, setIsOpen] = useState(false);

	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);

	/* -------------------------------------------------------------------------- */
	/*                               UseEffect Section                            */
	/* -------------------------------------------------------------------------- */
	/* -------------------------------------------------------------------------- */
	/*                               Onchange section                             */
	/* -------------------------------------------------------------------------- */
	const handleModal = () => {
		setIsOpen(!isOpen);
	};
	const handleModal1 = () => {
		setIsOpen1(!isOpen1);
	};
	const handleModal2 = () => {
		setIsOpen2(!isOpen2);
	};

	const handleChangeSchema = (e) => {
		console.log(e.schema);
		console.log(schema);
		let properties = schema.properties;
		setSchema({
			...schema,
			properties: Object.assign(properties, e.schema),
		});
	};

	const handleDelete = (value) => {
		delete schema.properties[value];
		setSchema({
			...schema,
		});
	};

	console.log(Object.keys(schema.properties));
	console.log(schema);

	/* -------------------------------------------------------------------------- */
	/*                               API Section                                  */
	/* -------------------------------------------------------------------------- */
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
		<Fragment>
			<div className="text-center mt-3" style={{cursor:'pointer'}} onClick={handleModal1}>
				View Schema
			</div>
			<div className="text-center mt-3" style={{cursor:'pointer'}} onClick={handleModal2}>
				View UI Schema
			</div>

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
						<div style={{ margin: 15 }}>
							{Object.keys(schema.properties).length > 0 &&
								Object.keys(schema.properties).map((item) => {
									return (
										<li
											style={{
												listStyleType: "none",
												borderWidth: "1px",
												borderColor: "lightGray",
												borderStyle: "solid",
												padding: 10,
												cursor: "pointer",
												textAlign: "center",
												borderRadius: "10px",
												marginTop: "4px",
												// marginLeft:22,
												// marginRight:22
											}}
										>
											<Row>
												<Col md="8">
													<p>{item}</p>
												</Col>
												<Col md="2">
													<img
														src={DeleteLogo}
														alt="Delete Logo"
														style={{ height: 25 }}
														onClick={() => handleDelete(item)}
													/>
												</Col>
												<Col md="2" onClick={handleModal}>
													<img
														src={require(`./images/edit.png`)}
														alt="Edit Logo"
														style={{ height: 25 }}
													/>
												</Col>
											</Row>
										</li>
									);
								})}
						</div>
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

				{/* Edit Modal */}
				<Modal toggle={handleModal} isOpen={isOpen} centered>
					<ModalBody></ModalBody>
					<ModalFooter>
						<Button
							style={{ background: "#0dcaf0", border: "none" }}
							onClick={handleModal}
						>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
				{/* schema Modal */}
				<Modal toggle={handleModal1} isOpen={isOpen1} centered>
					<ModalBody>{JSON.stringify(schema)}</ModalBody>
					<ModalFooter>
						<Button
							style={{ background: "#0dcaf0", border: "none" }}
							onClick={handleModal1}
						>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
				{/* ui schema Modal */}
				<Modal toggle={handleModal2} isOpen={isOpen2} centered>
					<ModalBody>{JSON.stringify(uiSchema)}</ModalBody>
					<ModalFooter>
						<Button
							style={{ background: "#0dcaf0", border: "none" }}
							onClick={handleModal2}
						>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		</Fragment>
	);
}

export default App;
