import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppBody from "./Components/AppBody";
import auth from "./Components/Authenticaltion/firebase.init";
import Head from "./Components/Head";
import Loader from "./Components/loader/Loader";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loader size={"100px"} />;
  }
  return (
    <section className="bg-[#E3E9FF] min-h-screen flex justify-center items-center p-5">
      <div className="md:max-w-[500px] w-full">
        <Head />
        <AppBody />
      </div>
      <ToastContainer />
    </section>
  );
}

export default App;
