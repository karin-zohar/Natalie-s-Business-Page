
import { useState } from 'react'
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
        <section className="contact-form main-layout full">
            <h2>צרו קשר</h2>
            <article className="form-container">
                <Formik
                    initialValues={contactRecord}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                //TODO: add validation schema
                >
                    {({ errors, touched }) => (
                        <Form>
                            <label htmlFor='name'>
                                <p>שם</p>
                                <Field type="name" name="name" placeholder="שם" />
                            </label>
                            <label htmlFor='email'>
                                <p>אימייל</p>
                                <Field type="email" name="email" placeholder="אימייל" />
                            </label>
                            <label htmlFor='phoneNumber'>
                                <p>טלפון</p>
                                <Field type="phoneNumber" name="phoneNumber" placeholder="טלפון" />
                            </label>
                            <button className="submit-btn" type="submit">שלח</button>
                        </Form>
                    )}

                </Formik>

            </article>
        </section>
    )
}