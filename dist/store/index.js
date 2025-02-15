import{createAsyncThunk as e,createSlice as t}from"@reduxjs/toolkit";import s from"axios";const a={accessToken:"MOCK",refreshToken:"MOCK"},r={accessToken:"MOCK",refreshToken:"MOCK"},o={accessToken:"MOCK",refreshToken:"MOCK"};async function n(e){try{return await e()}catch(e){const t=e;throw t.response?.data?{status:t.response.data.status,message:t.response.data.message}:500!==t.status||t.response?.data?{status:t.status,message:t.message}:"AxiosError"===t.name?{status:"Errore",message:"Servizi non raggiungibili"}:{status:"Errore",message:"Errore sconosciuto"}}}const i=e("slice/auth/doRegister",(async(e,{rejectWithValue:t})=>async function(e){return"true"===import.meta.env.VITE_USE_MOCK?(console.log("Modalità Mock attiva. Restituisco dati mock."),new Promise((e=>setTimeout((()=>e(a)),1e3)))):await n((async()=>(await s.post(`${import.meta.env.VITE_API}/auth/register`,e)).data))}(e).then((e=>e)).catch((e=>t(e))))),c=e("slice/auth/doLogin",(async(e,{rejectWithValue:t})=>async function(e){return"true"===import.meta.env.VITE_USE_MOCK?(console.log("Modalità Mock attiva. Restituisco dati mock."),new Promise((e=>setTimeout((()=>e(r)),1e3)))):await n((async()=>(await s.post(`${import.meta.env.VITE_API}/auth/login`,e)).data))}(e).then((e=>e)).catch((e=>t(e))))),l=e("slice/auth/doRefresh",(async(e,{rejectWithValue:t})=>async function(e){return"true"===import.meta.env.VITE_USE_MOCK?(console.log("Modalità Mock attiva. Restituisco dati mock."),new Promise((e=>setTimeout((()=>e(o)),1e3)))):await n((async()=>(await s.post(`${import.meta.env.VITE_API}/auth/refresh`,e)).data))}(e).then((e=>e)).catch((e=>t(e)))));var d;!function(e){e[e.IDLE=0]="IDLE",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILED=3]="FAILED"}(d||(d={}));const u=t({name:"slice/auth",initialState:{accessToken:localStorage.getItem("accessToken")||void 0,refreshToken:localStorage.getItem("refreshToken")||void 0,login:{status:d.IDLE,error:void 0},register:{status:d.IDLE,error:void 0}},reducers:{clearErrorsRegister:e=>{e.register.status=d.IDLE,e.register.error=void 0},clearErrorsLogin:e=>{e.login.status=d.IDLE,e.login.error=void 0}},extraReducers:e=>e.addCase(c.pending,(e=>{e.login.status=d.LOADING})).addCase(c.fulfilled,((e,t)=>{e.login.status=d.SUCCESS;const{accessToken:s,refreshToken:a}=t.payload;e.accessToken=s,e.refreshToken=a,localStorage.setItem("accessToken",s),localStorage.setItem("refreshToken",a)})).addCase(c.rejected,((e,t)=>{e.login.status=d.FAILED,e.login.error=t.payload})).addCase(i.pending,(e=>{e.register.status=d.LOADING})).addCase(i.fulfilled,((e,t)=>{e.register.status=d.SUCCESS;const{accessToken:s,refreshToken:a}=t.payload;e.accessToken=s,e.refreshToken=a,localStorage.setItem("accessToken",s),localStorage.setItem("refreshToken",a)})).addCase(i.rejected,((e,t)=>{e.register.status=d.FAILED,e.register.error=t.payload})).addCase(l.pending,(e=>{e.register.status=d.LOADING})).addCase(l.fulfilled,((e,t)=>{e.register.status=d.SUCCESS;const{accessToken:s,refreshToken:a}=t.payload;e.accessToken=s,e.refreshToken=a,localStorage.setItem("accessToken",s),localStorage.setItem("refreshToken",a)})).addCase(l.rejected,((e,t)=>{e.register.status=d.FAILED,e.register.error=t.payload}))}),g=u.actions,m={doRegister:i,doLogin:c,doRefresh:l},h=u.reducer;var T={auth:Object.freeze({__proto__:null,authActions:g,authAsyncActions:m,authSlice:h}),STATUS:d};export{T as default};
