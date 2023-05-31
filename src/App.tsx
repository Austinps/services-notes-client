import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout, Public, DashboardLayout } from "./components";
import { Login, Welcome } from "./features/auth";
import { NotesList } from "./features/notes";
import { UsersList } from "./features/users";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashboardLayout />}>
          <Route index element={<Welcome />} />

          <Route path='notes'>
            <Route index element={<NotesList />} />
          </Route>

          <Route path='users'>
            <Route index element={<UsersList />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
