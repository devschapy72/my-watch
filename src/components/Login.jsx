import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="text-sm font-serif hidden lg:flex items-center gap-3">
      <div>
        {isAuthenticated && (
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full overflow-hidden"
          />
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({
                logoutParams: { returnTo: window.location.origin },
              })
            }
            className="bg-red-600 hover:bg-blue-600 duration-300 cursor-pointer px-5 py-3 text-xs"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-600 hover:bg-red-600 duration-300 cursor-pointer px-5 py-3 text-xs"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
