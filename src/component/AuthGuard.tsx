import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';

type Props = {
    beforeLogin?:React.ReactNode;
    history?:any;
    children?:React.ReactNode
}

const AuthGuard:React.FC<Props> = ({children, history, beforeLogin}:Props) => {
    // 获取登录状态
    const {isLogin, apiToken} = useSelector((state:StoreState) => state)

    useEffect(()=>{
        const checkLoginStatus = async() => {
            if(!isLogin){
                // 如果未登录
                
            }
        }
        checkLoginStatus()
    },[])

    return ( 
        <>
        {isLogin? children : beforeLogin}
        </>
    )
}

export default AuthGuard;