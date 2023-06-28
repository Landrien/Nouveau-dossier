import React from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import img5 from '../../ASSETS/Images/5.png'
import img6 from '../../ASSETS/Images/6.png'
import img7 from '../../ASSETS/Images/7.png'
import img8 from '../../ASSETS/Images/8.png'
import img9 from '../../ASSETS/Images/9.png'
import img10 from '../../ASSETS/Images/10.png'
import img11 from '../../ASSETS/Images/11.png'
import img12 from '../../ASSETS/Images/12.png'
import img13 from '../../ASSETS/Images/13.png'
import img14 from '../../ASSETS/Images/14.png'
import img15 from '../../ASSETS/Images/15.png'
import img16 from '../../ASSETS/Images/16.png'
import img17 from '../../ASSETS/Images/17.png'
import img18 from '../../ASSETS/Images/18.png'
import ProductsSlider from '../../COMPONENTS/Product/ProductsSlider'


const Home = () => {

  const products = [
    {
        "ProductId": 1,
        "ProductName": "Sushis",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img9
            },
            {
                id: 2,
                image: img9
            },
            {
                id: 3,
                image: img9
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
        "ProductName": "Sandwich crudité",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img10
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img3
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
        "ProductPrice": 25,
        "SalesPrice": 20,
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
        "ProductName": "Kebab",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img11
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
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
        "ProductPrice": 9.5,
        "SalesPrice": 5,
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
        "ProductName": "Brochettes grillées",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img12
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
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
        "SalesPrice": 11,
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
        "ProductName": "Naan poulet",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img13
            },
            {
                id: 2,
                image: img6
            },
            {
                id: 3,
                image: img7
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
        "ProductPrice": 10,
        "SalesPrice": 7,
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
        "ProductName": "Noodles légumes",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img14
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
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
        "ProductPrice": 18,
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
    }
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <Footer1 />

      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Produits similaires' />
      </div>
      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Explorer plus' />
      </div>
      <Footer2 />
    </div>
  )
}

export default Home
//&