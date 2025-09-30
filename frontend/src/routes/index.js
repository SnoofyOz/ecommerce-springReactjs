import HomePage from "../pages/Home/Home.jsx";
import Product from "../pages/Mn/Product.jsx";
import User from "../pages/Mn/User.jsx";
import ProductDetail from "../pages/Mn/ProductDetail.jsx";
import UserDetail from "../pages/Mn/UserDetail.jsx";
import Login from "../pages/SignInPage/SignInPage.jsx";
import Register from "../pages/SignUpPage/SignUpPage.jsx";
import SignInPage from "../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage/SignUpPage.jsx";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: Product,
        isShowHeader: true
    },
    {
        path: '/users',
        page: User,
        isShowHeader: true
    },
    {
        path: '/login',
        page: SignInPage,
        isShowHeader: true
    },
    {
        path: '/register',
        page: SignUpPage,
        isShowHeader: true
    },
    {
        path: '/products/:id',
        page: ProductDetail,
        isShowHeader: true
    },
    {
        path: '/users/:id',
        page: UserDetail,
        isShowHeader: true
    }
]