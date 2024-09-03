import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <>
      <div className='container flex justify-around flex-wrap   w-[100%] m -0 p-0 bg-sky-600 max-w-screen-2xl	py-[60px] px-[10px]'>
        <Card price="10,300,000" description="Toyota Land Cruiser Cygnus 2002" address="Naval Anchorage, Islamabad" time="1 hour ago" url="https://images.olx.com.pk/thumbnails/483095675-800x600.webp" alt="Land Cruiser" />
        <Card price="4,800,000 " description="DFSK Glory 580 2022" address="Islamabad Expressway, Islamabad" time="2 hours ago" url="https://images.olx.com.pk/thumbnails/483085034-800x600.webp" alt="DFSK Glory" />
        <Card price="5,895,000 " description="Peugeot 2008 Allure 2022 Panaromic Roof" address="PECHS, Karachi" time="18 hours ago" url="https://images.olx.com.pk/thumbnails/480949501-800x600.webp" alt="Panaromic Roof" />
        <Card price="4,875,000 " description="Honda Civic 1.8 l-VTEC Oriel top of the line Variant Model 2017" address="Jamshed Road, Karachi" time="1 day ago" url="https://images.olx.com.pk/thumbnails/482871185-800x600.webp" alt="Honda Civic" />
        <Card price="6,430,000 " description="MG HS 2021" address="PAF Colony, Lahore" time="3 days ago" url="https://images.olx.com.pk/thumbnails/480111898-800x600.webp" alt="MG HS" />
        <Card price="2,460,000" description="Toyota Vitz 2011" address="Margalla View Housing Society, Islamabad" time="3 days ago" url="https://images.olx.com.pk/thumbnails/475831063-800x600.webp" alt="Toyota Vitz " />
        <Card price="13,990,000" description="Toyota Hilux Revo Rocco 2.8 Brand New" address="DHA Phase 3, Lahore" time="3 days ago" url="https://images.olx.com.pk/thumbnails/482438910-800x600.webp" alt="Toyota Revo" />
        <Card price="7,000,000" description="Toyota Alphard Hybrid 2008" address="DHA Phase 3, Lahore" time="3 days ago" url="https://images.olx.com.pk/thumbnails/482317127-800x600.webp" alt="Toyota Alphard" />
        <Card price="5,300,000" description="Honda Civic VTi Oriel Prosmatec 1.8 i-VTEC 2016" address="DHA Defence, Islamabad" time="3 days ago" url="https://images.olx.com.pk/thumbnails/479683786-800x600.webp" alt="Honda Civic VTi Oriel" />
        {/* <Card price=" " description="" address="" time="" url="" alt="" />
      <Card price=" " description="" address="" time="" url="" alt="" />
      <Card price=" " description="" address="" time="" url="" alt="" />
      <Card price=" " description="" address="" time="" url="" alt="" /> */}

      </div>
    </>
  )
}

export default App