import React from 'react';
import { TableOfContents } from './TableOfContents';
import { DocPageSection } from '@/data/types';

interface ContentWrapperProps {
  children: React.ReactNode;
  sections?: DocPageSection[];
}

export function ContentWrapper({ children, sections = [] }: ContentWrapperProps) {
  return (
    <div className="flex gap-10 w-full min-w-0">
      <main className="flex-1 min-w-0 py-6 max-w-4xl">{children}</main>
      {sections.length > 0 && <TableOfContents sections={sections} />}
    </div>
  );
}
