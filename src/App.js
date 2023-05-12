import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Quizzes from "./components/Quizzes/Quizzes";
import About from "./components/About/About";
import NoPageFound from "./components/NoPageFound/NoPageFound";
import { Card } from "react-daisyui";
import Start from "./components/Start/Start";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Quizzes></Quizzes>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "quiz-start/:quizNo",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizNo}`
            );
          },
          element: <Start></Start>,
        },
        {
          path: "*",
          element: <NoPageFound></NoPageFound>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
