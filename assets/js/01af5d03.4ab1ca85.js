"use strict";(self.webpackChunkreact_goblin_system_docs=self.webpackChunkreact_goblin_system_docs||[]).push([[519],{3023:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(3696);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},4790:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"services/auth-service","title":"Authentication Service","description":"The Authentication Service provides a set of utility functions for handling user authentication, including login, registration, token management, and API requests.","source":"@site/docs/services/auth-service.md","sourceDirName":"services","slug":"/services/auth-service","permalink":"/pkg-fe-react-goblin-system/docs/services/auth-service","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","previous":{"title":"HTTP Request Handlers","permalink":"/pkg-fe-react-goblin-system/docs/services/http-handlers"},"next":{"title":"Authentication Store","permalink":"/pkg-fe-react-goblin-system/docs/store/auth-store"}}');var r=t(2540),i=t(3023);const o={sidebar_position:1},a="Authentication Service",c={},l=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Authentication Functions",id:"authentication-functions",level:3},{value:"<code>login(email: string, password: string): Promise&lt;User&gt;</code>",id:"loginemail-string-password-string-promiseuser",level:4},{value:"<code>register(userData: RegisterData): Promise&lt;User&gt;</code>",id:"registeruserdata-registerdata-promiseuser",level:4},{value:"<code>logout(): Promise&lt;void&gt;</code>",id:"logout-promisevoid",level:4},{value:"Token Management",id:"token-management",level:3},{value:"<code>getToken(): string | null</code>",id:"gettoken-string--null",level:4},{value:"<code>setToken(token: string): void</code>",id:"settokentoken-string-void",level:4},{value:"<code>removeToken(): void</code>",id:"removetoken-void",level:4},{value:"User Management",id:"user-management",level:3},{value:"<code>getCurrentUser(): User | null</code>",id:"getcurrentuser-user--null",level:4},{value:"<code>isAuthenticated(): boolean</code>",id:"isauthenticated-boolean",level:4},{value:"HTTP Client",id:"http-client",level:2},{value:"Examples",id:"examples",level:2},{value:"Login Form with Auth Service",id:"login-form-with-auth-service",level:3},{value:"Authentication Check in Routes",id:"authentication-check-in-routes",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Related Components",id:"related-components",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"authentication-service",children:"Authentication Service"})}),"\n",(0,r.jsx)(n.p,{children:"The Authentication Service provides a set of utility functions for handling user authentication, including login, registration, token management, and API requests."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Auth Service module offers a comprehensive set of utilities for implementing authentication in your application:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Authentication APIs"})," - Functions for login, registration, and logout"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Token Management"})," - JWT token handling, including storage and parsing"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HTTP Client"})," - Configured Axios instance with authentication headers"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Error Handling"})," - Standardized error handling for authentication operations"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.p,{children:"The Auth Service is included in the main package:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install pkg-fe-react-goblin-system\n"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(n.p,{children:"Import the Auth Service in your components or services:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { \n  login,\n  register,\n  logout,\n  getCurrentUser,\n  isAuthenticated\n} from 'pkg-fe-react-goblin-system/services/auth';\n\n// Log in a user\nconst handleLogin = async (email, password) => {\n  try {\n    const user = await login(email, password);\n    console.log('Logged in successfully:', user);\n    return user;\n  } catch (error) {\n    console.error('Login failed:', error.message);\n    throw error;\n  }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsx)(n.h3,{id:"authentication-functions",children:"Authentication Functions"}),"\n",(0,r.jsx)(n.h4,{id:"loginemail-string-password-string-promiseuser",children:(0,r.jsx)(n.code,{children:"login(email: string, password: string): Promise<User>"})}),"\n",(0,r.jsx)(n.p,{children:"Authenticates a user with their email and password."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { login } from 'pkg-fe-react-goblin-system/services/auth';\n\nconst handleLogin = async () => {\n  try {\n    const user = await login('user@example.com', 'password123');\n    // Handle successful login\n  } catch (error) {\n    // Handle login failure\n  }\n};\n"})}),"\n",(0,r.jsx)(n.h4,{id:"registeruserdata-registerdata-promiseuser",children:(0,r.jsx)(n.code,{children:"register(userData: RegisterData): Promise<User>"})}),"\n",(0,r.jsx)(n.p,{children:"Registers a new user with the provided data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { register } from 'pkg-fe-react-goblin-system/services/auth';\n\nconst handleRegister = async () => {\n  try {\n    const user = await register({\n      email: 'newuser@example.com',\n      password: 'securepassword',\n      name: 'New User',\n      // Other registration fields\n    });\n    // Handle successful registration\n  } catch (error) {\n    // Handle registration failure\n  }\n};\n"})}),"\n",(0,r.jsx)(n.h4,{id:"logout-promisevoid",children:(0,r.jsx)(n.code,{children:"logout(): Promise<void>"})}),"\n",(0,r.jsx)(n.p,{children:"Logs out the current user, clearing tokens and state."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { logout } from 'pkg-fe-react-goblin-system/services/auth';\n\nconst handleLogout = async () => {\n  try {\n    await logout();\n    // Handle successful logout\n  } catch (error) {\n    // Handle logout failure\n  }\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"token-management",children:"Token Management"}),"\n",(0,r.jsx)(n.h4,{id:"gettoken-string--null",children:(0,r.jsx)(n.code,{children:"getToken(): string | null"})}),"\n",(0,r.jsx)(n.p,{children:"Retrieves the current authentication token from storage."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { getToken } from 'pkg-fe-react-goblin-system/services/auth';\n\nconst token = getToken();\nif (token) {\n  // User has a valid token\n} else {\n  // No token found\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"settokentoken-string-void",children:(0,r.jsx)(n.code,{children:"setToken(token: string): void"})}),"\n",(0,r.jsx)(n.p,{children:"Stores an authentication token."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { setToken } from 'pkg-fe-react-goblin-system/services/auth';\n\nsetToken('your-jwt-token-here');\n"})}),"\n",(0,r.jsx)(n.h4,{id:"removetoken-void",children:(0,r.jsx)(n.code,{children:"removeToken(): void"})}),"\n",(0,r.jsx)(n.p,{children:"Removes the authentication token from storage."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { removeToken } from 'pkg-fe-react-goblin-system/services/auth';\n\nremoveToken(); // Clear the token (e.g., during logout)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"user-management",children:"User Management"}),"\n",(0,r.jsx)(n.h4,{id:"getcurrentuser-user--null",children:(0,r.jsx)(n.code,{children:"getCurrentUser(): User | null"})}),"\n",(0,r.jsx)(n.p,{children:"Gets the current authenticated user based on the stored token."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { getCurrentUser } from 'pkg-fe-react-goblin-system/services/auth';\n\nconst user = getCurrentUser();\nif (user) {\n  console.log('Current user:', user.name);\n} else {\n  console.log('No user is currently authenticated');\n}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"isauthenticated-boolean",children:(0,r.jsx)(n.code,{children:"isAuthenticated(): boolean"})}),"\n",(0,r.jsx)(n.p,{children:"Checks if a user is currently authenticated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { isAuthenticated } from 'pkg-fe-react-goblin-system/services/auth';\n\nif (isAuthenticated()) {\n  // User is authenticated\n} else {\n  // User is not authenticated\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"http-client",children:"HTTP Client"}),"\n",(0,r.jsx)(n.p,{children:"The Auth Service includes a pre-configured Axios instance that automatically handles authentication headers."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { authHttpClient } from 'pkg-fe-react-goblin-system/services/auth';\n\n// Making an authenticated API request\nconst fetchUserData = async (userId) => {\n  try {\n    const response = await authHttpClient.get(`/users/${userId}`);\n    return response.data;\n  } catch (error) {\n    console.error('Error fetching user data:', error);\n    throw error;\n  }\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"login-form-with-auth-service",children:"Login Form with Auth Service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import React, { useState } from 'react';\nimport { login } from 'pkg-fe-react-goblin-system/services/auth';\nimport { Input, Button, Text } from 'pkg-fe-react-goblin-system';\n\nfunction LoginForm({ onSuccess }) {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [error, setError] = useState('');\n  const [isLoading, setIsLoading] = useState(false);\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    setError('');\n    setIsLoading(true);\n    \n    try {\n      const user = await login(email, password);\n      onSuccess(user);\n    } catch (err) {\n      setError(err.message || 'Login failed. Please try again.');\n    } finally {\n      setIsLoading(false);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      {error && <Text color=\"error\">{error}</Text>}\n      \n      <Input\n        label=\"Email\"\n        type=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        required\n      />\n      \n      <Input\n        label=\"Password\"\n        type=\"password\"\n        value={password}\n        onChange={(e) => setPassword(e.target.value)}\n        required\n      />\n      \n      <Button type=\"submit\" disabled={isLoading}>\n        {isLoading ? 'Logging in...' : 'Login'}\n      </Button>\n    </form>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"authentication-check-in-routes",children:"Authentication Check in Routes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import React, { useEffect, useState } from 'react';\nimport { Navigate } from 'react-router-dom';\nimport { isAuthenticated } from 'pkg-fe-react-goblin-system/services/auth';\n\nfunction ProtectedRoute({ children }) {\n  const [authChecked, setAuthChecked] = useState(false);\n  const [isAuthed, setIsAuthed] = useState(false);\n  \n  useEffect(() => {\n    const checkAuth = () => {\n      const authed = isAuthenticated();\n      setIsAuthed(authed);\n      setAuthChecked(true);\n    };\n    \n    checkAuth();\n  }, []);\n  \n  if (!authChecked) {\n    return <div>Checking authentication...</div>;\n  }\n  \n  if (!isAuthed) {\n    return <Navigate to=\"/login\" />;\n  }\n  \n  return children;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"You can configure the Auth Service by setting environment variables:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// In your app's entry point (e.g., index.js)\nimport { configureAuthService } from 'pkg-fe-react-goblin-system/services/auth';\n\nconfigureAuthService({\n  apiBaseUrl: 'https://api.example.com',\n  tokenStorage: 'localStorage', // or 'sessionStorage', 'memory'\n  tokenKey: 'custom_token_key', // Default is 'auth_token'\n  refreshTokenKey: 'custom_refresh_token_key', // Default is 'refresh_token'\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-components",children:"Related Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/pkg-fe-react-goblin-system/docs/providers/auth-provider",children:"Auth Provider"})," - React context provider for authentication"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/pkg-fe-react-goblin-system/docs/store/auth-store",children:"Auth Store"})," - Redux state management for authentication"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);