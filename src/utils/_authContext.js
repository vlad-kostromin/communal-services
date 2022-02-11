// import { useHistory } from "react-router-dom";
// import React, { createContext, useState, useContext, useEffect } from "react";

// import { actions } from "../actions";
// import { ls, appService } from "../utils";

// const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const history = useHistory();

//   const [userToken, setUserToken] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const lsToken = ls.get("token");
//     setUserToken(lsToken);

//     if (!!lsToken) {
//       appService.defaults.headers.common["Authorization"] = lsToken;

//       setLoading(false);
//       if (history.location.pathname === "/login") {
//         history.replace("/");
//       }
//       if (
//         history.location.pathname === "/" &&
//         ["data_scientist", "doctor"].includes(ls.get("roles"))
//       ) {
//         history.replace("/data_markup");
//       }
//     } else {
//       if (!history.location.pathname.includes("/report")) {
//         history.replace("/login");
//       }

//       setLoading(false);
//     }
//   }, [history]);

//   const signin = async (loginData) => {
//     const data = await actions.login(loginData);

//     if (data.token && data.refreshTokenId) {
//       const payload = data.token.split(".");
//       const decode = JSON.parse(atob(payload[1]));
//       const roles = decode.roles[0];
//       ls.set("login", loginData.login);
//       ls.set("token", data.token);
//       ls.set("roles", roles);
//       setUserToken(data.token);
//       appService.defaults.headers.common["Authorization"] = data.token;
//       if (["data_scientist", "doctor"].includes(roles)) {
//         history.push("/data_markup");
//       }
//       if (roles === "edifier") {
//         history.push("/");
//       }
//       ls.set("refreshTokenId", data.refreshTokenId);
//     }
//     return data.token;
//   };

//   const logout = async () => {
//     const refreshTokenId = ls.get("refreshTokenId");
//     const response = await actions.logout(refreshTokenId);
//     setUserToken("");
//     delete appService.defaults.headers.common["Authorization"];
//     ls.remove("token");
//     history.push("/login");
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuth: !!userToken,
//         userToken,
//         loading,
//         logout,
//         signin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export function useAuth() {
//   const context = useContext(AuthContext);

//   return context;
// }
