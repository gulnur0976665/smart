import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../ProductCart';

const Search = () => {
    const {search} = useSelector((s) => s.pro)
    return (
        <div>
            <div className="container">
                <div className="flex items-center flex-wrap gap-[55px]  mt-[50px]">
                   {
                    search.map((el) => <ProductCart el={el} key={el.id}/>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Search;