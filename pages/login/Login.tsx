import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";

const Login = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    // User is signed in
    const { user } = session;

    return (
      <>
        <Avatar alt={user?.name?.toString()} src={user?.image?.toString()} />

        <p>Signed in as {user?.email}</p>
        <p>Signed in as {user?.name}</p>
        <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  } else {
    // User is not signed in
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }
};

export default Login;
