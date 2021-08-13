import { useState } from 'react'
import { NextPage } from 'next'
import { FaLock, FaGithub } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/Layout'
import Spinner from '~/components/Spinner'
import { useFormFields } from '~/lib/utils'
import { useAuth } from '~/lib/auth'

type SignUpFieldProps = {
  email: string
  password: string
}

const FORM_VALUES: SignUpFieldProps = {
  email: '',
  password: '',
}

const IndexPage: NextPage<NextAppPageProps> = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const { loading, signIn, signUp, signInWithProvider } = useAuth()
  // Now since we have our form ready, what we're gonna need for signing up our users
  // 1. let users provide email and password
  const [values, handleChange, resetFormFields] =
    useFormFields<SignUpFieldProps>(FORM_VALUES)
  // 2. send the provided details to Supabase

  const handleSumbit = async (event: React.FormEvent) => {
    event.preventDefault()
    isSignIn ? await signIn(values) : await signUp(values)
    resetFormFields()
  }

  return (
    <Layout useBackdrop={true} usePadding={false}>
      <div className="h-screen flex flex-col justify-center items-center relative">
        {/* App logo and tagline*/}
        <div className="w-full text-center mb-4 flex  flex-col place-items-center">
          <div>
            <FaLock className="text-gray-600 text-5xl shadow-sm" />
          </div>
          <h3 className="text-3xl text-gray-600">
            Supa<strong>Auth</strong>&nbsp;
          </h3>
          <small>
            Please provide your <strong>email</strong> and{' '}
            <strong>password</strong> and {isSignIn ? 'Log In' : 'Sign Up'}
          </small>
        </div>

        {/* Sign Up form --> */}
        <form className="w-full sm:w-1/2 xl:w-1/3" onSubmit={handleSumbit}>
          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
            <button
              onClick={(evt) => {
                evt.preventDefault()
                signInWithProvider('github')
              }}
              className="flex-1 bg-gray-200 text-green-700 py-3 rounded w-full text-center shadow"
            >
              <FaGithub className="inline-block text-2xl" />{' '}
              {isSignIn ? 'Log In' : 'Sign Up'} with <strong>Github</strong>
            </button>
            <hr className="my-4" />
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-semibold text-gray-800 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
                placeholder="Your Email"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-semibold text-gray-800 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
                placeholder="Your password. Leave empty for password-less login"
                value={values.password}
                onChange={handleChange}
              />
            </div>

            {/* <!-- Sign Up & Sign In form: Actions --> */}

            <div className="flex pt-4 gap-2">
              <button
                type="submit"
                className="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow"
              >
                {isSignIn ? 'Log In' : 'Sign Up'}
              </button>
              <div className="flex-1 text-right">
                <small className="block text-gray-600">
                  {isSignIn ? 'Not a member yet?' : 'Already a member?'}{' '}
                </small>
                <a
                  className="block font-semibold"
                  href=""
                  onClick={(e) => {
                    e.preventDefault()
                    setIsSignIn(!isSignIn)
                  }}
                >
                  {isSignIn ? 'Sign Up' : 'Log In'}
                </a>
              </div>
            </div>
          </div>
        </form>
        <div className="h-12 w-12 relative">{loading && <Spinner />}</div>
      </div>
    </Layout>
  )
}

export default IndexPage

IndexPage.defaultProps = {
  meta: {
    title: 'SupaAuth - Sign Up',
  },
}
