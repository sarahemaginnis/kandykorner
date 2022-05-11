import React from "react";
import { Route } from "react-router-dom";
import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/products">
                <ProductList />
            </Route>
            <Route path="/locations">
                <LocationList />
            </Route>
        </>
    )
}