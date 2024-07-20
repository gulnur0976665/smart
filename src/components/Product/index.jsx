import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../ProductCart';

const Product = () => {
    const {product}  = useSelector((s) => s.pro)
    // console.log(product,'produc');
    return (
        <div>
            <div className="container">
                <div className="flex items-center flex-wrap gap-[55px]  mt-[50px]">
                 {
                    product?.map((el) => <ProductCart el={el} key={el.id}/>)
                 }
                </div>
            </div>
            
        </div>
    );
};

export default Product;