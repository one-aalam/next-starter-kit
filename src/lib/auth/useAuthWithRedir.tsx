import { useEffect } from 'react'
import Router from 'next/router'
import { useAuth } from './useAuth'
import { ROUTE_AUTH } from '~/config'


export const useAuthWithRedir = () => {
  const context = useAuth()
  const { userLoading, loggedIn } = context

  useEffect(() => {
    if (!userLoading && !loggedIn) {
      Router.push(ROUTE_AUTH)
    }
  }, [userLoading, loggedIn])

  return context
}
