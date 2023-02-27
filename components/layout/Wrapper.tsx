import { Box } from '@cayro/ui-core';
import React, { ElementType, FC, ReactNode } from 'react';
import { wrapper } from './Wrapper.css';

interface WrapperProps {
    as?: ElementType;
    children?: ReactNode;
}  

export const Wrapper: FC<WrapperProps> = ({as, children}) => {
    return (
        <Box as={as} className={wrapper}>
            {children}
        </Box>
    );
};