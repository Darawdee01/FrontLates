// app/page.js
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/Products"; // ให้แน่ใจว่า path ของ Product ถูกต้อง

export default async function Homepage({featuredProduct,newProducts}) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts product={newProducts}/>
    </div>
  );
}
export async function getDerivedStateFromProps() {
  const featuredProductID = '67ec50ad3b9de233e37d20ff';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return{
    props:{
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
  


