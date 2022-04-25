import React, { Fragment, useState } from "react";
import Form from "react-jsonschema-form";
import {
	Card,
	Row,
	Col,
} from "reactstrap";
import { SchemaTypes } from "./types";
import DeleteLogo from "./svg/delete.svg";
import DuplicateAddModal from "./modal/dupAddModal";
import DeleteModal from "./modal/deleteModal";
import SettingsModal from "./modal/settingsModal";
import UiSchemaModal from "./modal/uiSchemaModal";
import SchemaModal from "./modal/schemaModal";
import EditModal from "./modal/editModal";
function BuilderFromNPM() {
	/* -------------------------------------------------------------------------- */
	/*                               UseState Section                             */
	/* -------------------------------------------------------------------------- */
	const [uiSchema, setUiSchema] = useState({});

	const [schema, setSchema] = useState({
		title: "Dynamic Schema Form",
		properties: {},
	});
	// const [uiSchema, setUiSchema] = useState({})
	const [formData] = useState({});
	const [isOpen, setIsOpen] = useState(false);
	// settings
	const [disabled, setDisabled] = useState(false);

	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);

	const [deleteModal, setDeleteModal] = useState(false);

	const [editSchema, setEditSchema] = useState({});
	const [editedTitle, setEditedTitle] = useState("");
	const [deleteName, setDeleteName] = useState("");

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
	const handleModal3 = () => {
		setIsOpen3(!isOpen3);
	};
	const handleModal4 = () => {
		setIsOpen4(!isOpen4);
	};
	const handleDeleteModal = (item) => {
		setDeleteName(item);
		setDeleteModal(!deleteModal);
	};

	const handleChangeSchema = (e) => {
		if (Object.keys(schema.properties).includes(e.name)) {
			setEditSchema(e);
			handleModal3();
		}
		let properties = schema.properties;
		setSchema({
			...schema,
			properties: Object.assign(properties, e.schema),
		});
		setUiSchema({
			...uiSchema,
			[e.name]: e.schema[e.name].defaultUiSchema
				? e.schema[e.name].defaultUiSchema
				: {},
		});
	};

	const handleDelete = () => {
		delete schema.properties[deleteName];
		setSchema({
			...schema,
		});
		handleDeleteModal();
	};

	const handleChangeFieldName = () => {
		let newSchema = {
			[editedTitle]: {
				format: editSchema.schema[editSchema.name].format,
				id: editSchema.schema[editSchema.name].id,
				title: editedTitle,
				type: editSchema.schema[editSchema.name].type,
			},
		};
		let properties = schema.properties;
		setSchema({
			...schema,
			properties: Object.assign(properties, newSchema),
		});
		setEditedTitle("");
		handleModal3();
	};

	const handleOnChange = (formData) => {
		// console.log(formData.formData)
	};

	/* -------------------------------------------------------------------------- */
	/*                               API Section                                  */
	/* -------------------------------------------------------------------------- */
	const FormAction = (props) => (
		<Form
			schema={props.schema}
			uiSchema={props.uiSchema}
			formData={props.formData}
			liveOmit
			children={true} //remove delete
			onChange={props.handleOnChange}
			// onSubmit={console.log("submitted")}
			// onError={console.log("errors")}
			// liveValidate
			showErrorList={false}
			disabled={props.disabled}
			readonly={props.readonly}
		/>
	);

	return (
		<Fragment>
			<div className="d-flex mt-4">
				<div
					className="text-center mt-3"
					style={{
						cursor: "pointer",
						marginLeft: 20,
						borderWidth: "1px",
						borderColor: "lightGray",
						borderStyle: "solid",
						padding: "5px",
						borderRadius: "5px",
					}}
					onClick={handleModal1}
				>
					View Schema
				</div>
				<div
					className="text-center mt-3"
					style={{
						cursor: "pointer",
						marginLeft: 20,
						borderWidth: "1px",
						borderColor: "lightGray",
						borderStyle: "solid",
						padding: "5px",
						borderRadius: "5px",
					}}
					onClick={handleModal2}
				>
					View UI Schema
				</div>
				<div
					className="text-center mt-3"
					style={{
						cursor: "pointer",
						marginLeft: 20,
						borderWidth: "1px",
						borderColor: "lightGray",
						borderStyle: "solid",
						padding: "5px",
						borderRadius: "5px",
					}}
					onClick={handleModal4}
				>
					Settings
				</div>
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
							{Object.keys(schema.properties).length > 0 ? (
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
														onClick={() => handleDeleteModal(item)}
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
								})
							) : (
								<p className="text-center">
									Please click on type to create form
								</p>
							)}
						</div>
					</Card>
				</div>
				<div style={{ width: "33%" }} className="p-2">
					{" "}
					<Card style={{ minHeight: "610px" }}>
						<h2 className="text-center mt-2">Live Preview</h2>
						<hr />
						<div style={{ margin: 15 }}>
							<FormAction
								schema={schema}
								uiSchema={uiSchema}
								formData={formData}
								handleOnChange={handleOnChange}
								disabled={disabled}
							/>
						</div>
					</Card>
				</div>

				<EditModal isOpen={isOpen} handleModal={handleModal} />
				<SchemaModal
					isOpen1={isOpen1}
					handleModal1={handleModal1}
					schema={schema}
				/>
				<UiSchemaModal
					isOpen2={isOpen2}
					handleModal2={handleModal2}
					uiSchema={uiSchema}
				/>
				<SettingsModal
					isOpen4={isOpen4}
					handleModal4={handleModal4}
					disabled={disabled}
					setDisabled={setDisabled}
				/>
				<DuplicateAddModal
					isOpen3={isOpen3}
					handleModal3={handleModal3}
					handleChangeFieldName={handleChangeFieldName}
					editedTitle={editedTitle}
					setEditedTitle={setEditedTitle}
				/>
				<DeleteModal
					deleteModal={deleteModal}
					deleteName={deleteName}
					handleDeleteModal={handleDeleteModal}
					handleDelete={handleDelete}
				/>
			</div>
		</Fragment>
	);
}

export default BuilderFromNPM;
