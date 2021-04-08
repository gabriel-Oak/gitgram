import { FC } from "react";
import TopBar from "../src/components/shared/top-bar";
import withGuard from "../src/utils/withGuard";

const HomePage: FC = () => {
  return (
    <main>
      <TopBar />
    </main>
  );
}

export default withGuard(HomePage);

export async function getStaticProps() {
  return {
    props: {},
  };
}
