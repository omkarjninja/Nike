import men1 from "../../images/men/men1.png";import men2 from "../../images/men/men2.png";
import men3 from "../../images/men/men3.png";import men4 from "../../images/men/men4.png";
import men5 from "../../images/men/men5.png";import men6 from "../../images/men/men6.png";
import men7 from "../../images/men/men7.png";import men8 from "../../images/men/men8.png";
import men9 from "../../images/men/men9.png";
import Product3 from "../each-product/eachproduct";

const products = [
    {
      id: 1,
      name: 'Jordan Brand',
      href: "#",
      imageSrc:men1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 2,
        name: 'Nike Life',
        href: "#",
        imageSrc:men2,
        imageAlt: "",
        price: '$35',
        color: 'Black',
      },
      {id: 3,name: 'Nike',href: "#",imageSrc:men3,imageAlt: "",price: '$35',color: 'Black',},
      {id: 4,name: 'Nike White Tee',href: '#',imageSrc:men4,imageAlt: "",price: '$35',color: 'Black',},
      {id: 5,name: 'Nike Trousers',href: '#',imageSrc:men5,imageAlt: "",price: '$35',color: 'Black',},
      {id: 6,name: 'Nike Classic Hoodie',href: '#',imageSrc:men6,imageAlt: "",price: '$35',color: 'Black',},
      {id: 7,name: 'Nike Air Force',href: '#',imageSrc:men7,imageAlt: "",price: '$35',color: 'Black',},
      {id: 8,name: 'Nike Air Max',href: '#',imageSrc:men8,imageAlt: "",price: '$35',color: 'Black',},
      {id: 3,name: 'Air Jordan Next Chapters',href: '#',imageSrc:men9,imageAlt: "",price: '$35',color: 'Black',},
    // More products...
  ]
  export default function MenProduct() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Men</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
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
  