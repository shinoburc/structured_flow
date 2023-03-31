import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import type { ReactElement } from 'react'
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';

// next-auth が提供する signOut 関数を import する。
import { signOut } from 'next-auth/react';
// material-ui が提供する Button を import する。
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* Button を配置し onClick イベント(ボタンをクリックしたとき)に signOut 関数を実行するようにする。 */}
      <Button
        onClick={() => signOut()}
        variant="contained"
        color="secondary"
      >
        Sign out
      </Button>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;