import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Logo } from '../../components/Logo';
import { MyLink } from '../../components/MyLink';
import { useDarkMode } from '../../hooks/useDarkMode';

import type { NextPage } from 'next';

interface WrapperProps {
  children: any;
}

interface TitleProps {
  id?: string;
  children: any;
}

interface DescriptionProps {
  children: string;
}

interface GroupProps {
  spacing?: number;
  children: any;
}

interface ContentStackProps {
  children: any;
}

interface ListProps {
  children: any;
}

const About: NextPage = () => {
  const isDarkmode = useDarkMode();

  const Wrapper = (props: WrapperProps) => {
    const { children } = props;
    return (
      <Stack
        justifyContent='flex-start'
        alignItems='center'
        pt={{ xs: 6, sm: 7, md: 8, lg: 9 }}
        pb={{ xs: 6, sm: 7, md: 8, lg: 9 }}
        pr={{ xs: 3, sm: 4, md: 5, lg: 6 }}
        pl={{ xs: 3, sm: 4, md: 5, lg: 6 }}
        minHeight='100vh'
      >
        <Stack width='700px' maxWidth='100%' justifyContent='center' alignItems='flex-start'>
          {children}
        </Stack>
      </Stack>
    );
  };

  const Title = (props: TitleProps) => {
    const { id, children } = props;
    return (
      <Typography
        id={id !== undefined ? id : undefined}
        variant='body1'
        component='h2'
        sx={{ backgroundColor: !isDarkmode ? 'grey.300' : 'grey.800' }}
        pt={0.7}
        pb={0.5}
        pr={0.5}
        pl={1}
        color={!isDarkmode ? 'grey.600' : 'grey.200'}
        fontWeight={500}
      >
        {children}
      </Typography>
    );
  };
  const Description = (props: DescriptionProps) => {
    const { children } = props;

    return (
      <Typography variant='body2' component='p' color='text.secondary'>
        {children}
      </Typography>
    );
  };

  const ContentStack = (props: ContentStackProps) => {
    const { children } = props;

    return <Stack spacing={3}>{children}</Stack>;
  };

  const Group = (props: GroupProps) => {
    const { spacing, children } = props;

    return <Stack spacing={spacing !== undefined ? spacing : 1}>{children}</Stack>;
  };

  const List = (props: ListProps) => {
    const { children } = props;
    return (
      <ol style={{ paddingInlineStart: 20 }}>
        <ContentStack>{children}</ContentStack>
      </ol>
    );
  };

  const ListItem = (props: ListProps) => {
    const { children } = props;
    return <li>{children}</li>;
  };

  return (
    <Wrapper>
      <Stack justifyContent='center' alignItems='center' width='100%' mb={8}>
        <MyLink href='/'>
          <Logo type={isDarkmode ? 'dark' : 'light'} />
        </MyLink>
      </Stack>
      <ContentStack>
        <Title id='about'>当サイトについて</Title>

        <Description>ChatMemoは管理者が学習を目的として作成・運営しているサイトです。</Description>
        <Description>
          サービス内容についてのご意見、ご要望、ご不明な点等ありましたら、下記お問い合わせ先までご連絡お願いいたします。
        </Description>

        <Title id='terms'>利用規約</Title>
        <Description>
          本サイトで提供するサービス（以下「本サービス」といいます）の利用に際しては、本利用規約をお読みいただき、同意の上でご利用ください。
        </Description>
        <List>
          <ListItem>
            <Description>
              本サービスの利用者（以下「ユーザー」といいます）は、本サービスを利用するにあたり、自己の責任において本規約を誠実に遵守するものとします。
            </Description>
          </ListItem>
          <ListItem>
            <Description>
              本サービスを利用されたことをもって本規約に同意したものとみなされます。
            </Description>
          </ListItem>
          <ListItem>
            <Description>
              ユーザーは、自己の責任において本サービスを利用するものとし、本サービスを利用して行った全ての行為及びその結果については、ユーザーが一切の責任とリスクを負うものとします。
            </Description>
          </ListItem>
          <ListItem>
            <Description>
              本サービスを利用した事により、ユーザーが何らかの被害・損害を被ったとしても、管理者は一切の責任を負わないものとします。
            </Description>
          </ListItem>
          <ListItem>
            <Description>
              本サービスの内容、動作については一切の保証はなく、いつでもサービスの停止、変更、削除を行うことができるものとします。
            </Description>
          </ListItem>
          <ListItem>
            <Description>
              ユーザーデータのバックアップ管理はユーザーが一切の責任を持つものとし、サーバーの障害もしくは管理者が意図していない動作（不具合、バグ、誤作動等）によってデータが消失しても、管理者は一切の責任を負わないものとします。
            </Description>
          </ListItem>
          <ListItem>
            <Group>
              <Description>
                ユーザーは、本サービスの利用に際して、以下の行為を行ってはならないものとし、ユーザーが以下のいずれかに該当すると管理者が判断した場合、何らの手続きを要することなく、本サービスの全部又は一部の利用停止とすることができるものとします。
              </Description>
              <Description>①本サイトの運営を妨げる行為</Description>
              <Description>②サーバーやネットワークの機能を破壊もしくは妨害する行為</Description>
              <Description>③他のユーザーのプライバシーを侵害する等の迷惑行為</Description>
              <Description>④他のユーザーの認証情報を使用して本サービスを利用する行為</Description>
              <Description>
                ⑤不正使用を目的としたツールやプログラムを開発、配布及び使用する行為
              </Description>
              <Description>
                ⑥本サービスを、サービス提供の目的とは異なる目的で利用する行為
              </Description>
              <Description>⑦その他、サイト管理者が不適切と判断する行為</Description>
            </Group>
          </ListItem>
          <ListItem>
            <Description>必要に応じて、本利用規約を変更することがあります。</Description>
          </ListItem>
        </List>

        <Title id='policy'>プライバシーポリシー</Title>
        <Description>
          本サービスを提供するにあたり取得したユーザーの個人情報等の取扱いについて、以下のとおりプライバシーポリシーを定めます。
        </Description>
        <List>
          <ListItem>
            <Description>
              ユーザーからご提供いただいた名前、メールアドレス、その他の個人情報は、ユーザーとの連絡のために使用し、ご本人の承諾なく、その他の目的には利用しません。
            </Description>
          </ListItem>
          <ListItem>
            <Description>
              法令により開示する必要性が認められる場合を除いて、第三者へは提供しません。
            </Description>
          </ListItem>
          <ListItem>
            <Description>
              必要に応じて、本プライバシーポリシーを変更することがあります。
            </Description>
          </ListItem>
        </List>

        <Title id='contact'>お問い合わせ</Title>
        <Description>shunsuk92@gmail.com</Description>
      </ContentStack>
    </Wrapper>
  );
};

export default About;
