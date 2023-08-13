import { useEffect } from "react";
import { useRouter } from "next/router";
import PrivateComponent from "../components/Private";
import useAuth from "../hooks/auth";

function MyPage() {
  const router = useRouter();
  const { loggedIn } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      router.push("/login");
    }
  }, [loggedIn]);

  return loggedIn ? <PrivateComponent /> : null;
}

export default MyPage;
