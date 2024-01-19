
import {useState} from 'react'
import { Formik, Form, Field, getIn } from 'formik'
import * as Yup from 'yup'

export function ContactForm() {
    const emptyContactRecord = {
        name: '',
        phoneNumber: '',
        email: '',
        contactDate: Date.now()
    }
    const [contactRecord, setContactRecord] = useState(emptyContactRecord)
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    async function onSubmit(contactRecord) {
        try {
            console.log('contactRecord: ', contactRecord)
            setIsSubmitted(true)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="contact-form">
        <h2>צרו קשר</h2>
        <article className="form-container">
        </article>
        </section>
    )
}