import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import SiteTable from '@/components/SiteTable';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { FastFeedbackIcon } from 'public/icons';
import useSWR from 'swr';
import SiteTableHeader from '../components/SiteTableHeader';
const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR('/api/sites', fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites ? (
        <>
          <SiteTableHeader />
          <SiteTable sites={data.sites} />
        </>
      ) : (
        <>
          <SiteTableHeader />
          <EmptyState />
        </>
      )}
    </DashboardShell>
  );
};

export default Dashboard;
