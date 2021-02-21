import React from 'react';
import DashboardShell from './DashboardShell';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';
const EmptyState = () => {
  return (
    <DashboardShell>
      <Flex
        width='100%'
        backgroundColor='white'
        borderRadius='8px'
        p={16}
        justify='center'
        align='center'
        direction='column'
      >
        <Heading mb={2} size='lg'>
          You haven't added any sites.
          <Text mb={4}>Welcome, let's get started.</Text>
          <AddSiteModal />
        </Heading>
      </Flex>
    </DashboardShell>
  );
};

export default EmptyState;
