import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsDetailPage from "../pages/ProductsDetailPage/ProductsDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import TypeProductsPage from "../pages/TypeProductsPage/TypeProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/orders',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/:type',
        page: TypeProductsPage,
        isShowHeader: true
    },
        {
        path: '/product-detail',
        page: ProductsDetailPage,
        isShowHeader: true
    },
    {
        path: '/*',
        page: NotFound,
        isShowHeader: false
    }
]