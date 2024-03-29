import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: "", email: "", message: ""});
  const [isLoading, setisLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prabhu",
          from_email: form.email,
          to_email: "prabhu143off@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(() => {
      setisLoading(false);

      setForm({name: "", email: "", message: ""})

    }).catch((error)=>{
      setisLoading(false);
      console.log(error);
    })
  };
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className='head-text'>Get in touch</h1>
        <form 
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              type="text"
              name="name"
              className='input'
              placeholder='Ashwin'
              required
              value={ form.name }
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
              type="email"
              name="email"
              className='input'
              placeholder='ashwin@gmail.com'
              required
              value={ form.email }
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
              name="message"
              rows={4}
              className='textarea'
              placeholder='Let me know, how can I help you'
              required
              value={ form.message }
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className="">
        
      </div>
    </section>
  )
}

export default Contact