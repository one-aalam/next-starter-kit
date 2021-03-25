import { GetServerSideProps, NextPage } from 'next'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/Layout'
import { FaLock } from 'react-icons/fa'

const IndexPage: NextPage<NextAppPageProps> = ({}) => {
  return (
    <Layout useBackdrop={true}>
      <div className="h-screen flex flex-col justify-center items-center relative">

      {/* App logo and tagline*/}
      <div className="w-full text-center mb-4 flex  flex-col place-items-center">
        <div><FaLock className="text-gray-600 text-5xl shadow-sm"/></div>
        <h3 className="text-3xl text-gray-600">Supa<strong>Auth</strong></h3>
        <small>Please provide your <strong>email</strong> and <strong>password</strong> and sign up</small>
      </div>

      {/* Sign Up form --> */}
      <form className="w-full sm:w-1/2 xl:w-1/3">
        <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-800 mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
              placeholder="Your password"
              required
            />
          </div>

          {/* <!-- Sign Up form: Actions --> */}

          <div className="flex pt-4 gap-2">
            <button type="submit" className="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow"
            >
              Sign Up
            </button>
          </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default IndexPage

IndexPage.defaultProps = {
  meta: {
    title: 'SupaAuth - Sign Up'
  }
}