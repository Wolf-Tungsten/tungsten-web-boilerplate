import * as React from 'react';

type Props = {
    children?:React.ReactNode
}

const AuthGuard:React.FC<Props> = ({children}:Props) => {
    return (
        <>
        {children}
        </>
    )
}