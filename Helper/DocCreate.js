class DocCreate {
  constructor(container, element) {
    this.container = container;
    this.element = element;
  }

  div(idName, classList, textContent) {
    const div = document.createElement(this.element);
    if (idName) div.id = idName;
    if (classList) div.classList.add(classList);
    if (textContent) div.textContent = textContent;
    this.container.appendChild(div);

    return div;
  }

  textline(
    type,
    idName,
    classList,
    placeholder,
    req = false,
    value,
    handleLoginText,
    disabled = false
  ) {
    const input = document.createElement(this.element);
    if (type) {
      if (type) input.type = type;
      if (idName) input.id = idName;
      if (idName) input.name = idName;
      if (classList) input.classList.add(classList);
      if (req) input.required = req;
      if (value) input.value = value;
      if (placeholder) input.placeholder = placeholder;
      if (handleLoginText) input.onchange = (e) => handleLoginText(e);
      if (disabled) input.disabled = disabled;
      this.container.appendChild(input);
      return input;
    }
  }

  button(type, idName, classList, value, textContent, onClick) {
    const button = document.createElement(this.element);
    button.type = type;
    button.id = idName;
    button.name = idName;
    button.classList.add(classList);
    button.value = value;
    button.textContent = textContent;
    button.onclick = onClick;
    this.container.appendChild(button);

    return button;
  }

  forms(idName, classList, action = null, method = null, onSubmit) {
    const form = document.createElement(this.element);
    form.id = idName;
    form.classList.add(classList);
    if (action) form.action = action;
    if (method) form.method = method;
    form.addEventListener("submit", (e) => onSubmit(e));
    this.container.appendChild(form);

    return form;
  }
}

export default DocCreate;
