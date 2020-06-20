import { GetStaticProps } from 'next';

import Page, {
  getStaticProps as getPageStaticProps,
  IPageProps,
} from './page/[index]';

export default function Home(props: IPageProps) {
  return <Page {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPageStaticProps({ params: { index: '1' } });
  return data;
};
