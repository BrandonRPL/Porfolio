
import CardProject from "./Components/CardProject";
import Navbar from './Components/Navbar';
import Presentation from "./Components/Presentation";
import Description from "./Components/Description";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main >
      <nav className="mt-3 bg-purple-800 rounded-md ml-80 mr-80">
        <Navbar />
      </nav>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="items-center justify-between font-mono text-sm lg:flex">
          <Presentation />   
        </div>
        <div className="z-10 max-w-5x1 w-full items-center justify-between font-mono text-sm flex">
          <CardProject />
        </div>
        <div className="z-10 max-w-5x1 w-full items-center justify-between font-mono text-sm flex">
          <Description />
        
        </div>
      </div>  
      <div>
          <Footer />
      </div>    
    </main>
    
  );
}
