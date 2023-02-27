import { Box } from '@cayro/ui-core';
import React, { FC, ReactNode } from 'react';
import { page } from './Page.css';

interface PageProps {
    className?: string;
    children?: ReactNode;
}  

export const Page: FC<PageProps> = ({ className, children }) => {
    return (
        <Box className={[page, className]}>
            {children}
        </Box>
    );
};