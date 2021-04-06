import { Box } from "@material-ui/core";
import { FC } from "react";
import withGuard from "../src/utils/withGuard";

const HomePage: FC = () => {
  return (
    <main>
      <Box color="#fff">
        ola pessoa
      </Box>
    </main>
  );
}

export default withGuard(HomePage);

export async function getStaticProps() {
  return {
    props: {},
  };
}
