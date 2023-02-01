import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Loader from "./component/Loader/Loader";
import router from "./routes/routes";
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loader ?
        <Loader />
        :
        <div className="App">
          <ProSidebarProvider >
            <RouterProvider router={router} />
          </ProSidebarProvider>
        </div>
      }
    </div>
  );
}

export default App;
