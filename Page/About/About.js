import DocCreate from "../../Helper/DocCreate.js";

function About(container) {
  const about = new DocCreate(container, "div");
  const aboutForm = about.div("about", "about-page", "");

  const abtHeader = new DocCreate(aboutForm, "H1");
  abtHeader.div("abtHeader", "abt-Header", "About Page");

  return about.element;
}

export default About;
