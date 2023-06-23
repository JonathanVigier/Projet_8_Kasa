import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import DwellingPage from "../pages/DwellingPage";
import DetailedDwelling from "../components/DetailedDwelling";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dwelling" element={<DwellingPage />}>
          <Route path=":id" element={<DetailedDwelling />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// const routes = [
//   {
//     path: "/",
//     element: <Home />,
//     loader: getAllDwellings,
//   },
//   {
//     path: "dwelling",
//     element: <DwellingPage />,
//     loader: getAllDwellings,
//     children: [
//       {
//         path: ":id",
//         element: <DetailedDwelling />,
//         loader: getAllDwellings,
//       },
//     ],
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/*",
//     element: <Error404 />,
//   },
// ];

// const router = createBrowserRouter(routes);

// const Router = () => {
//   return <RouterProvider router={router} />;
// };
