import React from 'react';
import { useForm } from 'react-hook-form';


function Contact(props) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log(errors);
    }

    return (
        <div className="text-center pt-4 pb-4">
            <h3 className="pb-4">Contact me</h3>
            <div className="card form-contact">
                <form onSubmit={handleSubmit(onSubmit)} className="m-3">
                    <input className="mb-3 form-control" type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
                    <input className="mb-3 form-control" type="email" placeholder="E-mail" {...register("E-mail", {required: true, maxLength: 80})} />
                    <textarea className="mb-3 form-control" placeholder="Message" {...register("Message", {required: true, min: 10})} />

                    <button className="btn btn-primary" type="submit">Send</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;