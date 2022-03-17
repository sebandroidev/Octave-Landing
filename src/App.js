import {
  Navbar,
  Hero,
  Footer,
  Pricing,
  Usage,
  Subscribe,
  Download,
} from "./containers/index";

function App() {
  return (
    <div className="font-Inter text-sm">
      <Navbar />
      <Hero />
      <Usage />
      <hr className="container my-20 md:my-40 w-2/3 md:w-1/2" />
      <Download />
      <Pricing />
      <hr className="container my-20 md:my-40 w-2/3 md:w-1/2" />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
