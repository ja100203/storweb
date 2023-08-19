import React from 'react'
import Items from './components/Items';
import './Products.scss'

const Products = () => {
    const Data = [
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-49-270x270.png",
            tag: "sale",
            title: "Mauris Gravida",
            price: "$150.00"
        },
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-19-270x270.png",
            tag: "new",
            title: "Praesent imperdiet",
            price: "$100.00"
        },
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-10-270x270.png",
            tag: "new",
            title: "Consectetur adipscing",
            price: "$60.00"
        },
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-55-270x270.png",
            tag: "new",
            title: "Suspendisse imperdiet",
            price: "$1000.00"
        },
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-37-270x270.png",
            tag: "sale",
            title: "Phasellus vel scelerisque",
            price: "$150.00"
        },
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-34-270x270.png",
            tag: "new",
            title: "Donec non posuere",
            price: "$90.00"
        },
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-31-270x270.png",
            tag: "new",
            title: "Quisque eget",
            price: "$400.00"
        },
        {
            img: "https://livedemo00.template-help.com/opencart_55593/image/cache/catalog/product-22-270x270.png",
            tag: "new",
            title: "Lorem ipsum",
            price: "$90.00"
        },
    ]
    return (
        <div className='Products'>
            <div className='product-title'>
                <h1>New Products</h1>
            </div>
            <div className='card'>
            {Data.map((data, id) => {
              return <Items data={data} key={id}  />;
            })}
          </div>
         </div>
    )
}

export default Products;