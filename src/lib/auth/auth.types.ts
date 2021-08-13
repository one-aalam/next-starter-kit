// supabase-js also provides a compatible type `UserCredentials` but we're not using it here as it considers `email` as an optional field, which we aren't allowing to happen in the application yet.
export type SupabaseAuthPayload = {
  email: string
  password?: string
}
