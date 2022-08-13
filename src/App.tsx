import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OnboardingTracker from "./pages/OnboardingTracker";
import Page404 from "./pages/404/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnboardingTracker />} />
            <Route path="/users" element={<OnboardingTracker />}>
              <Route index element={<OnboardingTracker />} />
              <Route path=":userId" element={<OnboardingTracker />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
