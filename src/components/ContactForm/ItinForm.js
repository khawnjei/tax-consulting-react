import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ItinForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

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

  return (
    <form ref={form} onSubmit={sendEmail} className="row">
      <div className="col-md-6">
        <FormField
          iconClass="fa fa-user"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          register={register("firstName", { required: true })}
          error={errors.firstName}
        />
      </div>
      <div className="col-md-6">
        <FormField
          iconClass="fa fa-user"
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          register={register("lastName", { required: true })}
          error={errors.lastName}
        />
      </div>
      <div className="col-md-6">
        <FormField
          iconClass="fa fa-envelope"
          type="email"
          name="email"
          placeholder="Enter your email"
          register={register("email", { required: true })}
          error={errors.email}
        />
      </div>
      <div className="col-md-6">
        <FormField
          iconClass="fa fa-phone"
          type="text"
          name="contact"
          placeholder="Phone number"
          register={register("contact", { required: true })}
          error={errors.contact}
        />
      </div>
      <div className="col-md-12">
        <div className="input-form">
          <i className="fa fa-map-marker"></i>
          <input
            {...register("address.country", { required: true })}
            type="text"
            name="address.country"
            placeholder="Country"
          />
          {errors["address.country"] && (
            <span className="text-danger">Country is required</span>
          )}
        </div>
      </div>
      <div className="col-md-6">
        <FormField
          iconClass="fa fa-map-marker"
          type="text"
          name="address.state"
          placeholder="State"
          register={register("address.state", { required: true })}
          error={errors["address.state"]}
        />
      </div>
      <div className="col-md-6">
        <FormField
          iconClass="fa fa-map-marker"
          type="text"
          name="address.city"
          placeholder="City"
          register={register("address.city", { required: true })}
          error={errors["address.city"]}
        />
      </div>
      <div className="col-md-12">
        <FormField
          iconClass="fa fa-pencil-alt"
          type="text"
          name="subject"
          placeholder="Subject"
          register={register("subject", { required: true })}
          error={errors.subject}
        />
      </div>
      <div className="col-md-12">
        <FormField
          iconClass="fa fa-edit"
          type="textarea"
          name="message"
          placeholder="Enter your message"
          register={register("message", { required: true })}
          error={errors.message}
        />
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

const FormField = ({ iconClass, type, name, placeholder, register, error }) => (
  <div className="input-form">
    <i className={iconClass}></i>
    {type === "textarea" ? (
      <textarea {...register} name={name} placeholder={placeholder}></textarea>
    ) : (
      <input {...register} type={type} name={name} placeholder={placeholder} />
    )}
    {error && (
      <span className="text-danger">{`${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`}</span>
    )}
  </div>
);

export default ItinForm;
