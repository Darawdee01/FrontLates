"use client";
import styled from "styled-components";
import Button from "./Button";


const Bg = styled.div`
    background-color:#d28375;
    color: #FFF;
    padding: 50px 0;
    height:300px
`;
const Title = styled.h1`
    margin: 0;
    font-weight:normal;
    font-size:50px;
    padding: 10px 0;
    font-family: Mitr;
`;
const Desc = styled.p`
    color:#aaa;
    font-size: 18px;
    
`;
const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
    align-items: center;
    z-index: ${({ layer }) => layer}; 
`;
const Column = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
`;
const ButtonsWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    gap: 10px;
`;
const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

`;


export default function Featured() {
    return(
        <Bg>
                <ColumnWrapper>
                    <Column>
                        <div style={{textAlign: 'left'}}>
                            <Title style={{position: 'relative', top: '-450px' ,left:'100px',fontFamily: 'Mitr, sans-serif'}}>KMUTNB Cooperative</Title>
                            {/* <Title style={{position: 'relative', top: '-120px',left:'150' }}>Cooperative</Title> */}
                            <Desc style={{ color: "#fff", position: 'relative', top: '-440px',left:'100px',fontFamily: 'Mitr, sans-serif'}}>
                                ยินดีต้อนรับเข้าสู่ ร้านสวัสดีการออนไลน์  KMUTNB <br />เป็นเว็ปไซต์ที่นักศึกษาสามารถสั่งสินค้า<br />เกี่ยวกับอุปกรณ์การเรียนและเครื่องแต่งกายต่างๆ
                                <br /> ทำให้นักศึกษาสามารถสั่งซื้อสินค้าได้สะดวกและรวดเร็วยิ่งขึ้น
                            </Desc>
                            <ButtonsWrapper>
                                <Button outline white size="m"> More</Button>
                                <Button primary size="l" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                                    <img src="\list 2.png" alt="categories icon" width="24" height="24" style={{ display: "inline-block", verticalAlign: "middle" }} />
                                    <span style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "10px" }}>Shop by categories</span>
                                </Button>
                            </ButtonsWrapper>

                        </div>
                    </Column>
                    <Column>
                    <Image src="/img/3.png" alt="Product img" layer={1} style={{ width: "450px", height: "450px" , position: 'relative', top: '-150px', left: '140px'}} />
                    <Image src="/img/2.png" alt="Product img" layer={2} style={{ width: "190px", height: "150px" , position: 'relative', top: '-330px', left: '100px',transform: 'rotate(-20deg)'}} />
                    <Image src="/img/0.png" alt="Product img" layer={3} style={{ width: "150px", height: "430px" , position: 'relative', top: '-710px', left: '300px'}} />  
                    </Column>
                 </ColumnWrapper>
        </Bg>
    )
    
}