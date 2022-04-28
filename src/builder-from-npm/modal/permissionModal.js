import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

function PermissionModal(props) {
	return (
		<div>
			<Modal toggle={props.handleModal} isOpen={props.isOpen} centered>
				<ModalBody>
					{<pre>{JSON.stringify(props.permissionObj, null, 2)}</pre>}
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

export default PermissionModal;
