import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2em;
  letter-spacing: 4px;
  text-align: center;
  color: ${(props) => props.color};
  text-transform: uppercase;
`;

export const CardTitle = styled.h2`
  color: #fff;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 300;
`;


export const Header = styled.header`
  width: 100vw;
  padding: 2rem;
  background-color: #090a0b;
`;

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 25px;
`;
export const StyledListItem = styled.li`
  width: 25%;
  padding: 15px;
  margin-bottom: 15px;
  background: #ec9696;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const PostBody = styled.div`
  font-size: 24px;
  max-width: 800px;
  margin: 120px auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 150px auto;
  gap: 25px;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 10px;
  color: #817070;
`;

export const StyledInput = styled.input`
  border-radius: 2px;
  border: 1px solid #817070;
  min-width: 400px;
  padding: 5px;
`;

export const StyledTextarea = styled.textarea`
  border-radius: 2px;
  border: 1px solid #817070;
  min-width: 400px;
  min-height: 150px;
  resize: none;
`;

export const Button = styled.button`
  background: palevioletred;
  border-radius: 4px;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px;
  cursor: pointer;
`
