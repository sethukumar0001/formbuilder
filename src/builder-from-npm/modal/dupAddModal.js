import React from "react";
import {
	Modal,
	ModalBody,
	ModalFooter,
	Button,
	Label,
	Input,
} from "reactstrap";

function DuplicateAddModal(props) {
	return (
		<div>
			<Modal toggle={props.handleModal3} isOpen={props.isOpen3} centered>
				<ModalBody>
					<Label>Field Name</Label>
					<Input
						type="text"
						value={props.editedTitle}
						onChange={(e) => props.setEditedTitle(e.target.value)}
					/>
					<p style={{ color: "red", marginTop: "10px" }}>
						Note : Field name should be unique
					</p>
				</ModalBody>
				<ModalFooter>
					<Button
						style={{ background: "#0dcaf0", border: "none" }}
						onClick={props.handleChangeFieldName}
						disabled={!props.editedTitle}
					>
						Add
					</Button>
					<Button
						style={{ background: "#0dcaf0", border: "none" }}
						onClick={props.handleModal3}
					>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default DuplicateAddModal;
