import React, { useState, Suspense, lazy } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { PageLayout, CookieBanner, RegistrationModal, ScrollToTop } from './components/SharedUI';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const StatutesPage = lazy(() => import('./pages/StatutesPage'));
const JoinFormPage = lazy(() => import('./pages/JoinFormPage'));
const ProgramPage = lazy(() => import('./pages/ProgramPage'));
const ProgramDetailPage = lazy(() => import('./pages/ProgramDetailPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const MemberProfilePage = lazy(() => import('./pages/MemberProfilePage'));
const MemberTopicDetailPage = lazy(() => import('./pages/MemberTopicDetailPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <Loader2 className="w-8 h-8 text-latvia-red animate-spin" />
  </div>
);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState('');

  const openRegistration = (eventId: string) => {
    setSelectedEventId(eventId);
    setModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <PageLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/par-biedribu" element={<AboutPage />} />
            <Route path="/statuti" element={<StatutesPage />} />
            <Route path="/iesniegums" element={<JoinFormPage />} />
            <Route path="/programma" element={<ProgramPage />} />
            <Route path="/programma/:id" element={<ProgramDetailPage />} />
            <Route path="/privatuma-politika" element={<PrivacyPolicyPage />} />
            <Route path="/sikdatnu-politika" element={<CookiePolicyPage />} />
            <Route path="/biedri/:id" element={<MemberProfilePage />} />
            <Route path="/biedri/:id/:topicId" element={<MemberTopicDetailPage />} />
            <Route path="/aktualitates" element={<NewsPage />} />
            <Route path="/aktualitates/:id" element={<NewsDetailPage openRegistration={openRegistration} />} />
            <Route path="/kontakti" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </PageLayout>
      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialEventId={selectedEventId} 
      />
    </Router>
  );
}
