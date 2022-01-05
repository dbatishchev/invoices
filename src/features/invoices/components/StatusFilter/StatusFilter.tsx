import React from 'react';
import useInvoicesListStore from '../../hooks/useInvoicesListStore';
import { Status } from '../../types/Status';
import PopoverButton from '../../../../app/components/PopoverButton/PopoverButton';
import CheckboxGroup from '../../../../app/components/CheckboxGroup/CheckboxGroup';

type StatusFilterProps = {

};

const StatusFilter: React.FC<StatusFilterProps> = () => {
  const { statusFilter, setStatusFilter: handleStatusFilterChange } = useInvoicesListStore();

  return (
    <PopoverButton
      name="Filter"
    >
      <CheckboxGroup<Status>
        values={[
          { value: 'draft', label: 'Draft' },
          { value: 'pending', label: 'Pending' },
          { value: 'paid', label: 'Paid' },
        ]}
        value={statusFilter}
        onChange={handleStatusFilterChange}
      />
    </PopoverButton>
  );
};

export default StatusFilter;
