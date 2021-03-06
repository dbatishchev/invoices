import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { format } from 'date-fns';
import Input, { IconPosition } from '../Input/Input';
import './DatePicker.css';
import styles from './DatePicker.module.css';
import { ReactComponent as Calendar } from '../../icons/calendar.svg';
import { ReactComponent as ArrowLeft } from '../../icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../icons/arrow-right.svg';

type DatePickerProps = {
  value: Date,
  onChange: (d: Date) => void,
};

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const handleChange = (d: Date) => {
    onChange(d);
  };

  return (
    <ReactDatePicker
      selected={value}
      dateFormat="dd MMM yyyy"
      onChange={handleChange}
      showPopperArrow={false}
      customInput={(
        <Input
          id="terms"
          type="text"
          icon={<Calendar />}
          iconPosition={IconPosition.after}
        />
      )}
      maxDate={new Date()}
      renderCustomHeader={({
        date: d,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={styles.header}>
          <button
            type="button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className={styles.headerBtn}
          >
            <ArrowLeft />
          </button>
          <div className={styles.headerText}>
            {format(d, 'MMM yyyy')}
          </div>
          <button
            type="button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className={styles.headerBtn}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    />
  );
};

export default DatePicker;
