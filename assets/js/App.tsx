import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout.tsx";
import Home from "./pages/Home/Home.tsx";
import { FC } from "react";

const App: FC = () => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default App;
