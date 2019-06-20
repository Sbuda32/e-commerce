import React from 'react'
const directoryTree = require('directory-tree');
const tree = directoryTree('/home/sbuda32/e-commerce/public/Images/Images/product_images/T-shirt-thumbnails');

function ProductList() {
    
    
   console.log(tree);

    return (
        <div>
            <h1>List of Products</h1>            
        </div>
    )
}


export default ProductList;