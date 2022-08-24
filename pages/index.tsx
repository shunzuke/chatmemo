import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../components/AuthContext';
import MenuBar from '../components/MenuBar';
import Timeline from '../components/Timeline';
import BottomBar from '../components/BottomBar';

export interface Data {
  message: string;
  date: string;
}

const Home: NextPage = () => {
  const user = useAuthContext();

  const demoData: Data[] = [
    { message: 'あああああああああああああああああああああああああああ', date: '202208231200' },
    { message: 'ああああああああああああああああああああああああああ', date: '202208231200' },
    { message: 'あああああああああああああああああああああああああ', date: '202208231200' },
    { message: 'あ', date: '202208231200' },
    {
      message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '202208231300',
    },
    {
      message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '202208231300',
    },
    {
      message: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      date: '202208231300',
    },
    {
      message: 'a',
      date: '202208231300',
    },
    {
      message: '00000000000000000000000000000000000000000000000',
      date: '202208231300',
    },
    {
      message: '0000000000000000000000000000000000000000000000',
      date: '202208231300',
    },
    {
      message: '000000000000000000000000000000000000000000000',
      date: '202208231300',
    },
    {
      message: '0',
      date: '202208231300',
    },
    {
      message: 'あいうえおabcde01234',
      date: '202208231300',
    },
    {
      message: 'あいうえお\nabcde01234',
      date: '202208231300',
    },
    {
      message: 'あいうえお\rabcde01234',
      date: '202208231300',
    },
    {
      message: 'あいうえお\r\nabcde01234',
      date: '202208231300',
    },
    {
      message: 'あいうえお\n\nabcde01234\n',
      date: '202208231300',
    },
  ];

  const [data, setData] = useState(demoData);

  useEffect(() => {
    // 最下部までスクロール
    const element = document.documentElement;
    const bottom = element.scrollHeight - element.clientHeight;
    window.scroll(0, bottom);

    // 最下部までのスクロールのあとで、html要素にscrollBehaviorを追加する
    const html = document.getElementById('html');
    if (html !== null) {
      html.style.scrollBehavior = 'smooth';
    }
  });

  const saveData = (newData: Data) => {
    setData([...data, newData]);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MenuBar />
      <main className={styles.main}>
        <Timeline data={data} />
      </main>
      <BottomBar saveData={saveData} />
    </div>
  );
};

export default Home;
