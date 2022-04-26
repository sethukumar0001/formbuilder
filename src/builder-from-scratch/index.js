import React, { Fragment, useState } from "react";
import { Card, Row, Col, Button } from "reactstrap";
import { SchemaTypes } from "./types";
import DeleteLogo from "../svg/delete.svg";
import { handleDeleteFields, handleSelectFields } from "./helper";
import EditModal from "./modal/editModal";
import PreviewModal from "./modal/previewModal";
function BuilderFromScratch(props) {
	/* -------------------------------------------------------------------------- */
	/*                               UseState Section                             */
	/* -------------------------------------------------------------------------- */

	const [selectedFields, setSelectedFields] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [editObjIndex, setEditObjIndex] = useState({});

	const [previewOpen, setPreviewOpen] = useState(false);

	/* -------------------------------------------------------------------------- */
	/*                               UseEffect Section                            */
	/* -------------------------------------------------------------------------- */
	/* -------------------------------------------------------------------------- */
	/*                               API Section                                  */
	/* -------------------------------------------------------------------------- */
	/* -------------------------------------------------------------------------- */
	/*                               Onchange section                             */
	/* -------------------------------------------------------------------------- */
	const handleModal = (item) => {
		setEditObjIndex(item);
		setIsOpen(!isOpen);
	};
	const handleModalPreview = () => {
		setPreviewOpen(!previewOpen);
	};

	const handleEditObject = (e) => {
		const { name, value } = e.target;
		setSelectedFields(
			selectedFields.map((x, index) => {
				if (index !== editObjIndex) return x;
				return {
					...x,
					[name]: value,
				};
			})
		);
	};
	const handleEditObjectBoolean = (name, status) => {
		setSelectedFields(
			selectedFields.map((x, index) => {
				if (index !== editObjIndex) return x;
				return {
					...x,
					[name]: status,
				};
			})
		);
	};
	console.log(selectedFields);

	const handleChangePreview = (name,value,key,type) => {
		if(type === 'string'){
			setSelectedFields(
				selectedFields.map((x, index) => {
					if (index !== key) return x;
					return {
						...x,
						[name]: value,
					};
				})
			);
		}
	}
	return (
		<Fragment>
			<div style={{ float: "right", marginRight: "30px", marginTop: "30px" }}>
				<Button onClick={handleModalPreview}>Preview</Button>
			</div>
			<br />
			<div className="d-flex justify-center-between mt-5 align-content-center">
				<div style={{ width: "50%" }} className="p-2">
					<Card style={{ minHeight: "610px" }}>
						<h2 className="text-center mt-2">Type</h2>
						<hr />
						<div style={{ margin: 15 }}>
							<Row>
								{SchemaTypes.map((item, index) => {
									return (
										<Col md="6" key={index}>
											<ul
												className="cursor-pointer"
												onClick={(e) =>
													handleSelectFields(
														item,
														selectedFields,
														setSelectedFields
													)
												}
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
													{item.fieldLabel}
												</li>
											</ul>
										</Col>
									);
								})}
							</Row>
						</div>
					</Card>
				</div>
				<div style={{ width: "50%" }} className="p-2">
					<Card style={{ minHeight: "610px" }}>
						<h2 className="text-center mt-2">Selected Fields</h2>
						<hr />
						<div style={{ margin: 15 }}>
							{selectedFields.length > 0 ? (
								selectedFields.map((item, index) => {
									return (
										<>
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
												}}
												key={index}
											>
												<Row>
													<Col md="8">
														<p>
															{item.fieldLabel}{" "}
															{item.fieldValidation && (
																<span style={{ color: "red" }}>*</span>
															)}
														</p>
													</Col>
													<Col md="2">
														<img
															src={DeleteLogo}
															alt="Delete Logo"
															style={{ height: 25 }}
															onClick={(e) =>
																handleDeleteFields(
																	item,
																	index,
																	selectedFields,
																	setSelectedFields
																)
															}
														/>
													</Col>
													<Col md="2" onClick={() => handleModal(index)}>
														<img
															src={require(`../images/edit.png`)}
															alt="Edit Logo"
															style={{ height: 25 }}
														/>
													</Col>
												</Row>
											</li>
											{item.fieldValidation && (
												<p style={{ color: "red" }}>
													{item.fieldValidationMessage}
												</p>
											)}
										</>
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
				{/* <div style={{ width: "33%" }} className="p-2">
					{" "}
					<Card style={{ minHeight: "610px" }}>
						<h2 className="text-center mt-2">Live Preview</h2>
						<hr />
						<div style={{ margin: 15 }}></div>
					</Card>
				</div> */}
			</div>
			<EditModal
				isOpen={isOpen}
				handleModal={handleModal}
				editObjIndex={editObjIndex}
				selectedFields={selectedFields}
				handleEditObject={handleEditObject}
				handleEditObjectBoolean={handleEditObjectBoolean}
			/>
			{previewOpen && (
				<PreviewModal
					isOpen={previewOpen}
					handleModal={handleModalPreview}
					selectedFields={selectedFields}
					handleChangePreview={handleChangePreview}
				/>
			)}
		</Fragment>
	);
}

export default BuilderFromScratch;
