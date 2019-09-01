import ItemDetail from "../components/exercise/item-detail";
import Exercise from "../components/exercise";
import ReactLifeCycle from "../pages/react-lifecycle";
import Home from "../pages/home";

export const appRoutes = [
    {
        path: '/exercise/:id',
        component: ItemDetail
    },
    {
        path: '/exercise',
        component: Exercise
    },
    {
        path: '/react-lifecycle',
        component: ReactLifeCycle
    },
    {
        path: '/',
        component: Home
    }
];