import PropTypes from 'prop-types';

import { Wrapper, Title } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
