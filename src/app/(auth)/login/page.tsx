import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[550px] bg-white px-10 py-10 rounded-xl shadow-md'>
      <h1 className='text-4xl text-center font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Clash</h1>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p>Welcome Back</p>
        <form>
            <div className='mt-4'>
                <Label htmlFor='email'>Email</Label>
                <Input id="email" type="email" name="email" placeholder='Enter Your Email' />
            </div>
            <div className='mt-4'>
                <Label htmlFor='password'>Password</Label>
                <Input id="password" type="password" name="password" placeholder='Enter Your Password' />
            </div>
            <div className='text-right font-bold mt-2'>
              <Link href={"/forgot-password"}>Forgot Password?</Link>
            </div>
            <div className='mt-4'>
                <Button className="w-full">Submit</Button>
            </div>
        </form>
        <p className='mt-2 text-center'>Don't have an account?{" "}<strong><Link href={"/register"}>Register</Link></strong></p>
      </div>
    </div>
  )
}

export default Login
