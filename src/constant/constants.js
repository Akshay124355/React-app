export const feedbackFields = [
    {
        name: "name",
        optional: false,
        type: 'text',
        label: "First name",
        rules: [
            {
                required: true,
                message: 'Please enter your first name.'
            },
            {
                type: 'text',
                message: 'Invalid name.'
            }
        ],
        placeholder: "Enter your name",
        fullInput: true,
    },
    {
        name: "last name",
        optional: false,
        type: 'text',
        label: "Last name",
        rules: [
            {
                required: true,
                message: 'Please enter your last name.'
            },
            {
                type: 'text',
                message: 'Invalid name.'
            }
        ],
        placeholder: "Enter your name",
        fullInput: true,
    },
    {
        name: "address",
        optional: false,
        type: 'text',
        label: "Address",
        rules: [
            {
                required: true,
                message: 'Please enter your address'
            }
        ],
        placeholder: "Enter your address",
        fullInput: true,
    },
    {
        name: "country",
        optional: false,
        type: 'text',
        label: "country",
        rules: [
            {
                required: true,
                message: 'Please enter your country'
            }
        ],
        placeholder: "Enter your country",
        fullInput: true,
    },
    {
        name: "email",
        optional: false,
        type: 'email',
        label: "email",
        rules: [
            {
                required: true,
                message: 'Please enter your email'
            }
        ],
        placeholder: "Enter your email",
        fullInput: true,
    },
    {
        name: "mobilenumber",
        optional: false,
        type: '',
        label: "Mobile Number",
        rules: [
            {
                required: true,
                message: 'Please enter your mobile number'
            },
            {
                pattern: /^\d{10}$/,
                message: 'Invalid phone number.'
            },
        ],
        placeholder: "Enter your mobile number",
        fullInput: true,
    },
    
]