import Navbar from './common/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Packages from './pages/packages/packages';
import AllPackages from './pages/packages/AllPackages';
import PackageDetails from './pages/packages/packagedetails';
import PackageReview from './pages/packages/packageReview';
import PackageBooked from './pages/packages/packageBooked';
import MyTrips from './pages/packages/Mytrips/myTrips';
import BlogListPage from './Blogs/blog';
import BlogDetailsPage from './Blogs/blogDetails';
import ContactMe from './contact/contact';
import Footer from './common/footer'; 
import LandingPage from './Home/landingPage';




function App() {
  return (
  <BrowserRouter> 
    <Navbar/>
    <Routes>
      
    <Route path="/" element={<LandingPage/>} /> 
    <Route path="/packages" element={<Packages/>} />
    <Route path="/AllPackages" element={<AllPackages/>} />
    <Route path="/packages/:id" element={<PackageDetails/>} />  
    <Route path="/packages/:id/review" element={<PackageReview />} />
    <Route path="/package-booked" element={<PackageBooked/>} /> 
    <Route path="/myTrips" element={<MyTrips/>}/>
    <Route path="/blog" element={<BlogListPage />} />
    <Route path="/blog/:id" element={<BlogDetailsPage/>} />
    <Route path='/contact' element={<ContactMe/>}/> 
    

    
    
    </Routes>
    <Footer/> 
  </BrowserRouter>
  );
}

export default App;
