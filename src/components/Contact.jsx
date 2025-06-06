import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';


const Contact = () => {
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    message:""
  });

  const [errors, setErrors] = useState({})

  const changeHandler = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === "phone") {
      // Allow only digits
      newValue = value.replace(/\D/g, ""); // \D = non-digit
    }

    setformData((prevData) => {
      return {
        ...prevData,
        [name]: newValue,
      };
    });

     // Remove the error only for the currently edited field
  setErrors((prevErrors) => {
    const updatedErrors = { ...prevErrors }; //copy to prevent mutating state directly
    delete updatedErrors[name];  //remove only the current field's error
    return updatedErrors; //This updated errors object — now missing the cleared field — is passed back to setErrors.So setErrors updates the state with all the old errors except the one for the currently edited input.
  });
  };

  const submitHandler = (e) => {
    e.preventDefault();
   
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const newErrors = {};
  if (!formData.firstName) newErrors.firstName = "Please enter full name";
  if (!formData.lastName) newErrors.lastName = "Please enter last name";
  if (!formData.emailAddress || !pattern.test(formData.emailAddress)) newErrors.emailAddress = "Please enter valid email";
  if (!formData.phone) newErrors.phone = "Please enter Phone number";
  // if (!formData.message.trim()) newErrors.message = "Please enter a message";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    console.log(newErrors)
    return; // stop form submission
  }

    //Send email using EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,   //Replace with your EmailJS service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  //Replace with your EmailJS template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.emailAddress,
        phone: formData.phone,
        message: formData.message,
      },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY      // Replace with your EmailJS public key
    ).then((res) => {
      toast.success("Email sent successfully!",{
         position:"top-center",
         autoClose: 1000,
      });
    }).catch((err) => {
      toast.error("Failed to send email.");
      console.error(err);
    });

    console.log("Formdata => ", formData);
    
    // Reset the form
    setformData({
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="bg-[#1F242D] min-h-80vh py-4">
      <h3 className="text-white text-center pt-10 text-[2.1rem] font-bold">
        Contact <span className="text-[#00EBFD]">Me!</span>
      </h3>
      <form
        onSubmit={submitHandler}
        className="flex flex-col  gap-y-3 px-4 lg:px-42 pb-12 "
      >
        <input
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          className="bg-[#323946] mt-6  lg:p-4 min-w-[320px] text-white  placeholder:text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] focus:outline-none lg:placeholder:text-[1.1rem] p-2 pl-3 rounded-md"
          type="text"
          placeholder="First Name"
        />
        <p className="text-red-600 text-xl font-light">{errors.firstName}</p>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          className="bg-[#323946] text-white lg:p-4 lg:placeholder:text-[1.1rem] pl-3 mt-2 min-w-[320px]  placeholder:text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] p-2 focus:outline-none rounded-md"
          type="text"
          placeholder="Last Name"
        />
        <p className="text-red-600 text-xl font-light">{errors.lastName}</p>
        <input
          name="emailAddress"
          type="email"
          value={formData.emailAddress}
          onChange={changeHandler}
          className="bg-[#323946] text-white lg:p-4 mt-2 lg:placeholder:text-[1.1rem] pl-3 min-w-[320px]  placeholder:text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] p-2 focus:outline-none rounded-md"
          placeholder="Email Address"
        />
        <p className="text-red-600 text-xl font-light">{errors.emailAddress}</p>
        <input
          name="phone"
          type="tel"
          maxLength={10}
          pattern="[0-9]{10}"
          value={formData.phone}
          onChange={changeHandler}
          className="bg-[#323946] mt-2 lg:p-4 pl-3 lg:placeholder:text-[1.1rem] min-w-[320px]  placeholder:text-white text-white placeholder:opacity-[0.3] placeholder:text-[0.9rem] focus:outline-none p-2 rounded-md"
          placeholder="Phone Number"
        />
        <p className="text-red-600 text-xl font-light">{errors.phone}</p>
        <textarea
          name="message"
          value={formData.message}
          onChange={changeHandler}
          className="bg-[#323946] text-white min-h-[32vh] mt-2 lg:p-4 pl-3 lg:placeholder:text-[1.1rem] min-w-[320px]  placeholder:text-white focus:outline-none placeholder:opacity-[0.3] placeholder:text-[0.9rem] p-2 rounded-md"
          placeholder="Your Message"
        ></textarea>
        <button className="text-[#1a54c0] ml-[80px] w-[50%] lg:w-[20%] lg:py-2 lg:ml-[480px] mt-6 lg:tracking-[0.08rem] md:top-16 bg-cyan-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-4 font-extrabold rounded-full text-md px-2 py-2 lg:text-[1.1rem] text-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
