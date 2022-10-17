import { FilterWrapper, FilterTitile, FilterInput } from './Filter.styled';

export const Filter = ({ title, searchByName }) => {
  return (
    <FilterWrapper>
      <FilterTitile>{title}</FilterTitile>
      <FilterInput type="text" name="filter" onChange={searchByName} />
    </FilterWrapper>
  );
};
