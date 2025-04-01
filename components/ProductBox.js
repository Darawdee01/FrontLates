import styled from "styled-components";

const Box = styled.div`
    background-color: red;
`;

export default function ProductBox({_id,title,description,price})
{
    return(
        <div>
              <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <span>Product ID: {id}</span>
    </div>
        </div>
    )
}