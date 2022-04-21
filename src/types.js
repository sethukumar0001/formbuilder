export const SchemaTypes = [
	{
		name: "email",
		schema: {
			email: {
				type: "string",
				format: "email",
			},
		},
	},
	{
		name: "uri",
		schema: {
			uri: {
				type: "string",
				format: "uri",
			},
		},
	},
	{
		name: "checkbox",
		schema: {
			checkbox: {
				type: "boolean",
				title: "checkbox (default)",
				description: "This is the checkbox-description",
			},
		},
	},
	{
		name: "radio",
		schema: {
			radio: {
				type: "string",
				title: "radio buttons",
				description: "This is the radio-description",
				// "ui:widget": "radio"
			},
		},
	},
	{
		name: "select",
		schema: {
			select: {
				type: "boolean",
				title: "select box",
				description: "This is the select-description",
				// "ui:widget": "select",
			},
		},
	},
	{
		name: "text",
		schema: {
			text: {
				type: "string",
				title: "text input (default)",
			},
		},
	},
	{
		name: "color",
		schema: {
			color: {
				type: "string",
				title: "color picker",
				default: "#151ce6",
				// "ui:widget": "color"
			},
		},
	},
	{
		name: "textarea",
		schema: {
			textarea: {
				type: "string",
				format: "textarea",
				// "ui:widget": "textarea",
				// "ui:options": {
				//   "rows": 5
				// }
			},
		},
	},
	{
		name: "number",
		schema: {
			number: {
				title: "Number",
				type: "number",
			},
		},
	},
	{
		name: "integer",
		schema: {
			integer: {
				title: "Integer",
				type: "integer",
				// "ui:widget": "updown"
			},
		},
	},

	{
		name: "numberEnum",
		schema: {
			numberEnum: {
				type: "number",
				title: "Number enum",
				enum: [1, 2, 3],
				// "ui:widget": "radio",
				// "ui:options": {
				//   "inline": true
				// }
			},
		},
	},
	{
		name: "integerRange",
		schema: {
			integerRange: {
				title: "Integer range",
				type: "integer",
				minimum: 42,
				maximum: 100,
				// "ui:widget": "range"
			},
		},
	},
	{
		name: "integerRangeSteps",
		schema: {
			integerRangeSteps: {
				title: "Integer range (by 10)",
				type: "integer",
				minimum: 50,
				maximum: 100,
				multipleOf: 10,
				// "ui:widget": "range"
			},
		},
	},
];
