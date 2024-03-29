import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';

import { setStatusFilter } from '../../redux/actions';
import { getStatusFilter } from '../../redux/selector';
import { statusFilters } from '../../redux/constants';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Completed
      </Button>
    </div>
  );
};
