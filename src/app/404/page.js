import Page404 from "@/components/Invaders/Page404";

export const metadata = {
  robots: { index: false, follow: false },
};

const page = () => {
  return <Page404 />;
};

export default page;
