export const SchemaTypes = [
	{
		type: "text",
		fieldValue: "",
		fieldLabel: "Full Name",
		fieldValidation: true,
		fieldValidationMessage: "Full Name field should not be empty",
		maxLength:10,
		minLength:5,
		id: 0,
		length:true
	},
	{
		type: "number",
		fieldValue: "",
		fieldLabel: "Phone Number",
		fieldValidation: false,
		fieldValidationMessage: "",
		id: 1,
	},
	{
		type: "email",
		fieldValue: "",
		fieldLabel: "Email",
		fieldValidation: false,
		fieldValidationMessage: "",
		id: 2,
	},
];
