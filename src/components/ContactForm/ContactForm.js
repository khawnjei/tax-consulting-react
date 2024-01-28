import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ type: "", message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_fya07xh",
        "template_jxl9rkc",
        form.current,
        "gagOMscKApV3AE4OK"
      );

      setNotification({
        type: "success",
        message: `Message submitted successfully! Response: ${result.text}`,
      });
      setTimeout(() => {
        form.current.reset();
        setNotification({ type: "", message: "" });
      }, 3000);
    } catch (error) {
      setNotification({
        type: "error",
        message: `Message sending failed. Error: ${error.text}`,
      });
    }
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <form ref={form} onSubmit={sendEmail} className="row">
      <div className="col-md-6">
        <div className="input-form">
          <i className="fa fa-user"></i>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-danger">Name is required</span>}
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-form">
          <i className="fa fa-envelope"></i>
          <input
            {...register("email", { required: true })}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-form">
          <i className="fa fa-phone"></i>
          <input
            {...register("phone", { required: true })}
            type="text"
            name="phone"
            placeholder="Phone number"
          />
          {errors.phone && (
            <span className="text-danger">Phone Number is required</span>
          )}
        </div>
      </div>
      <div className="col-md-6">
        <div className="input-form">
          <i className="fa fa-pencil-alt"></i>
          <input
            {...register("subject", { required: true })}
            type="text"
            name="subject"
            placeholder="Subject"
          />
          {errors.subject && (
            <span className="text-danger">Subject is required</span>
          )}
        </div>
      </div>
      <div className="col-md-12">
        <div className="input-form">
          <i className="fa fa-edit"></i>
          <textarea
            {...register("message", { required: true })}
            name="message"
            placeholder="Enter your message"
          ></textarea>
          {errors.message && (
            <span className="text-danger">Message is required</span>
          )}
        </div>
      </div>
      <div className="col-md-12 text-center">
        <button className="quomodo-btn" type="submit">
          Send Message<i className="fa fa-long-arrow-right"></i>
        </button>
        {notification.message && (
          <div className={`notification ${notification.type}`}>
            {notification.message}
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
