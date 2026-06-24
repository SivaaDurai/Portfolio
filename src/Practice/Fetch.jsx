import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Webpage.css'

const Fetch = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${value}`
        )
        setData(res.data.products)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [value])

  return (
    <div>
      {/* INPUT BOX */}
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {/* PRODUCT LIST */}
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt={item.title} width="100" />
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fetch