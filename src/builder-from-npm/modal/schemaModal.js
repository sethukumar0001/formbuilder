import React from "react";
import {
	Modal,
	ModalBody,
	ModalFooter,
	Button,
} from "reactstrap";

function SchemaModal(props) {
	return (
		<div>
			<Modal toggle={props.handleModal1} isOpen={props.isOpen1} centered>
				<ModalBody>
					{<pre>{JSON.stringify(props.schema, null, 2)}</pre>}
				</ModalBody>
				<ModalFooter>
					<Button
						style={{ background: "#0dcaf0", border: "none" }}
						onClick={props.handleModal1}
					>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default SchemaModal;
