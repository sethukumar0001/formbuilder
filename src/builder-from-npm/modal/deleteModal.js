import React from "react";
import {
	Modal,
	ModalBody,
	ModalFooter,
	Button,
	ModalHeader,
} from "reactstrap";

function DeleteModal(props) {
	return (
		<div>
			<Modal toggle={props.handleDeleteModal} isOpen={props.deleteModal} centered>
				<ModalHeader>
					<h2>Delete</h2>
				</ModalHeader>
				<ModalBody>
					<p>
						Are you sure want to delete <b>{props.deleteName}</b>?
					</p>
				</ModalBody>
				<ModalFooter>
					<Button
						style={{ background: "red", border: "none" }}
						onClick={props.handleDelete}
					>
						Yes
					</Button>
					<Button
						style={{ background: "#0dcaf0", border: "none" }}
						onClick={props.handleDeleteModal}
					>
						No
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default DeleteModal;
