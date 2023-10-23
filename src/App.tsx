import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as Pages from '@/pages'

export default function App() {
  return (
    <React.Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Pages.Home />} />
          <Route path="*" index element={<Pages.NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}
