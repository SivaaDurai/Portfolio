import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Project1 from './DUMMYROUTING/PROJECT/Project1';
import Webpgs from './DUMMYROUTING/PROJECT/Webpgs';
import Layout from './DUMMYROUTING/PROJECT/Layout.jsx';
import Fetch from './Practice/Fetch.jsx'; 
import Taskk1 from './Practice/Taskk1.jsx';
import Bmi from './Bmi.jsx';
function App() {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <Project1 />
            </Layout>
          }
        />
        <Route
          path="/portfolio/web-design"
          element={
            <Layout>
              <Webpgs />
            </Layout>
          }
        />
        <Route path="/portfolio/web-design/sample-webpage" element={<Layout><Fetch /> </Layout>} />
       <Route path="/portfolio/web-design/todo-list" element={<Layout><Taskk1 /> </Layout>} />
       <Route path="/portfolio/web-design/bmi" element={<Layout><Bmi /> </Layout>} />

      </Routes>
      </>
  );
}

export default App;

