import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import Accueil from './pages/Accueil';
import DomaineLaMarle from './pages/DomaineLaMarle';
import ChateauBarouillet from './pages/ChateauBarouillet';
import ChateauBarouillet1 from './pages/ChateauBarouillet1';
import CoteauxDesGirondales from './pages/CoteauxDesGirondales';
import DomaineRayJane from './pages/DomaineRayJane';
import DomaineLaMarle1 from './pages/DomaineLaMarle1';
import ChateauHautMarbuzet from './pages/ChateauHautMarbuzet';
import DomaineTatin from './pages/DomaineTatin';
import CoteauxDesGirondalles22 from './pages/CoteauxDesGirondalles22';
import CoteauxDesGirondales1 from './pages/CoteauxDesGirondales1';
import DomaineVincentFleith from './pages/DomaineVincentFleith';
import DomaineVincentFleith1 from './pages/DomaineVincentFleith1';
import DomaineTatin22 from './pages/DomaineTatin22';
import ManoirDeLaTeteRouge211 from './pages/ManoirDeLaTeteRouge211';
import FermeDes7Lunes from './pages/FermeDes7Lunes';
import CoteauxDesGirondales2 from './pages/CoteauxDesGirondales2';
import DomaineLaMarle2 from './pages/DomaineLaMarle2';
import DomaineMasDeLibian from './pages/DomaineMasDeLibian';
import HeritageDuPic20 from './pages/HeritageDuPic20';
import DomaineCombelLaSerre22 from './pages/DomaineCombelLaSerre22';
import HeritageDuPic22Blanc from './pages/HeritageDuPic22Blanc';
import CoteauxDesGirondales22 from './pages/CoteauxDesGirondales22';
import Accueil5 from './pages/Accueil5';
import SuprmeDePoulet from './pages/SuprmeDePoulet';
import CamembertRti from './pages/CamembertRti';
import Entrecte from './pages/Entrecte';
import Parmentier from './pages/Parmentier';
import CordonBleu from './pages/CordonBleu';
import Tagliatelles from './pages/Tagliatelles';
import BoudinNoir from './pages/BoudinNoir';
import Bavette from './pages/Bavette';
import PetitSal from './pages/PetitSal';
import CrottinDeChvre from './pages/CrottinDeChvre';
import ThonMiCuit from './pages/ThonMiCuit';
import ManoirDeLaTeteRouge from './pages/ManoirDeLaTeteRouge';
import DomaineDeLaTeteRouge21 from './pages/DomaineDeLaTeteRouge21';
import DomaineCoulet from './pages/DomaineCoulet';
import DomaineRveille from './pages/DomaineRveille';
import DomaineRveille1 from './pages/DomaineRveille1';
import DomaineReveille from './pages/DomaineReveille';
import ManoirDeLaTeteRouge21 from './pages/ManoirDeLaTeteRouge21';
import DomaineTatin21 from './pages/DomaineTatin21';
import ManoirDeLaTteRouge21 from './pages/ManoirDeLaTteRouge21';
import DomaineGarreliere21 from './pages/DomaineGarreliere21';
import ChateauLagrange22 from './pages/ChateauLagrange22';
import Accueil2 from './pages/Accueil2';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-la-marle2':
        title = '';
        metaDescription = '';
        break;
      case '/chateau-barouillet1':
        title = '';
        metaDescription = '';
        break;
      case '/chateau-barouillet':
        title = '';
        metaDescription = '';
        break;
      case '/coteaux-des-girondales1':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-ray-jane':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-la-marle':
        title = '';
        metaDescription = '';
        break;
      case '/chateau-hautmarbuzet':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-tatin':
        title = '';
        metaDescription = '';
        break;
      case '/coteaux-des-girondalles-22':
        title = '';
        metaDescription = '';
        break;
      case '/coteaux-des-girondales':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-vincent-fleith':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-vincent-fleith1':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-tatin-22':
        title = '';
        metaDescription = '';
        break;
      case '/manoir-de-la-tete-rouge-21':
        title = '';
        metaDescription = '';
        break;
      case '/ferme-des-7-lunes':
        title = '';
        metaDescription = '';
        break;
      case '/coteaux-des-girondales2':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-la-marle1':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-mas-de-libian':
        title = '';
        metaDescription = '';
        break;
      case '/heritage-du-pic-20':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-combel-la-serre-22':
        title = '';
        metaDescription = '';
        break;
      case '/heritage-du-pic-22-blanc':
        title = '';
        metaDescription = '';
        break;
      case '/coteaux-des-girondales-22':
        title = '';
        metaDescription = '';
        break;
      case '/accueil-3':
        title = '';
        metaDescription = '';
        break;
      case '/suprme-de-poulet':
        title = '';
        metaDescription = '';
        break;
      case '/camembert-rti':
        title = '';
        metaDescription = '';
        break;
      case '/entrecte':
        title = '';
        metaDescription = '';
        break;
      case '/parmentier':
        title = '';
        metaDescription = '';
        break;
      case '/cordon-bleu':
        title = '';
        metaDescription = '';
        break;
      case '/tagliatelles':
        title = '';
        metaDescription = '';
        break;
      case '/boudin-noir':
        title = '';
        metaDescription = '';
        break;
      case '/bavette':
        title = '';
        metaDescription = '';
        break;
      case '/petitsal':
        title = '';
        metaDescription = '';
        break;
      case '/crottin-de-chvre':
        title = '';
        metaDescription = '';
        break;
      case '/thon-micuit':
        title = '';
        metaDescription = '';
        break;
      case '/manoir-de-la-tete-rouge':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-de-la-tete-rouge-21':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-coulet':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-rveille1':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-rveille':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-reveille':
        title = '';
        metaDescription = '';
        break;
      case '/manoir-de-la-tete-rouge-211':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-tatin-21':
        title = '';
        metaDescription = '';
        break;
      case '/manoir-de-la-tte-rouge-21':
        title = '';
        metaDescription = '';
        break;
      case '/domaine-garreliere-21':
        title = '';
        metaDescription = '';
        break;
      case '/chateau-lagrange-22':
        title = '';
        metaDescription = '';
        break;
      case '/accueil-2':
        title = '';
        metaDescription = '';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/domaine-la-marle2' element={<DomaineLaMarle />} />
        <Route path='/chateau-barouillet1' element={<ChateauBarouillet />} />
        <Route path='/chateau-barouillet' element={<ChateauBarouillet1 />} />
        <Route
          path='/coteaux-des-girondales1'
          element={<CoteauxDesGirondales />}
        />
        <Route path='/domaine-ray-jane' element={<DomaineRayJane />} />
        <Route path='/domaine-la-marle' element={<DomaineLaMarle1 />} />
        <Route path='/chateau-hautmarbuzet' element={<ChateauHautMarbuzet />} />
        <Route path='/domaine-tatin' element={<DomaineTatin />} />
        <Route
          path='/coteaux-des-girondalles-22'
          element={<CoteauxDesGirondalles22 />}
        />
        <Route
          path='/coteaux-des-girondales'
          element={<CoteauxDesGirondales1 />}
        />
        <Route
          path='/domaine-vincent-fleith'
          element={<DomaineVincentFleith />}
        />
        <Route
          path='/domaine-vincent-fleith1'
          element={<DomaineVincentFleith1 />}
        />
        <Route path='/domaine-tatin-22' element={<DomaineTatin22 />} />
        <Route
          path='/manoir-de-la-tete-rouge-21'
          element={<ManoirDeLaTeteRouge211 />}
        />
        <Route path='/ferme-des-7-lunes' element={<FermeDes7Lunes />} />
        <Route
          path='/coteaux-des-girondales2'
          element={<CoteauxDesGirondales2 />}
        />
        <Route path='/domaine-la-marle1' element={<DomaineLaMarle2 />} />
        <Route path='/domaine-mas-de-libian' element={<DomaineMasDeLibian />} />
        <Route path='/heritage-du-pic-20' element={<HeritageDuPic20 />} />
        <Route
          path='/domaine-combel-la-serre-22'
          element={<DomaineCombelLaSerre22 />}
        />
        <Route
          path='/heritage-du-pic-22-blanc'
          element={<HeritageDuPic22Blanc />}
        />
        <Route
          path='/coteaux-des-girondales-22'
          element={<CoteauxDesGirondales22 />}
        />
        <Route path='/accueil-3' element={<Accueil5 />} />
        <Route path='/suprme-de-poulet' element={<SuprmeDePoulet />} />
        <Route path='/camembert-rti' element={<CamembertRti />} />
        <Route path='/entrecte' element={<Entrecte />} />
        <Route path='/parmentier' element={<Parmentier />} />
        <Route path='/cordon-bleu' element={<CordonBleu />} />
        <Route path='/tagliatelles' element={<Tagliatelles />} />
        <Route path='/boudin-noir' element={<BoudinNoir />} />
        <Route path='/bavette' element={<Bavette />} />
        <Route path='/petitsal' element={<PetitSal />} />
        <Route path='/crottin-de-chvre' element={<CrottinDeChvre />} />
        <Route path='/thon-micuit' element={<ThonMiCuit />} />
        <Route
          path='/manoir-de-la-tete-rouge'
          element={<ManoirDeLaTeteRouge />}
        />
        <Route
          path='/domaine-de-la-tete-rouge-21'
          element={<DomaineDeLaTeteRouge21 />}
        />
        <Route path='/domaine-coulet' element={<DomaineCoulet />} />
        <Route path='/domaine-rveille1' element={<DomaineRveille />} />
        <Route path='/domaine-rveille' element={<DomaineRveille1 />} />
        <Route path='/domaine-reveille' element={<DomaineReveille />} />
        <Route
          path='/manoir-de-la-tete-rouge-211'
          element={<ManoirDeLaTeteRouge21 />}
        />
        <Route path='/domaine-tatin-21' element={<DomaineTatin21 />} />
        <Route
          path='/manoir-de-la-tte-rouge-21'
          element={<ManoirDeLaTteRouge21 />}
        />
        <Route
          path='/domaine-garreliere-21'
          element={<DomaineGarreliere21 />}
        />
        <Route path='/chateau-lagrange-22' element={<ChateauLagrange22 />} />
        <Route path='/accueil-2' element={<Accueil2 />} />
      </Routes>
      <Analytics />
    </div>
  );
}
export default App;
