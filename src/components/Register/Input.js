import styled from 'styled-components'

const Input = styled.input.attrs({
  autoFocus: true,
})`
  background-color: ${p => p.theme.colors.light};
  border: 0;
  border-bottom: ${p => p.theme.border};
  color: ${p => p.theme.colors.dark};
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  padding-bottom: 0.25rem;
  width: 350px;
  margin-bottom: 2rem;

  &:focus {
    outline: 0;
  }
`

export default Input
