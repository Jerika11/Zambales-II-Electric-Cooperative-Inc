import React, { useState, useEffect }  from 'react';
import Navibar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const rate = [
    { id: 1,source: '1. Masinloc Power Partners Company Ltd. Inc.', kwhpurchase: '13,366,015.00	',basicgenerationcost: "107,601,599.24	",othercostadjustment: "36,246,138.17",discounts: "7,838,944.65",totalgenerationcostmonth: "139,928,265.09",othergenerationadjustment: "0.0000",  averagegenerationcost: "0.0000",  datePosted: 'January, 2023' },
    { id: 2,source: '2. WESM', kwhpurchase: '5,356,500.00',basicgenerationcost: "26,175,394.22", othercostadjustment: "173,875.70",discounts: "0.00",totalgenerationcostmonth: "26,001,518.52	",othergenerationadjustment: "0.0000", averagegenerationcost: "0.0000", datePosted: 'January, 2023' },
    { id: 3,source: '1. Masinloc Power Partners Company Ltd. Inc.', kwhpurchase: '13,366,015.00	',basicgenerationcost: "107,601,599.24	",othercostadjustment: "36,246,138.17",discounts: "7,838,944.65",totalgenerationcostmonth: "139,928,265.09",othergenerationadjustment: "0.0000",  averagegenerationcost: "0.0000",  datePosted: 'January, 2024' },
    { id: 4,source: '2. WESM', kwhpurchase: '5,356,500.00',basicgenerationcost: "26,175,394.22", othercostadjustment: "173,875.70",discounts: "0.00",totalgenerationcostmonth: "26,001,518.52	",othergenerationadjustment: "0.0000", averagegenerationcost: "0.0000", datePosted: 'January, 2024' },
    { id: 5,source: '3. Masinloc Power Partners Company Ltd. Inc.', kwhpurchase: '13,366,015.00	',basicgenerationcost: "107,601,599.24	",othercostadjustment: "36,246,138.17",discounts: "7,838,944.65",totalgenerationcostmonth: "139,928,265.09",othergenerationadjustment: "0.0000",  averagegenerationcost: "0.0000",  datePosted: 'February, 2024' },
    { id: 6,source: '4. WESM', kwhpurchase: '5,356,500.00',basicgenerationcost: "26,175,394.22", othercostadjustment: "173,875.70",discounts: "0.00",totalgenerationcostmonth: "26,001,518.52	",othergenerationadjustment: "0.0000", averagegenerationcost: "0.0000", datePosted: 'February, 2024' },
  ];

  const years = [...new Set(rate.map(item => item.datePosted.split(', ')[1]))]; // Extract unique years from datePosted

  const [selectedYear, setSelectedYear] = useState(null); // State variable to store selected year

  useEffect(() => {
    // Set selectedYear to the latest year when component mounts
    const latestYear = Math.max(...years);
    setSelectedYear(latestYear);
  }, []);

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const calculateTotal = (column) => {
    return rate
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
    const filteredData = rate.filter(item => item.datePosted.includes(selectedYear));
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
  

  return (
  <>
    <Navibar/>      
      
    <div class="container mb-3">
        <h2 style={{ 
            textAlign: 'center',
            color: '#31363F',
            fontWeight: '800',
            fontSize:'3.00rem',
            fontFamily:'Lato, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
            marginTop: '20px',
          }}>Rate</h2>

      <div className='container text-center'>
        {/* Select dropdown for years */}
        <label className='mb-3'>Select Year</label>
        <select
          className='form-select w-25'
          style={{ margin: "auto" }}
          value={selectedYear}
          onChange={(e) => handleYearSelect(e.target.value)}
        >
          {/* <option value="">Select Year</option> */}
          {years.map((year, index) => (
            <option value={year} key={index}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {selectedYear && (
  <div className='mt-3'>
    <table className='table'>
      <thead>
        <tr>
          <th>Month</th>
          <th>Source</th>
          <th>KWH Purchase</th>
          <th>Basic Generation Cost</th>
          <th>Other Cost Adjustment (DAA, NSS, and other Billing Adjustments)(PhP)</th>
          <th>Discounts</th>
          <th>Total Generation Cost for the Month  (PhP)</th>
          <th>Other Generation Adjustment (OGA)</th>
          <th>Average Generation Cost(PhP/Kwh)</th>
        </tr>
      </thead>
      <tbody>
        {years.filter(year => year === selectedYear).map((year) => {
          const months = [...new Set(rate.filter(item => item.datePosted.includes(year)).map(item => item.datePosted.split(',')[0]))];
          return months.map((month) => {
            return (
              <React.Fragment key={`${year}-${month}`}>
                <tr>
                  <td className='fw-bold' colSpan='9'>{month}, {year}</td>
                </tr>
                {rate.filter(item => item.datePosted.includes(`${month}, ${year}`)).map(item => (
                  <tr key={item.id}>
                    <td></td>
                    <td>{item.source}</td>
                    <td>{item.kwhpurchase}</td>
                    <td>{item.basicgenerationcost}</td>
                    <td>{item.othercostadjustment}</td>
                    <td>{item.discounts}</td>
                    <td>{item.totalgenerationcostmonth}</td>
                    <td>{item.othergenerationadjustment}</td>
                    <td>{item.averagegenerationcost}</td>
                  </tr>
                ))}
              </React.Fragment>
            );
          });
        })}
        {/* Add totals row */}
        <tr>
          <td colSpan="2" className='fw-bold'>Total</td>
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
)}





      </div>
    <Footer/>
    </>
  );
}

export default Contact;