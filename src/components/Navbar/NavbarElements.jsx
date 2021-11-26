import styled from "styled-components";
import { mobile } from "../../RWD";

export const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0' })}
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
  display: flex;
`

export const Input = styled.input`
  border: none;
  ${mobile({ width: '30px' })}
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
`

export const NavLogo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: 'center', flex: 2 })}
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`
