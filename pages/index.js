import { useAuth } from '@/lib/auth';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { FastFeedbackIcon } from 'public/icons';

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('auth')) {
                window.location.href = "/dashboard"
              }
            `
          }}
        />
      </Head>

      <FastFeedbackIcon color="black.500" boxSize="32px" />

      {auth.user ? (
        <>
          <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
        </>
      ) : (
        <Button
          variant="link"
          size="sm"
          mt={4}
          onClick={(e) => auth.signinWithGoogle()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
