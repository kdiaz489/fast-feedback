import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar, Icon } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

import DashboardShell from './DashboardShell';
import { Heading, Text } from '@chakra-ui/react';

const FreePlanEmptyState = ({ children }) => {
  const { user } = useAuth();

  return (
    <DashboardShell>
      <Box width='100%' backgroundColor='white' borderRadius='8px' p={8}>
        <Heading size='md'>
          Get feedback on your site instantly
          <Text>Start Today, then grow with us</Text>
          <Button>Upgrade to starter</Button>
        </Heading>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
