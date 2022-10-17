import PropTypes from 'prop-types';

import { Box } from './Box.styled';

export const Wrapper = ({ children }) => {
  return <Box>{children}</Box>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
