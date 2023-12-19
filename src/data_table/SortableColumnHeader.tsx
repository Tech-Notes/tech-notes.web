import {
  faArrowCircleDown,
  faArrowCircleRight,
  faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import { cn } from '../utils';

const SortableColumnHeader = ({ column, title, className }) => {
  const onSort = useCallback(() => {
    column.toggleSorting(!(column.getIsSorted() === 'desc'));
  }, [column]);

  if (!column.getCanSort()) {
    return <div className={cn('text-xs', className)}>{title}</div>;
  }

  return (
    <div className={cn(className)}>
      <div>
        <div>
          <button
            className="-ml-3 h-8 hover:bg-transparent text-start text-xs flex gap-1 items-center"
            onClick={onSort}>
            <span className="w-full">{title}</span>
            {column.getIsSorted() === 'desc' ? (
              <FontAwesomeIcon icon={faArrowCircleDown} />
            ) : column.getIsSorted() === 'asc' ? (
              <FontAwesomeIcon icon={faArrowCircleUp} />
            ) : (
              <FontAwesomeIcon icon={faArrowCircleRight} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortableColumnHeader;
