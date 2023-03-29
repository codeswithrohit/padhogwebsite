import { createElement, useRef } from "react";
import { content } from "../data/Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-blue-100 text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="font-Inria text-5xl font-bold !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-600 p-3 rounded h-44 bg-transparent outline-none font-Poppins"
              required
            ></textarea>
            <button  className="py-2 px-9 border-2 rounded-md
     border-pink-500 rounded-br-3xl font-medium text-white text-2xl font-bold ">Submit</button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            
              <div
                data-aos="fade-down"
                data-aos-delay={ 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white md:text-4xl text-3xl !leading-relaxed font-Paprika"><GrMail/></h4>
                <a className="font-Poppins" href="mailto:team@padhog.com" target="_blank" rel="noreferrer">
                  team@padhog.com
                </a>
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay={ 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white md:text-4xl text-3xl !leading-relaxed font-Paprika"> <MdCall/></h4>
                <a className="font-Poppins" href="https://wa.me/1234567890" target="_blank" rel="noreferrer">
                  +917667411501
                </a>
              </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;