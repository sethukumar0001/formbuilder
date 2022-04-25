import React from "react";
import {
	Modal,
	ModalBody,
	ModalFooter,
	Button,
} from "reactstrap";

function UiSchemaModal(props) {
	return (
		<div>
			<Modal toggle={props.handleModal2} isOpen={props.isOpen2} centered>
				<ModalBody>
					{<pre>{JSON.stringify(props.uiSchema, null, 2)}</pre>}
				</ModalBody>
				<ModalFooter>
					<Button
						style={{ background: "#0dcaf0", border: "none" }}
						onClick={props.handleModal2}
					>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default UiSchemaModal;
