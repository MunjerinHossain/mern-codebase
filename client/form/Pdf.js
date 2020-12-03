import React,{useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "./PdfDocument";
import { BrowserRouter } from "react-router-dom";

export default function PdfGenerator() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <PDFViewer>
          <Pdf />
        </PDFViewer>
      )}
    </div>
  );
}
