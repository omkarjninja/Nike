
import kids from "../../images/kids/kid1.jpg";import kid2 from "../../images/kids/kid2.jpg";
import kid3 from "../../images/kids/kids3.png";import kid4 from "../../images/kids/kids4.png";
import kid5 from "../../images/kids/kids5.png";
import Product3 from "../each-product/eachproduct";

const products = [
    {
      id: 1,
      name: 'Jordan Brand',
      href: "1",
      imageSrc:kids,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Nike Life',
        href: "hrefs",
        imageSrc:kid2,
        imageAlt: "",
        price: '$35',
        color: 'Black',
      },
      {id: 3,name: 'Nike',href: "hrefs",imageSrc:kid3,imageAlt: "",price: '$35',color: 'Black',},
      {id: 4,name: 'Nike White Tee',href: '/men/h4',imageSrc:kid4,imageAlt: "",price: '$35',color: 'Black',},
      {id: 5,name: 'Nike Trousers',href: '#',imageSrc:kid5,imageAlt: "",price: '$35',color: 'Black',},
    // More products...
  ]
  const sendinfo=()=>{
    <Product3 name={products.map((selected)=>(selected.this.name)  
    )}></Product3>
  }
  export default function KidsProduct() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Kids</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative" onClick={sendinfo}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  