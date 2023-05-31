import Header from "./components/Header";
import SectionVideo from "./components/SectionVideo";
import SectionInvitados from "./components/SectionInvitados";
import SectionDetallesEvento from "./components/SectionDetallesEvento";
import SectionPartners from "./components/SectionPartners";
import SectionForm from "./components/SectionForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SectionVideo />
      <SectionInvitados />
      <SectionDetallesEvento />
      <SectionPartners />
      <SectionForm />
      <Footer />
    </div>
  );
}

export default App;
