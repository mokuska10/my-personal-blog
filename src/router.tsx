import React from "react";
import { Routes, Route } from "react-router-dom";
import MyThoughtsPage from "./components/pages/my-thoughts-page";
import ReadingPage from "./components/pages/reading-page";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadingMotivation from "./components/my-reading-motivation";

const AppRouter: React.FC = () => (
        <Routes>
            <Route 
                path="/" 
                element={
                    <div className="page-wrapper">
                        <Header />
                        <main className="page-main">
                            <Hero /> 
                        </main>
                        <Footer />
                    </div>
                }
                >
            </Route>
            <Route 
                path="/ganduri" 
                element={
                    <div className="page-wrapper">
                        <Header />
                        <main className="page-main">
                            <ReadingMotivation />
                            <MyThoughtsPage />
                        </main>
                        <Footer />
                    </div>
                } 
            />
            <Route 
                path="/reading/:id" 
                element={
                    <div className="page-wrapper">
                        <Header />
                        <main className="page-main">
                            <ReadingPage />
                        </main>
                        <Footer />
                    </div>
                }
            >
            </Route>
        </Routes>
)

export default AppRouter;