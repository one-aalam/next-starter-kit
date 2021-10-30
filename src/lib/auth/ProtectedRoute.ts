import type { GetServerSidePropsContext } from 'next'
import { User } from '@supabase/supabase-js'
import { supabase } from '~/lib/supabase'

export type ProtectedRouteProps = {
    props: {
      user: User
      loggedIn: boolean
      [key:string]: any
    }
  }

export type ProtectedRouteRedirProps = {
    redirect: {
        destination: string
        permanent: boolean
    }
}

export type ProtectedRouteServerSideProps = ProtectedRouteProps | ProtectedRouteRedirProps

export type GetPropsFuncProps = {
    user?: User
}

export type GetPropsFunc = (option: GetPropsFuncProps) => void

export type ProtectedRouteOption = {
    context: GetServerSidePropsContext
    redirectTo?: string
    getPropsFunc?: GetPropsFunc
}

export const ProtectedRoute = async ( { context: { req }, redirectTo = '/', getPropsFunc = () => {} }: ProtectedRouteOption): Promise<ProtectedRouteServerSideProps> => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    // We can do a re-direction from the server
    if (!user) {
        return {
          redirect: {
            destination: redirectTo ?? '/',
            permanent: false,
          },
        }
    }

    const resolvedProps = getPropsFunc ? await getPropsFunc({ user }) : {}
    // or, alternatively, can send the same values that client-side context populates to check on the client and redirect
    return {
        props: {
            ...resolvedProps,
            user,
            loggedIn: !!user,
        }
    }
}

export default ProtectedRoute
