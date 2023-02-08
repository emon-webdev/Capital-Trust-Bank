import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Loader from "./component/Loader/Loader";
import router from "./routes/routes";
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="App">
          <RouterProvider router={router} />
          <ToastContainer />
        </div>
      )}
    </div>
  );
}

export default App;
