import { useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import Router from 'next/router'
import { supabase } from '~/lib/supabase'
import { useAuth } from '~/lib/auth'
import Layout from '~/components/Layout'
import { SpinnerFullPage } from '~/components/Spinner'
import { ROUTE_AUTH } from '~/config'
import { NextAppPageServerSideProps } from '~/types/app'

const ProfilePage = ({ }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { user, userLoading, signOut, loggedIn } = useAuth()

    useEffect(() => {
        if (!userLoading && !loggedIn) {
            Router.push(ROUTE_AUTH)
        }
    }, [userLoading, loggedIn]);

    if(userLoading) {
        return <SpinnerFullPage/>
    }

    return (
        <Layout useBackdrop={false}>
            <div className="h-screen flex flex-col justify-center items-center relative">
                <h2 className="text-3xl my-4">Howdie, { user && user.email ? user.email : 'Explorer' }!</h2>
                {!user && <small>You've landed on a protected page. Please <Link href="/">log in</Link> to view the page's full content </small>}
                {user && <div>
                    <button onClick={signOut} className="border bg-gray-500 border-gray-600 text-white px-3 py-2 rounded w-full text-center transition duration-150 shadow-lg">Sign Out</button>
                </div> }
            </div>
        </Layout>
    )
}

export default ProfilePage
// Fetch user data server-side to eliminate a flash of unauthenticated content.
export const getServerSideProps: GetServerSideProps = async ({ req }): Promise<NextAppPageServerSideProps> => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    // We can do a re-direction from the server
    if(!user) {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },
        }
    }
    // or, alternatively, can send the same values that client-side context populates to check on the client and redirect
    // The following lines won't be used as we're redirecting above
    return {
        props: {
            user,
            loggedIn: !!user
        }
    }
}