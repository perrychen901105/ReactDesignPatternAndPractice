import Form from 'react-jsonschema-form'
import React from 'react';

const schema = {
    type: 'object',
    properties: {
        firstName: { type: 'string', default: 'Dan' },
        lastName: { type: 'string', default: 'Abramov' },
    },
}

// const JSONSchemaForm = () => (
//     <Form schema={schema} />
// )

class JSONSchemaForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit({ formData }) {
        console.log(formData);
    }

    render() {
        return (
            <Form schema={schema} onSubmit={this.handleSubmit} />
        )
    }
}

export default JSONSchemaForm;
