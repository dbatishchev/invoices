import React from 'react';
import { format } from 'date-fns';

type FormattedDateProps = {
  date: Date,
};

const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => (
  <span>{format(date, 'dd MMM yyyy')}</span>
);

export default FormattedDate;
