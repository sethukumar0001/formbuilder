export const SchemaTypes = [
	{
		name: "email",
		schema: {
			email: {
				type: "string",
				format: "email",
				title: "email",
				id: 0,
			},
		},
	},
	{
		name: "uri",
		schema: {
			uri: {
				type: "string",
				format: "uri",
				title: "uri",
				id: 1,
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
				id: 2,
				defaultUiSchema: {
					classNames: "col-xs-12",
				},
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
				id: 3,
				oneOf: [
					{ const: 1, title: "One" },
					{ const: 2, title: "Two" },
					{ const: 3, title: "Three" },
				],
				defaultUiSchema: {
					"ui:widget": "radio",
				},
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
				id: 4,
				defaultUiSchema: {
					"ui:widget": "select",
					"ui:placeholder": "Select",
				},
			},
		},
	},
	{
		name: "text",
		schema: {
			text: {
				type: "string",
				title: "text input (default)",
				id: 5,
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
				id: 6,
				defaultUiSchema: {
					"ui:widget": "color",
				},
			},
		},
	},
	{
		name: "textarea",
		schema: {
			textarea: {
				type: "string",
				format: "textarea",
				title: "textarea",
				id: 7,
				defaultUiSchema: {
					"ui:widget": "textarea",
					"ui:options": {
						rows: 5,
					},
				},
			},
		},
	},
	{
		name: "number",
		schema: {
			number: {
				title: "Number",
				type: "number",
				id: 8,
			},
		},
	},
	{
		name: "integer",
		schema: {
			integer: {
				title: "Integer",
				type: "integer",
				id: 9,
				defaultUiSchema: {
					"ui:widget": "updown",
				},
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
				id: 10,
				defaultUiSchema: {
					"ui:widget": "radio",
					"ui:options": {
						inline: true,
					},
				},
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
				id: 11,
				defaultUiSchema: {
					"ui:widget": "range",
				},
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
				id: 12,
				defaultUiSchema: {
					"ui:widget": "range",
				},
			},
		},
	},
	{
		name: "date",
		schema: {
			date: {
				type: "string",
				format: "date",
			},
		},
	},

	{
		name: "datetime",
		schema: {
			datetime: {
				type: "string",
				format: "date-time",
			},
		},
	},
	{
		name: "alt-date",
		schema: {
			"alt-date": {
				type: "string",
				format: "date",
				defaultUiSchema: {
					"ui:widget": "alt-date",
					"ui:options": {
						yearsRange: [1980, 2030],
					},
				},
			},
		},
	},
];
