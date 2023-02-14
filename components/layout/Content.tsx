import { Box } from '@cayro/ui-core';
import React, { FC, ReactNode } from 'react';
import { content } from './Content.css';

interface ContentProps {
    children?: ReactNode;
}  

export const Content: FC<ContentProps> = ({ children }) => {
    return (
        <Box className={content}>
            {children}
        </Box>
    );
};