import React from 'react'
import ProductCard from './ProductCard'
import img1 from '../../ASSETS/Products/1.png'
import img2 from '../../ASSETS/Products/2.png'
import img3 from '../../ASSETS/Products/3.png'
import img4 from '../../ASSETS/Products/4.png'
import food from '../../ASSETS/Images/food.png'
import burger from '../../ASSETS/Images/burger.png'
import nouilles from '../../ASSETS/Images/nouilles.png'
import riz from '../../ASSETS/Images/riz.png'
import salade from '../../ASSETS/Images/salade.png'
import tacos from '../../ASSETS/Images/tacos.png'
import mcdo from '../../ASSETS/Images/mcdo.png'
import bk from '../../ASSETS/Images/bk.png'
import domino from '../../ASSETS/Images/domino.png'
import panda from '../../ASSETS/Images/panda.png'
import kfc from '../../ASSETS/Images/kfc.png'
import taco from '../../ASSETS/Images/taco.png'
import './AllProduct.css'
const AllProduct = () => {
    const products = [
        {
            "ProductId": 1,
            "ProductName": "McDo",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: mcdo
                },
                {
                    id: 2,
                    image: mcdo
                },
                {
                    id: 3,
                    image: mcdo
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 15,
            "SalesPrice": 12,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Burger King",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: bk
                },
                {
                    id: 2,
                    image: bk
                },
                {
                    id: 3,
                    image: bk
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 20,
            "SalesPrice": 16,
            "ProductDiscount": 10,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Domino's Pizza",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: domino
                },
                {
                    id: 2,
                    image: domino
                },
                {
                    id: 3,
                    image: domino
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 17,
            "SalesPrice": 13,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 1,
            "ProductName": "Panda Express",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: panda
                },
                {
                    id: 2,
                    image: panda
                },
                {
                    id: 3,
                    image: panda
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 20,
            "SalesPrice": 12,
            "ProductDiscount": 20,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 2,
            "ProductName": "Taco Bell",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: taco
                },
                {
                    id: 2,
                    image: taco
                },
                {
                    id: 3,
                    image: taco
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 16,
            "SalesPrice": 13,
            "ProductDiscount": 10,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        },
        {
            "ProductId": 3,
            "ProductName": "Tacos",
            "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "ProductImage": [
                {
                    id: 1,
                    image: kfc
                },
                {
                    id: 2,
                    image: kfc
                },
                {
                    id: 3,
                    image: kfc
                }
            ],
            "ProductCode": "P1",
            "ProductCategory": "Category 1",
            "ProductSubCategory": "Sub Category 1",
            "ProductBrand": "Brand 1",
            "ProductColor": "Color 1",
            "ProductSize": "Size 1",
            "ProductWeight": "Weight 1",
            "ProductMaterial": "Material 1",
            "ProductQuantity": 10,
            "ProductUnit": "Unit 1",
            "ProductPrice": 12,
            "SalesPrice": 10,
            "ProductDiscount": 30,
            "ProductDiscountType": "Percentage",
            "ProductTax": 20,
            "ProductTaxType": "Percentage",
            "ProductShippingCharge": 20,
            "ProductShippingChargeType": "Percentage",
            "ProductShippingTime": "1-2 days",
            "ProductShippingTimeType": "Days",
            "ProductShippingLocation": "Location 1",
            "ProductShippingLocationType": "Country",
            "ProductShippingReturnPolicy": "Return Policy 1",
            "ProductShippingReturnPolicyType": "Days",
            "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
            "ProductShippingReturnPolicyDescriptionType": "Days",
            "ProductReviews": [
                {
                    "ReviewId": 1,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 5,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                    "ReviewId": 2,
                    "Name": "Viraj",
                    "Email": "",
                    "Rating": 1,
                    "Date": "2021-08-01",
                    "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                },
                {
                    "ReviewId": 3,
                    "Name": "Harshal Jain",
                    "Email": "",
                    "Rating": 4,
                    "Date": "2021-08-01",
                    "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                }
            ]
        }
    ]
    return (
        <div className='allproducts'>
            <h1>Nos restaurants</h1>
            <div className='products'>
                {
                    products.map((item,index) => {
                        return (
                            <ProductCard data={item} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct
//&