import React from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer'
import Soaimage from '../../../Assets/soa-880x918-1.png'
import { useEffect } from 'react';

const Soa = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
        
  return (
    <div>
        <Navibar/>
         <div className='container'>
            <h3 className='mt-3 fw-bold'>Understanding SOA</h3>
            <div className='row'>
                <div className='col-md-7'>
                    <p><b>1 GENERATION CHARGE (Pass-through)</b> Ito ay para sa kuryenteng binibili ng ZAMECO II sa National Power Corporation (NPC) at Independent Power Producers (IPPs).</p>
                    <p><b>2 TRANSMISSION CHARGE (Pass-through)</b> Ito ay binabayad para sa paghatid ng kuryente mula sa mga generator na nasa probinsya o malalayong lugar sa pamamagitan ng High Voltage Transmission Grids papunta sa pasilidad (linya at substation) ng ZAMECO II. Ang bayad ay napupunta sa National Transmission Company (TRANSCO).</p>
                    <p><b>3 DISTRIBUTION CHARGE (ZAMECO II)</b> Ito ay para sa operasyon at pagmentena ng mga pasilidad ng ELECTRIC COOPERATIVE na nagdadala ng serbisyo sa lahat ng end-users/customers.</p>
                    <p><b>4 SUPPLY CHARGE (ZAMECO II)</b> Ito ay para sa serbisyo ng mga electric coop sa mga consumer, gaya ng billing, pangungulekta, customer assistance at iba pa.</p>
                    <p><b>5 METERING CHARGE (ZAMECO II)</b> Kasama dito ang halaga, pagbabasa, operasyon at pagmentena ng mga metro ng kuryente.</p>
                </div>
                <div className='col-md-5'>
                    <img src={Soaimage} alt='Image' style={{width: 500}}/>
                </div>
                <div className='col-md-12'>
                    <p><b>6 UNIVERSAL CHARGES (Pass-through)</b> Ito ay napupunta sa PSALM na pag-aari at kontrolado ng gobeyerno at nilikha ng RA9136. Sa pitong bahagi na bumubuo nito, 2 pa lang ang sinisingil ng electric coop. Ang Missionary Electrification na gagamitin upang maipaabot ang daloy ng kuryente sa mga isla at mga liblib na lugar, ang Environmental Charges upang mapangalagaan naman ang kapaligiran tulad ng water sheds na pangunahing gamit sa Hydro Electric Plant.</p>
                    <p><b>7 UNDER RECOVERY REINSTATEMENT / PPD : (P 0.043 / KWH)</b> Ito ay inaprubahan ng ERC upang makolekta ng Kooperatiba ang kakulangan sa inaprubahan Taripa hinggil sa pagbawi sa sobrang pagpasa ng ” PROMPT PAYMENT DISCOUNT”</p>
                    <p><b>8 INTER-CLASS CROSS SUBSIDY CHARGE (Pass-through)</b> Halagang sinisingil sa mga uri ng end-users upang mapababa ang taripa ng kuryente para sa ibang sector.</p>
                    <p><b>9 LIFE LINE RATE DISCOUNT/SUBSIDY (Pass-through)</b> Ito ay tulong na halaga na ibinigay sa mga residential consumers na may buwanang kunsomo na hindi hihigit sa 25 kwh o mga lifeline end-users na walang kakayahang magbayad ng kabuuang halaga ng nakonsumong kuryente. Ang subsidy naman ay ang pondong gagamitin sa nasabing tulong na magmumula sa lahat ng end-users na hindi nabibilang sa lifeline customers.</p>
                    <p><b>10 NPC STRANDED CONTRACT COST (P 0.1938 / kWh)</b> Ito ay dagdag singil sa kuryente na base sa inilaang petisyon ng PSALM sa ERC Case No. 2011-091 RC sa inaprubahan ng komisyon noong January 28, 2013 para mabawi ng (NAPOCOR) National Power Corporation ang ” Stranded Contract Costs (SCC) ng Universal Charge (UC) o deperensya ng presyo na ipinasa ng NAPOCOR ng mga nakaraang taong 2007 – 2010</p>
                </div>
            </div>
            <hr/>
         </div>
         <Footer />
    </div>
  )
}

export default Soa