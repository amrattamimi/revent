import React from 'react'
import { Form,Label } from 'semantic-ui-react'

export const TextArea = (
       {input,
        type,
        width,     
        placeholder,
        meta:{touched,error}
       }
) => {
    return (
       
        <Form.Field error={touched && !!error}>
        <textarea {...input} placeholder={placeholder} type={type}/>
        {touched&&error && <Label basic color="red">{error}</Label>}

        </Form.Field>
    )
}