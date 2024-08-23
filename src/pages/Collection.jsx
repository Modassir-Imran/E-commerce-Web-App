import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search , showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortTypes, setSortTypes] = useState('relevent')

  const toggleCategory = e => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = e => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()

    if(showSearch && search){
      productCopy = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    setFilterProducts(productCopy)

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )
    }
    setFilterProducts(productCopy)
  }

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice()

    switch (sortTypes) {
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price))
        break
      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter();
        break
    }
  }

  useEffect(() => {
    sortProduct()
  }, [sortTypes])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory,search, showSearch])

  // useEffect(()=>{
  //   setFilterProducts(products)
  // },[])

  useEffect(() => {
    console.log(category)
  }, [category])

  useEffect(() => {
    console.log(subCategory)
  }, [subCategory])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2 '
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt=''
          />
        </p>
        {/* category filter */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block `}
        >
          <p className='mb-3 text-sm font-medium  '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className='flex gap-2 '>
              <input
                className='w-3'
                type='checkbox'
                value={'Men'}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className='flex gap-2 '>
              <input
                className='w-3'
                type='checkbox'
                value={'Women'}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className='flex gap-2 '>
              <input
                className='w-3'
                type='checkbox'
                value={'Kids'}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium  '>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className='flex gap-2 '>
              <input
                className='w-3'
                type='checkbox'
                value={'Topwear'}
                onChange={toggleSubCategory}
              />
              Top wear
            </p>
            <p className='flex gap-2 '>
              <input
                className='w-3'
                type='checkbox'
                value={'Bottomwear'}
                onChange={toggleSubCategory}
              />
              Bottom wear
            </p>
            <p className='flex gap-2 '>
              <input
                className='w-3'
                type='checkbox'
                value={'Winterwear'}
                onChange={toggleSubCategory}
              />
              Winter wear
            </p>
          </div>
        </div>
      </div>

      {/* right side feature */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* product sort */}
          <select
            onChange={e => setSortTypes(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2 '
          >
            <option value='relevent'>Sort by: Relevent</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts && filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p>No products available</p> // You can render a fallback UI if there are no products
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection
