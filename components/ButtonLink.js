import Link from "next/link";
import styled from "styled-components";
import { buttonStyle } from "./Button";

const StyleLink = styled(Link)`
    ${buttonStyle}
`;
export default function ButtonLink(props) {
    return(
        <StyleLink style={{position: 'relative', top: '-450px',left:'100px',background:'white'}}{...props}/>
    );
}