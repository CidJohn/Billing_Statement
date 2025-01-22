import DocCreate from "../../Helper/DocCreate.js";

function Contact(container) {
  const contact = new DocCreate(container, "h1");
  const contactForm = contact.div(
    "contactForm",
    "contact-form",
    "Contact Page"
  );

  return contact.element;
}

export default Contact;
