import React from "react";
import {
	Modal,
	ModalBody,
	ModalFooter,
	Button,
	Input,
	Label,
	Row,
	Col,
} from "reactstrap";
import { getValue } from "../../lodash";

function EditModal(props) {
	console.log(props.selectedFields);
	return (
		<div>
			<Modal toggle={props.handleModal} isOpen={props.isOpen} centered>
				<ModalBody>
					<Row>
						<Col md="4">
							<Label>Field Label</Label>
						</Col>
						<Col md="1">: </Col>
						<Col md="7">
							<Input
								type="text"
								value={getValue(
									props,
									`selectedFields[${props.editObjIndex}].fieldLabel`,
									""
								)}
								name="fieldLabel"
								onChange={props.handleEditObject}
							/>
						</Col>
					</Row>
					<Row>
						<Col md="4">
							<Label>Field Validation</Label>
						</Col>
						<Col md="1">: </Col>
						<Col md="7">
							{" "}
							<Label>True</Label>{" "}
							<Input
								type="radio"
								checked={getValue(
									props,
									`selectedFields[${props.editObjIndex}].fieldValidation`,
									""
								)}
								name="fieldValidation"
								onChange={() =>
									props.handleEditObjectBoolean("fieldValidation", true)
								}
							/>{" "}
							<Label>False</Label>{" "}
							<Input
								type="radio"
								checked={
									!getValue(
										props,
										`selectedFields[${props.editObjIndex}].fieldValidation`,
										""
									)
								}
								name="fieldValidation"
								onChange={() =>
									props.handleEditObjectBoolean("fieldValidation", false)
								}
							/>
						</Col>
					</Row>
					<Row>
						<Col md="4">
							<Label>Field Validation Message</Label>
						</Col>
						<Col md="1">: </Col>
						<Col md="7">
							<Input
								type="textarea"
								rows="5"
								value={getValue(
									props,
									`selectedFields[${props.editObjIndex}].fieldValidationMessage`,
									""
								)}
								name="fieldValidationMessage"
								onChange={props.handleEditObject}
							/>
						</Col>
					</Row>
					{getValue(
						props,
						`selectedFields[${props.editObjIndex}].length`,
						""
					) && (
						<Row>
							<Col md="4">
								<Label>Max Length</Label>
							</Col>
							<Col md="1">: </Col>
							<Col md="7">
								<Input
									type="text"
									value={getValue(
										props,
										`selectedFields[${props.editObjIndex}].maxLength`,
										""
									)}
									name="maxLength"
									onChange={props.handleEditObject}
								/>
							</Col>
						</Row>
					)}
					{getValue(
						props,
						`selectedFields[${props.editObjIndex}].length`,
						""
					) && (
						<Row>
							<Col md="4">
								<Label>Min Length</Label>
							</Col>
							<Col md="1">: </Col>
							<Col md="7">
								<Input
									type="text"
									value={getValue(
										props,
										`selectedFields[${props.editObjIndex}].minLength`,
										""
									)}
									name="minLength"
									onChange={props.handleEditObject}
								/>
							</Col>
						</Row>
					)}
				</ModalBody>
				<ModalFooter>
					<Button
						style={{ background: "#0dcaf0", border: "none" }}
						onClick={props.handleModal}
					>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default EditModal;
