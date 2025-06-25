import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

// sidebar section
export const useSendMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_8g3qcts", "template_9zot8b7", form.current, {
        publicKey: "fjg9VtiaKcqjYE8JS",
      })
      .then(
        () => {
          toast.success("Your email has been sent!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed! - ", error.text);
        }
      );
  };

  return { form, sendEmail };
};

// contact section
export const useSendMail2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8g3qcts", "template_dishbyy", form.current, {
        publicKey: "fjg9VtiaKcqjYE8JS",
      })
      .then(
        () => {
          toast.success("Your email has been sent!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed! - ", error.text);
        }
      );
  };

  return { form, sendEmail };
};
