import { lazy } from "react";

export const Home = lazy(async () => await import('@/pages/home'))

export const NotFound = lazy(async () => await import('@/pages/404'))