import Layout from "@/components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Servey from "@/pages/Servey";
import Auth from "@/pages/Auth";
import Select from "@/pages/Select";
import Information from "@/pages/Information";
import Preview from "@/pages/Preview";
import Search from "@/pages/Search";
import Letter from "@/pages/Letter";
import Mypage from "@/pages/Mypage";
import ModifyInformation from "@/pages/Modify/Information";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servey" element={<Servey />} />
          <Route path="/select" element={<Select />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/information" element={<Information />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/search" element={<Search />}>
            <Route path="/search/:word" element={<Search />} />
          </Route>
          <Route path="/modify/information" element={<ModifyInformation />} />
        </Route>
        {/* <Route path="/u/:id" element={<Letter />} /> */}
        <Route path="/u/:id/:template" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
