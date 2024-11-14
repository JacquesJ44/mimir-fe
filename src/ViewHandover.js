import { useEffect, useState } from 'react';
import { IP } from './config';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    
    const ViewHandover = () => {
        
        const {id} = useParams()
        const [file, setFile] = useState()
        
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);
        
        function onDocumentLoadSuccess({ numPages }) {
            setNumPages(numPages);
            setPageNumber(1);
          }
        
          function changePage(offset) {
            setPageNumber(prevPageNumber => prevPageNumber + offset);
          }
        
          function previousPage() {
            changePage(-1);
          }
        
          function nextPage() {
            changePage(1);
          }
        
        useEffect(() => {
        
        fetch(IP + '/download/' + id, {
          method: 'GET',
          headers: { "Authorization": 'Basic',
              "Content-Type": 'application/pdf',
              "Access-Control-Allow-Origin": 'true'},
          mode: "cors",
          credentials: "include"
      }).then((data_) => {
        data_.blob().then((data__) => {
          // console.log(data__);
          setFile(data__);
        //   console.log(file)
        });
    })
}, [id])

    return ( 
        <>
        <div>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <p>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                className="mx-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-gray-200 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
                >
                Previous
                </button>
                <button
                className="mx-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-gray-200 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
                >
                Next
                </button>
            </div>
        </div>
        </>
     );
}
 
export default ViewHandover;