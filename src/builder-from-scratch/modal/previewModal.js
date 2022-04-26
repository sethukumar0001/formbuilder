import React from "react";
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from "reactstrap";
import { getValue } from "../../lodash";
import FormHelper from "../formHelper";

function PreviewModal(props) {
	return (
		<div>
			<Modal toggle={props.isOpen} isOpen={props.handleModal} centered>
				<ModalHeader>
					<h2>Preview</h2>
				</ModalHeader>
				<ModalBody>
					{getValue(props, `selectedFields`, []).map((item, index) => {
						return (
							<div key={index}>
								<FormHelper
									item={item}
									handleChangePreview={props.handleChangePreview}
									index={index}
								/>
							</div>
						);
					})}
				</ModalBody>
				<ModalFooter>
					<Button
						style={{ background: "red", border: "none" }}
						onClick={props.handleModal}
					>
						Submit
					</Button>
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

export default PreviewModal;
