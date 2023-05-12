
'use client'
import { useState } from 'react';



const Footer = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitSuccess, setSubmitSuccess] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, email, message }),
  //     });

  //     if (!res.ok) {
  //       throw new Error('Failed to submit form');
  //     }

  //     setSubmitSuccess(true);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit} className="contact-form">
  //       <div>
  //         <label htmlFor="name">Name</label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           value={name}
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="email">Email</label>
  //         <input
  //           type="email"
  //           id="email"
  //           name="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="message">Message</label>
  //         <textarea
  //           id="message"
  //           name="message"
  //           value={message}
  //           onChange={(e) => setMessage(e.target.value)}
  //         ></textarea>
  //       </div>

  //       <div>
  //         {submitSuccess && (
  //           <p className="success-message">Thank you for getting in touch!</p>
  //         )}

  //         {!submitSuccess && (
  //           <button type="submit" disabled={isSubmitting}>
  //             {isSubmitting ? 'Submitting...' : 'Submit'}
  //           </button>
  //         )}
  //       </div>
  //     </form>

  //     <style jsx>{`
  //       .contact-form {
  //         display: flex;
  //         flex-direction: column;
  //         max-width: 500px;
  //         margin: 0 auto;
  //         padding: 2rem;
  //         background-color: #f6f8fa;
  //         border-radius: 8px;
  //       }

  //       label {
  //         font-weight: bold;
  //         margin-bottom: 0.5rem;
  //       }

  //       input,
  //       textarea {
  //         padding: 0.5rem;
  //         margin-bottom: 1rem;
  //         border-radius: 4px;
  //         border: 1px solid #ccc;
  //       }

  //       button {
  //         background-color: #0070f3;
  //         color: #fff;
  //         padding: 0.5rem 1rem;
  //         border-radius: 4px;
  //         border: none;
  //         cursor: pointer;
  //         transition: background-color 0.3s ease;
  //       }

  //       button:hover {
  //         background-color: #0055b8;
  //       }

  //       .success-message {
  //         color: #0070f3;
  //         margin-top: 1rem;
  //       }
  //     `}</style>
  //   </div>
  // );
};

export default Footer;


