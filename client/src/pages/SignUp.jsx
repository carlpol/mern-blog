import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="flex-1">
        <Link to="/" className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-lg text-white'>Carlos'</span>
        Blog
      </Link>
      <p className='text-sm mt-5'>This is a demo project you can sign in with email and password or with Google</p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username'/>
              <TextInput
                type='text'
                placeholder='username'
                id='username'
              />
            </div>
            <div>
              <Label value='Your Email'/>
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput
                type='password'
                placeholder='password'
                id='password'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
