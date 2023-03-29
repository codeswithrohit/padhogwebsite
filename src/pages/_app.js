import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const  router = useRouter()

 

  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
 })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
 })
    
   
    
  },[ router])


  




 
 

  
  return<>
  <LoadingBar
        color='#4cd964'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
 
  <Component   {...pageProps}/>

 
  


  </>
   
   
}

export default MyApp
