import AnimationWrapper from '../common/page-animation';
import InputBox from '../components/input.component';
import { useContext, useEffect, useRef } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { UserContext } from '../App';
import { useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const {
    userAuth,
    userAuth: { access_token, profile_img, new_notification_available },
    setUserAuth,
  } = useContext(UserContext);

  const currentUrl = window.location.href;
  const urlParams = new URLSearchParams(window.location.search);

  const verificationToken = urlParams.get('verificationToken');

  let changePasswordForm = useRef();

  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

  const checkVerificationToken = () => {
    console.log(verificationToken)
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + '/check-verification-token', {
        verificationToken: verificationToken,
      })
      .then(({ data }) => {
        setUserAuth({ ...userAuth, ...data });
      })
      .catch(({ response }) => {
        toast.error(response.data.error);
      });
  };

  useEffect(() => {
    if (verificationToken) {
      checkVerificationToken();
    }
  }, [verificationToken]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let form = new FormData(changePasswordForm.current);
    let formData = {};

    for (let [key, value] of form.entries()) {
      formData[key] = value;
    }

    let { currentPassword, newPassword } = formData;

    if (!currentPassword.length || !newPassword.length) {
      return toast.error('Fill all the inputs');
    }

    if (
      !passwordRegex.test(currentPassword) ||
      !passwordRegex.test(newPassword)
    ) {
      return toast.error(
        'Password shouldbe 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters'
      );
    }

    e.target.setAttribute('disabled', true);

    let loadingToast = toast.loading('Updating....');

    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + '/change-password', formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(() => {
        toast.dismiss(loadingToast);
        e.target.removeAttribute('disabled');
        return toast.success('Password Updated');
      })
      .catch(({ response }) => {
        toast.dismiss(loadingToast);
        e.target.removeAttribute('disabled');
        return toast.error(response.data.error);
      });
  };

  return (
    <AnimationWrapper>
      <Toaster />
      <form ref={changePasswordForm} className='p-4 h-cover flex flex-col items-center'>
        <h1 className='font-bold text-lg'>Reset Your Password</h1>

        <div className='flex flex-col items-center py-10 w-full md:max-w-[400px]'>
          <InputBox
            name='currentPassword'
            type='password'
            className='profile-edit-input'
            placeholder='Current Password'
            icon='fi-rr-unlock'
          />
          <InputBox
            name='newPassword'
            type='password'
            className='profile-edit-input'
            placeholder='New Password'
            icon='fi-rr-unlock'
          />

          <button
            onClick={handleSubmit}
            className='btn-dark px-10'
            type='submit'
          >
            Change Password
          </button>
        </div>
      </form>
    </AnimationWrapper>
  );
};
export default ResetPassword;
