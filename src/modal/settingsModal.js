import React from "react";
import {
	Row,
	Col,
	Modal,
	ModalBody,
	ModalFooter,
	Button,
	Input,
} from "reactstrap";

function SettingsModal(props) {
	return (
		<div>
			<Modal toggle={props.handleModal4} isOpen={props.isOpen4} centered>
				<ModalBody>
					<div>
						<Row>
							<Col md="6">Disable Whole Form </Col>
							<Col md="6">
								:{" "}
								<Input
									type="checkbox"
									checked={props.disabled}
									onChange={() => props.setDisabled(!props.disabled)}
								/>
							</Col>
						</Row>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button
						style={{ background: "#0dcaf0", border: "none" }}
						onClick={props.handleModal4}
					>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default SettingsModal;
