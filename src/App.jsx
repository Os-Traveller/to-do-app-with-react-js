import AppBody from "./Components/AppBody";
import Head from "./Components/Head";

function App() {
  return (
    <section className="bg-[#E3E9FF] min-h-screen flex justify-center items-center p-5">
      <div className="md:max-w-[500px] w-full">
        <Head />
        <AppBody />
      </div>
    </section>
  );
}

export default App;
