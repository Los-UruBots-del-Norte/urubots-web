import React from 'react';
import { SliceComponentProps } from '@prismicio/react';
import { Content } from '@prismicio/client';

interface LandingProps {
  slice: Content.LandingSlice;
}

interface DefaultProps {
  children: React.ReactNode;
}

export type { LandingProps, DefaultProps };
