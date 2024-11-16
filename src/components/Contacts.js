import React from "react";

const CONTACT_FORM_API = process.env.REACT_APP_CONTACT_KEY

function Contacts() {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

      formData.append("access_key", CONTACT_FORM_API);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contacts" className="title-right">
      <h2>Contact us</h2>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <div>
              <p>Name: </p>
              <input type="text" name="name" required placeholder="Your Name" />
            </div>
            <div>
              <p>Lastname: </p>
              <input
                type="text"
                name="lastname"
                required
                placeholder="Your Lastname"
              />
            </div>
          </div>
          <div>
            <p>Email:</p>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
          </div>
          <p>Message</p>
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <br></br>
          <button type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
}

export default Contacts;
