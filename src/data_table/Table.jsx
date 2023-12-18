import React from 'react';
import { cn } from '../utils';

const Table = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div>
      <table ref={ref} className={className} {...props} />
    </div>
  );
});

Table.displayName = 'Table';

const TableHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div>
      <th ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
    </div>
  );
});

TableHeader.displayName = 'Table';

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('bg-primary font-medium text-primary-foreground', className)}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      `border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted [&:has([data-state=open])]:bg-muted/50`,
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('px-2 py-1 align-middle [&:has([role=checkbox])]:pr-0 text-[13px]', className)}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />
));
TableCaption.displayName = 'TableCaption';

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };