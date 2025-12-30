//核心逻辑:有 token 正常跳转无 token 去登录
import React from 'react';
import { getToken } from '@/utils';
import { Navigate } from 'react-router-dom';

interface AuthRouteProps {
  children: React.ReactNode;
}

export function AuthRoute({ children }: AuthRouteProps) {
    const token = getToken();
    if (token) {
        return <>{children}</>;
    } else {
        return <Navigate to="/login" replace />;
    }
}

