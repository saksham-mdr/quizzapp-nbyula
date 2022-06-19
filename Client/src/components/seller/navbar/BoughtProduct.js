import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Product() {
  const [loadedData, setLoadedData] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      try {
        const response = await fetch(`http://localhost:5000//tobedilivered`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer+" + storedData.token,
          },
        });

        const responseData = await response.json();
        setLoadedData(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, []);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-2 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-2">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {loadedData?.map((product) => (
            <Link
              key={product._id}
              to={`/furniture/${product._id}`}
              className="group"
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-80 h-80 object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
          {loadedData?.length === 0 && <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            sdasd
            </div>}
        </div>
      </div>
    </div>
  );
}
