import React, { useState } from 'react';
import Footer from '../component/footer';

const Contact = () => {
  // Initialize state variables for form input and validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setPhoneError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Name
    if (!/^[a-zA-Z]+$/.test(name)) {
      setNameError('Name should only contain a-z and A-Z');
    }

    // Validate Email
    const validEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
    const isValidEmail = validEmailDomains.some((domain) => email.endsWith(`@${domain}`));

    if (!isValidEmail) {
      setEmailError('Invalid Email format');
    }

    // Validate Phone
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone should contain exactly 10 digits');
    }

    // Submit the form if all fields are valid
    if (!nameError && !emailError && !phoneError) {
      // submission code yet to be completed
      
    }
  };

  return (
    <div>
      <div className="flex flex-col mb-10 p-2 md:p-4">
        <img
          loading="lazy"
          srcSet="https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg"
          className="aspect-[1.5] object-cover object-center mx-auto max-w-full"
          style={{ maxWidth: '100%', height: 'auto' }}
        />

        <div className="self-center flex w-[500px] max-w-full flex-col mt-14 px-5">
          <div className="text-black text-lg leading-[66.67%] uppercase w-full mt-1.5">
            Contact us
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex w-full items-start gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
              <div className="self-stretch flex flex-col w-[241px]">
                <label htmlFor="name" className="justify-center text-neutral-500 text-sm leading-[76.92%] self-stretch w-full">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border bg-white grow pl-4 pr-5 pt-4 pb-4 border-solid border-black"
                  value={name}
                  onChange={handleNameChange}
                />
                <p className="text-red-600">{nameError}</p>
              </div>

              <div className="self-stretch flex flex-col w-[241px]">
                <label htmlFor="email" className="justify-center text-neutral-500 text-sm leading-[76.92%] self-stretch w-full">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border bg-white grow pl-4 pr-5 pt-4 pb-4 border-solid border-black"
                  value={email}
                  onChange={handleEmailChange}
                />
                <p className="text-red-600">{emailError}</p>
              </div>
            </div>

            <div className="flex w-full flex-col mt-5 max-md:max-w-full">
              <label htmlFor="phone" className="justify-center text-neutral-500 text-sm leading-[76.92%] self-stretch max-w-[521px]">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border bg-white grow pl-4 pr-5 pt-4 pb-4 border-solid border-black"
                value={phone}
                onChange={handlePhoneChange}
              />
              <p className="text-red-600">{phoneError}</p>
            </div>

            <label htmlFor="message" className="justify-center text-neutral-500 text-sm leading-[76.92%] max-w-[521px] w-full mt-5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="border bg-white w-full pl-4 pr-5 pt-5 pb-24 border-solid border-black max-md:max-w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className="flex w-full grow flex-col mt-4 max-md:max-w-full">
              <button
                type="submit"
                className="bg-black self-stretch flex grow flex-col px-5 py-4 max-md:max-w-full">
                <span className="justify-center text-white text-center text-xs font-bold leading-[83.33%] uppercase self-center -mt-px">
                  Send
                </span>
              </button>
            </div>
          </form>
          {/* End Contact Form */}
        </div>

        <div className="self-center flex w-[501px] max-w-full grow flex-col mt-24 px-5">
          <div className="justify-center text-black text-sm leading-[76.92%] w-[246px] mt-1">
            E-mail
          </div>

          <div className="flex w-36 max-w-full items-start gap-3 mt-4">
            <div className="justify-center text-black text-xs leading-[83.33%] self-center w-[212px] my-auto mb-4">
              Sign up for our newsletter
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
