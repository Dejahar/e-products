import AuthProvider from "../auth/context/AuthProvider";
import { ProductsPages } from "./ProductsPages";

export const ProductsApp = () => {
    return (
        <>
            <AuthProvider>
                <ProductsPages/>
            </AuthProvider>
        </>
    )
}