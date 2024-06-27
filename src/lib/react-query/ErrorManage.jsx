import React, { memo, useMemo } from 'react';
import { LoadingScreen, LoadingSpinner } from '@/components/ui/loading';
import { BlogItemSkeleton } from '@/components/ui/skeleton';

export const ErrorManage = ({ isLoading, isFetching, error, isError, children, noLoading }) => {
  const result = useMemo(() => {
    if (isFetching) {
      return <LoadingSpinner />;
    }

    if (isLoading) {
      if (noLoading) {
        return null;
      } else {
        return <LoadingScreen />;
      }
    }

    if (isError) {
      console.log(`Error Occurred:
        ${error?.message} : ${error?.response?.statusText}`);
      return;
    }

    if (children !== undefined && children) return children;

    return 'No Data';
  }, [
    isFetching,
    isLoading,
    noLoading,
    isError,
    error?.message,
    error?.response.statusText,
    children,
  ]);

  return <>{result}</>;
};

export default memo(ErrorManage);
