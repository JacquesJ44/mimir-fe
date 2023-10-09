import { useEffect, useState, useRef } from 'react';
import { IP } from './config';
import { useParams } from 'react-router-dom';

const ViewHandover = () => {
    
    const {id} = useParams()
    const [file, setFile] = useState()

    useEffect(() => {
        
    // const fetchFile = () => {
        console.log('fetchFile')
        fetch(IP + '/download/' + id, {
          method: 'POST',
          headers: { "Authorization": 'Basic',
              "Content-Type": 'application/pdf',
              "Access-Control-Allow-Origin": 'true'},
          // body: formData,
          mode: "cors",
          credentials: "include"
      }).then((data_) => {
        data_.blob().then((data__) => {
          console.log(data__);
          setFile(data__);
          console.log(file)
        });
    })
    // }
})

    // return ( 
    //     <div>
    //         <Document
    //             file={file}
    //         >
    //             <Page pageNumber={1} />
    //         </Document>
    //     </div>
    //  );
}
 
export default ViewHandover;