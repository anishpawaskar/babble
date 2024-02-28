import React from 'react';
//import { FORM_ACTIONS } from './registerForm.constant';
import { Link } from 'react-router-dom';

export const RegisterPresentation = ({
  handleSubmit,
  handleFormActions,
  formActionInputs,
}) => {
  const formActions = formActionInputs.map((action) => {
    return (
      <label
        key={action?.id}
        className="w-full text-[--white-color] text-[0.70rem] font-semibold leading-none uppercase"
      >
        {action?.name}
        <span
          className={
            action.requiredLabel === '*'
              ? 'text-[--error-color]'
              : 'text-[--error-color] italic normal-case font-normal'
          }
        >
          {' '}
          {action?.requiredLabel}
        </span>
        <input
          onChange={(e) => handleFormActions(e)}
          type={action?.type}
          name={action?.name}
          className="w-full h-8 rounded-sm mt-2 text-black text-[0.93rem] font-normal focus:outline-none px-2 py-3"
        />
      </label>
    );
  });

  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover"
        src="/images/auth-background.png"
        alt="illustation"
      />
      <form className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-4  bg-[--primary-color] p-8">
        <h2 className="text-2xl font-semibold text-center text-[--white-color]">
          Create an account
        </h2>
        <div className="flex flex-col items-center justify-center gap-6">
          {formActions}
          <label
            className=" w-full text-[--white-color] text-xs leading-none"
            htmlFor="checkbox"
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="checked:bg-[--secondary-color]"
              //required
            />
            <b className="text-[--secondary-color] ml-1">
              Terms and Conditions:
            </b>{' '}
            reading this is more effective than counting sheep.
          </label>
          <div className="w-full flex flex-col gap-2">
            <button
              onClick={(e) => handleSubmit(e)}
              className="text-[--white-color] w-full text-base bg-[--secondary-color] p-2 rounded font-semibold"
            >
              Submit
            </button>
            <p className="text-xs text-[--white-color] w-full text-left">
              By proceeding, you consent to us selling your soul to the highest
              bidder
            </p>
          </div>
        </div>
        <Link
          to="/login"
          className="text-[--secondary-color] text-sm text-left w-full font-semibold"
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};
