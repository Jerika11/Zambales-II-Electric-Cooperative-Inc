import React, { useState, useEffect }  from 'react';
import Navibar from './Navbar';
import Footer from './Footer';
import rateData from './../../Data/rate.json';

const Contact = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  // Extract unique years from datePosted
  const uniqueYears = [...new Set(rateData.Rate.map(item => item.datePosted.split(', ')[1]))];

  useEffect(() => {
    // Set initial selected year
    if (uniqueYears.length > 0) {
      setSelectedYear(uniqueYears[0].toString()); // Convert to string
    }
  }, []);

  useEffect(() => {
    // Filter data based on selected year
    if (selectedYear) {
      const dataForSelectedYear = rateData.Rate.filter(item => item.datePosted.includes(selectedYear));
      setFilteredData(dataForSelectedYear);
    }
  }, [selectedYear]);

  useEffect(() => {
    // Set initial selected year to the latest year
    if (uniqueYears.length > 0) {
      setSelectedYear(uniqueYears[uniqueYears.length - 1].toString()); // Convert to string
    }
  }, []);

  // CALCULATE

  const calculateTotal = (column) => {
    return filteredData
      .filter(item => item.datePosted.includes(selectedYear))
      .reduce((total, item) => total + parseFloat(item[column].replace(/[^0-9.-]+/g,"")), 0)
      .toLocaleString('en-US', { maximumFractionDigits: 2 });
  };
  const calculateAverageGenerationCost = () => {
    const totalKwhPurchase = parseFloat(calculateTotal('kwhpurchase').replace(/[^0-9.-]+/g,"").replace(/,/g, ''));
    const totalGenerationCost = parseFloat(calculateTotal('totalgenerationcostmonth').replace(/[^0-9.-]+/g,"").replace(/,/g, ''));
  
    if (totalKwhPurchase !== 0) {
      return (totalGenerationCost / totalKwhPurchase).toLocaleString('en-US', { maximumFractionDigits: 2 });
    } else {
      return "0.00"; // Handle division by zero case
    }
  };
  const calculateOCA = (column) => {
    let result = 0;
  
    for (let i = 1; i < filteredData.length; i++) {
      const currentOCA = parseFloat(filteredData[i][column].replace(/[^0-9.-]+/g,"").replace(/,/g, ''));
      const previousOCA = parseFloat(filteredData[i - 1][column].replace(/[^0-9.-]+/g,"").replace(/,/g, ''));
      result += currentOCA - previousOCA;
    }
  
    // Take the absolute value of the result
    result = Math.abs(result);
  
    return result.toLocaleString('en-US', { maximumFractionDigits: 2 });
  };

  // const calculateOCA = (column) => {
  //   const filteredData = rateData.filter(item => item.datePosted.includes(selectedYear));
  //   let result = 0;
  
  //   for (let i = 1; i < filteredData.length; i++) {
  //     const currentOCA = parseFloat(filteredData[i][column].replace(/[^0-9.-]+/g,"").replace(/,/g, ''));
  //     const previousOCA = parseFloat(filteredData[i - 1][column].replace(/[^0-9.-]+/g,"").replace(/,/g, ''));
  //     result += currentOCA - previousOCA;
  //   }
  
  //   // Take the absolute value of the result
  //   result = Math.abs(result);
  
  //   return result.toLocaleString('en-US', { maximumFractionDigits: 2 });
  // };
  

  return (
  <>
    <Navibar/>      
    <div className='container mb-3'>
        <h2 style={{ textAlign: 'center', color: '#31363F', fontWeight: '800', fontSize:'3.00rem', fontFamily:'Lato, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif', marginTop: '20px',}}>Generation Rate</h2>

      <div className='container text-center mb-3'>
        <label className='mb-3'>Select Year: </label>
        <select
  className='form-select w-25'
  style={{ margin: "auto" }}
  value={selectedYear}
  onChange={(e) => setSelectedYear(e.target.value)}
>
  {[...uniqueYears].reverse().map((year, index) => (
    <option value={year} key={index}>{year}</option>
  ))}
</select>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th hidden>ID</th>
            <th>Source</th>
            <th>KWh Purchase</th>
            <th>Basic Generation Cost</th>
            <th>Other Cost Adjustment</th>
            <th>Discounts</th>
            <th>Total Generation Cost Month</th>
            <th>Other Generation Adjustment</th>
            <th>Average Generation Cost</th>
            <th hidden>Date Posted</th>
          </tr>
        </thead>
        {filteredData.map((item, index) => (
          <tbody key={item.id}>
            {index === 0 || item.datePosted !== filteredData[index - 1].datePosted ? (
              <React.Fragment key={item.datePosted}>
                <tr>
                  <td className='fw-bold' colSpan='9'>{item.datePosted}</td>
                </tr>
              </React.Fragment>
            ) : null}
            <tr>
              <td hidden>{item.id}</td>
              <td>{item.source}</td>
              <td>{item.kwhpurchase}</td>
              <td>{item.basicgenerationcost}</td>
              <td>{item.othercostadjustment}</td>
              <td>{item.discounts}</td>
              <td>{item.totalgenerationcostmonth}</td>
              <td>{item.othergenerationadjustment}</td>
              <td>{item.averagegenerationcost}</td>
              <td hidden>{item.datePosted}</td>
            </tr>
          </tbody>
        ))}
        <tbody>
          <tr>
              <td colSpan="1" className='fw-bold'>Total</td>
              <td>{calculateTotal('kwhpurchase')}</td>
              <td>{calculateTotal('basicgenerationcost')}</td>
              <td>{calculateOCA('othercostadjustment')}</td>
              <td>{calculateTotal('discounts')}</td>
              <td>{calculateTotal('totalgenerationcostmonth')}</td>
              <td>{calculateTotal('othergenerationadjustment')}</td>
              <td>{calculateAverageGenerationCost()}</td>
            </tr>
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
}
 
export default Contact;
