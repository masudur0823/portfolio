import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import Container from "../Container";
import SectionLayout from "./Layout/SectionLayout";

export default function Contact() {
  const form = useRef();
  console.log("form:", form.current);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_flkzggh", "template_xk3c8ed", form.current, {
        publicKey: "Oa8w5esBKyzvmthZY",
      })
      .then(
        (result) => {
          // console.log("SUCCESS result", result);
          console.log("SUCCESS!");
          toast.success("Your message send successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.warn(error.text);
        }
      );
  };
  return (
    <SectionLayout title="Contact">
      <Container>
        <div className="sm:w-3/4 m-auto">
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="[&>label]:text-gray-700 [&>label]:font-semibold  [&>input]:border [&>input]:w-full [&>input]:p-2 [&>input]:mb-4 [&>input]:mt-2 [&>input]:rounded"
            >
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
              />

              <label>Email</label>
              <input
                className="border"
                type="email"
                name="user_email"
                placeholder="Enter your email"
              />
              <label>Message</label>
              <textarea
                rows={5}
                className="border w-full my-2 p-2"
                name="message"
                placeholder="Type your message here"
              />
              <input
                className="cursor-pointer border rounded bg-cyan-500 text-white font-semibold"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </Container>
    </SectionLayout>
  );
}
