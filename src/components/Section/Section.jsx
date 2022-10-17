import { Wrapper, Title } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};
