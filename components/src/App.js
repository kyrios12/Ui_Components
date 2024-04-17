import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';


const Home = React.lazy(() => import('./Pages/Home'));
const Accordion = React.lazy(() => import('./Components/Accordion/Accordion'));
const BackTop = React.lazy(() => import('./Components/Back_to_top/back_to_top'));
const Modal = React.lazy(() => import('./Components/modal/modal'));
const Counter = React.lazy(()=> import('./Components/Counter/Counter'));
const FilterableGallery = React.lazy(()=> import('./Components/Filterable_gallery/FilterableGallery'));
const LoadMore = React.lazy(()=> import('./Components/LoadMore/LoadMore'));
const ReadMore = React.lazy(()=> import('./Components/ReadMore/ReadMore'));
const SearchFilter = React.lazy(()=> import('./Components/SearchFilter/SearchFilter'));
const Sidebar = React.lazy(()=> import('./Components/SideBar/Sidebar'));
const StickyHeader = React.lazy(()=> import('./Components/StickyHeader/StickyHeader'));
const Tabs = React.lazy(()=> import('./Components/Tabs/Tabs'));
const ClickedModal = React.lazy(()=> import('./Components/ClickedModal/ClickedModal'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='accordion' element={<Accordion />} />
          <Route path='back-top' element={<BackTop />} />
          <Route path='modal' element={<Modal />} />
          <Route path='counter' element = {<Counter />} />
          <Route path='filterable-gallery' element = {<FilterableGallery />} />
          <Route path='load-more' element = {<LoadMore />} />
          <Route path='read-more' element = {<ReadMore />} />
          <Route path='search-filter' element = {<SearchFilter />} />
          <Route path='sidebar' element = {<Sidebar />} />
          <Route path='sticky-header' element = {<StickyHeader />} />
          <Route path='tabs' element = {<Tabs />} />
          <Route path='clicked-modal' element = {<ClickedModal />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
