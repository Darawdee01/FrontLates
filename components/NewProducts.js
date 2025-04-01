'use client';
import Center from "@/components/Center";
import ProductBox from "@/components/ProductBox";
import styled from "styled-components";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* ใช้ auto-fill และ minmax เพื่อทำให้การแสดงผลยืดหยุ่น */
  gap: 1rem; /* เพิ่มช่องว่างระหว่าง item */
`;

export default function NewProducts({ product }) {
  return (
    <Center>
      <ProductsGrid>
        {product?.length > 0 &&
          product.map((productItem) => (
            <ProductBox key={productItem.id} {...productItem} /> // ใช้ key เป็น id เพื่อให้ React รู้จักและจัดการรายการอย่างถูกต้อง
          ))}
      </ProductsGrid>
    </Center>
  );
}
