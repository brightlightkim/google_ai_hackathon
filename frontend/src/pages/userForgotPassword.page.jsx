import AnimationWrapper from '../common/page-animation';
import InputBox from '../components/input.component';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';
import { storeInSession } from '../common/session';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from '../components/loader.component';

const UserForgotPassword = () => {
  const form = useRef();
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [verificationLink, setVerificationLink] = useState('');
  let [linkSent, setLinkSent] = useState(false);
  let [loading, setLoading] = useState(false);

  function generateVerificationToken() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let email = form.current.to_email.value;
    const formData = new FormData();
    let verificationToken = generateVerificationToken();
    let verificationLink = `https://byukbsa.org/reset-password?verificationToken=${verificationToken}`;

    await axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + '/check-user', {
        email: email,
      })
      .then(({ data }) => {
        formData.append('to_email', email);
        formData.append('to_name', data.fullname);
        formData.append('verificationLink', verificationLink);

        setEmail(email);
        setUsername(data.fullname);
        setVerificationLink(verificationLink);
      })
      .catch(({ response }) => {
        setLoading(false);
        toast.error(response.data.error);
      });

    await axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + '/add-verification-token', {
        email: email,
        verificationToken: verificationToken,
      })
      .then(({ data }) => {
        emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            formData
          )
          .then(
            () => {
              setLoading(false);
              console.log('SUCCESS!');
              toast.success('Reset password link sent to your email');
              setLinkSent(true);
            },
            (error) => {
              setLoading(false);
              console.log(error);
              console.log('FAILED...', error.text);
              toast.error('Failed to send reset password link');
            }
          );
      });
    
  };

  return (
    <AnimationWrapper keyValue='User Forgot Password'>
      <section className='h-cover flex flex-col items-center justify-center'>
        <Toaster />
        {
          loading? <Loader /> :
          ''
        }
        {!linkSent ? (
          <>
            <h1 className='mb-8 text-xl font-bold'>
              Type Your Email to Reset Password
            </h1>
            <form ref={form} id='formElement' className='w-[80%] max-w-[400px]'>
              <InputBox
                name='to_email'
                type='to_email'
                placeholder='Email'
                icon='fi-rr-envelope'
              />
              <InputBox
                name='to_name'
                type='to_name'
                icon='fi-rr-envelope'
                value={username}
                hidden={true}
              />
              <InputBox
                name='verificationLink'
                type='verificationLink'
                icon='fi-rr-envelope'
                value={verificationLink}
                hidden={true}
              />

              <button
                className='btn-dark center mt-10'
                type='submit'
                onClick={handleSubmit}
              >
                Send Verification Link
              </button>
            </form>
          </>
        ) : (
          <div className='text-center'>
            <h1 className='text-2xl font-bold'>Reset Password Link Sent</h1>
            <p className='mt-4'>
              We have sent a reset password link to your email.
            </p>
            <p className='text-sky-600 font-bold'>{email}</p>
            <p className='mt-4'>Click on the link to reset your password.</p>
          </div>
        )}
      </section>
    </AnimationWrapper>
  );
};

export default UserForgotPassword;
