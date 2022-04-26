import React from "react";
import { Input, Label } from "reactstrap";
import { getValue } from "../lodash";

function FormHelper(props) {
	switch (getValue(props, `item.type`, "")) {
		case "text":
			return (
				<div>
					<Label>
						{getValue(props, `item.fieldLabel`, "")}{" "}
						{getValue(props, `item.fieldValidation`, "") && (
							<span style={{ color: "red" }}>*</span>
						)}
					</Label>
					<Input
						type="text"
						value={getValue(props, `item.fieldValue`, "")}
						onChange={(e) =>
							props.handleChangePreview(
								e.target.name,
								e.target.value,
								props.index,
								"string"
							)
						}
						name="fieldValue"
					/>
					{getValue(props, `item.fieldValidation`, "") &&
						!getValue(props, `item.fieldValue`, "") && (
							<p style={{ color: "red" }}>
								{getValue(props, `item.fieldValidationMessage`, "")}
							</p>
						)}
				</div>
			);
		case "number":
			return (
				<div>
					<Label>
						{getValue(props, `item.fieldLabel`, "")}{" "}
						{getValue(props, `item.fieldValidation`, "") && (
							<span style={{ color: "red" }}>*</span>
						)}
					</Label>
					<Input
						type="number"
						value={getValue(props, `item.fieldValue`, "")}
						onChange={(e) =>
							props.handleChangePreview(
								e.target.name,
								e.target.value,
								props.index,
								"string"
							)
						}
						name="fieldValue"
					/>
					{getValue(props, `item.fieldValidation`, "") &&
						!getValue(props, `item.fieldValue`, "") && (
							<p style={{ color: "red" }}>
								{getValue(props, `item.fieldValidationMessage`, "")}
							</p>
						)}
				</div>
			);
		case "email":
			return (
				<div>
					<Label>
						{getValue(props, `item.fieldLabel`, "")}{" "}
						{getValue(props, `item.fieldValidation`, "") && (
							<span style={{ color: "red" }}>*</span>
						)}
					</Label>
					<Input
						type="email"
						value={getValue(props, `item.fieldValue`, "")}
						onChange={(e) =>
							props.handleChangePreview(
								e.target.name,
								e.target.value,
								props.index,
								"string"
							)
						}
						name="fieldValue"
					/>
					{getValue(props, `item.fieldValidation`, "") &&
						!getValue(props, `item.fieldValue`, "") && (
							<p style={{ color: "red" }}>
								{getValue(props, `item.fieldValidationMessage`, "")}
							</p>
						)}
				</div>
			);

		default:
			return;
	}
}

export default FormHelper;
