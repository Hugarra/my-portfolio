import React, { useState } from 'react';
import emailjs from 'emailjs-com'


function Contact(props) {

    const [enviandoEmail, setEnviandoEmail] = useState(false);
    const [alert, setAlert] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        setEnviandoEmail(true);

        emailjs.sendForm('service_nkdx284', 'template_zy3ugkp', e.target, 'user_JPwNN0pkNzOXzxoio7L8c')
            .then((result) => {
                console.log(result.text);
                setAlert(result.text);
                setEnviandoEmail(false);
            }, (error) => {
                console.log(error.text);
                setAlert(error.text);
                setEnviandoEmail(false);
            });
    } 

    return (
        <div className="text-center pt-4 pb-4">
            <h3 className="pb-4">Contact me</h3>
            <div className="card form-contact">
                <form onSubmit={sendEmail} className="m-3">
                    <input className="mb-3 form-control" type="text" placeholder="Name" name="from_name" />
                    <input className="mb-3 form-control" type="email" placeholder="E-mail" name="from_email" />
                    <textarea className="mb-3 form-control" placeholder="Message" name="message"/>

                    {
                        enviandoEmail &&
                            <div classname="container">
                                <div className="mb-3 spinner-border m-auto" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                    }
                    {
                        alert !== '' &&
                            <div classname="container">
                                <div className="mt-3 alert alert-success fade show border">
                                    <p>{alert}</p>
                                </div>
                            </div>
                    }

                    <button className="btn btn-primary" type="submit">Enviar!</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;