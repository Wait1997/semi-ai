import loadable from "@loadable/component";
import { Path } from "@/constant";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

const Layout = loadable(() => import("@/layout"));
const ChatWrapper = loadable(() => import("@/pages/chat"));
const SearchWrapper = loadable(() => import("@/pages/search"));
const Write = loadable(() => import("@/pages/write"));
const CreateImage = loadable(() => import("@/pages/create-image"));
const Read = loadable(() => import("@/pages/read"));
const HistoryList = loadable(() => import("@/pages/history-list"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Home} element={<Navigate to={Path.Chat} />} />
        <Route
          path={Path.Chat}
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<ChatWrapper />}></Route>
          <Route path="search" element={<SearchWrapper />}></Route>
          <Route path="write" element={<Write />}></Route>
          <Route path="create-image" element={<CreateImage />}></Route>
          <Route path="chat-with-doc" element={<Read />}></Route>
          <Route path="thread/list" element={<HistoryList />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
