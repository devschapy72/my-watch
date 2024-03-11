import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="flex gap-3 items-center">
      <div>
        {isAuthenticated && (
          <div>
            <img
              src={user.picture}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        )}
      </div>
      {isAuthenticated ? (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
          className="bg-blue-600 px-3 py-2 text-sm font-serif hover:bg-transparent border-2 border-blue-600 duration-300"
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          className="bg-blue-600 px-3 py-2 text-sm font-serif hover:bg-transparent border-2 border-blue-600 duration-300"
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;
