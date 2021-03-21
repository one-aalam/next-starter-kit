import { FunctionComponent } from 'react'

export type NextAppSEOProps = {
    title: string
}

export type NextAppPageProps = {
    meta: NextAppSEOProps,
    Layout: FunctionComponent,
}