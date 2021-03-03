import React, {useState} from 'react';
import {ContactForm} from './styles/Contact';
import helpers from './functions';

function Contact() {
  const [info, saveInfo] = useState({
    names: '',
    phone: '',
    mail: '',
    message: '',
  });

  const updateStateInfo = e => {
    let copy = info;
    copy[e.target.id] = e.target.value.trim();
    saveInfo(copy);
  };

  const submitForm = async e => {
    e.preventDefault();
    if (helpers.isEmpty(Object.values(info))) {
      helpers.showErrorMessage('Please fill in all the fields correctly');
      return;
    }

    // if you have a server, you could fetch to endpoint and send data and receive a message
    // const response = await fetch('https://url/to/server/endpoint');
    // const data = response.json();

    // if (data.error) {
    //   helpers.showErrorMessage(data.message);
    //   return;
    // }

    helpers.showSuccessMessage('message sent successfully');
  };

  return (
    <ContactForm>
      <div className="info-ctn">
        <h1>CONTACT US</h1>
        <p>Enter your data and your message</p>
      </div>
      <div className="form-ctn">
        <form onSubmit={submitForm}>
          <h2>Send message</h2>

          <div className="form-group">
            <label htmlFor="name" className="required">
              Names:
            </label>
            <input type="text" id="names" onChange={updateStateInfo} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" onChange={updateStateInfo} />
          </div>

          <div className="form-group">
            <label htmlFor="mail" className="required">
              Email:
            </label>
            <input type="text" id="mail" onChange={updateStateInfo} />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="required">
              Message:
            </label>
            <input type="text" id="message" onChange={updateStateInfo} />
          </div>

          <button type="submit">Send message</button>
        </form>
      </div>
    </ContactForm>
  );
}

export default Contact;
