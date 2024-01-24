import * as React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Render_card } from "../pages/Render_card";
import { Layout } from "../pages/Layout";
import { Card_details } from "../pages/Card _details";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<Layout />}>        
        <>
            <Route path="" element={<Render_card />} />
            <Route path="product/:id" element={<Card_details />} />
        </>
        </Route>
    )
)


const Router_app = () => {
    return (
        <RouterProvider router={router} />
    )
}

export { Router_app }