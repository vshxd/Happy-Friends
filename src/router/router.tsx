import { MainTemplate } from "components";
import { ContactsPage, FriendsPage, MainPage, ServicePage } from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.MAIN} element={<MainTemplate />}>
      <Route index element={<MainPage />} />
      <Route path={ROUTE.FRIENDS} element={<FriendsPage />} />
      <Route path={ROUTE.SERVICE} element={<ServicePage />} />
      <Route path={ROUTE.CONTACTS} element={<ContactsPage />} />
    </Route>,
  ),
);
