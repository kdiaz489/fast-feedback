import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { FastFeedbackIcon } from 'public/icons';

const Dashboard = () => {
  const auth = useAuth();
  if (!auth.user) {
    return 'Loading...';
  }
  return (
    <>
      <EmptyState />
    </>
  );
};

export default Dashboard;
