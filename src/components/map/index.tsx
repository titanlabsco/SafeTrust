"use client"
import dynamic from "next/dynamic"; // Importa dynamic

const MapComponent = dynamic(() => import("@/components/map/Map"), { ssr: false });

export default MapComponent;