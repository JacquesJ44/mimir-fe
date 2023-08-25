import { useState,useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { IP } from './config.js';

const ViewSite = () => {

    const [data, setData] = useState([])
    const {site}  = useParams()

    useEffect(() => {
        window.scrollTo(0,0)
    
        fetch(IP + '/viewsite/' + site, {
          method: 'GET',
          headers: { "Authorization": 'Basic',
                    "Content-Type": 'application/json',
                    "Access-Control-Allow-Origin": 'true'},
          mode: "cors",
          credentials: "include",
        }).then((data_) => {
          data_.json().then((data__) => {
            console.log(data__);
            setData(data__);
          });
        })
    
      },[site])

      return ( 
        <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-1">
            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">

              <div className="md:grid md:grid-cols-3 md:gap-6 py-3">
                <div className="md:col-span-1 text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">{data.building}</h3>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2 text-left">
                  { data['site'] } {data['latitude']} {data.longitude}
                  { data['latitude'] } { data['longitude'] }<br/>
                  { data['site'] }, { data[6] }<br/>
                  Deutschland dd {data.site}
                </div>
              </div>

              {/* <div className="md:grid md:grid-cols-3 md:gap-6 py-3">
                <div className="md:col-span-1 text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Neue Adresse</h3>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2 text-left">
                  { data["newStraße"] } { data["newHausnummer"] } { data["newAdresszusatz"] }<br/>
                  { data["newPLZ"] }, { data["newOrt"] }<br/>
                  { data["selectedCountry"] }
                </div>
              </div>

              <div className="md:grid md:grid-cols-3 md:gap-6 py-3">
                <div className="md:col-span-1 text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Auftragsdaten</h3>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2 text-left">
                  <i>Nachsendeauftragtyp</i>: { data["company"] ? "Firma" : "Privat" } <br/>
                  <i>Beginn</i>: { data["useWunschtermin"] ? data["wunschtermin"] : "Schnellstmöglich" } <br/>
                  <i>Grund</i>: { data["art"] } <br/>
                  <i>E-Mail Adresse</i>: { data["email"] }<br/>
                  <i>Paketsendungen</i>: { data["paketsendungen"] ? "Pakete werden umgeleitet." : "Pakete werden nicht umgeleitet." }<br/>
                  <i>Infopost</i>: { data["infopost"] ? "Infopost wird umgeleitet." : "Infopost wird nicht umgeleitet." }<br/>
                </div>
              </div> */}

              {/* <div className="md:grid md:grid-cols-3 md:gap-6 py-3">
                <div className="md:col-span-1 text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Empfänger</h3>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2 text-left">
                  { data["vorname"] } { data["nachname"] } <br/>
{(data["extraNames"] || []).map((extraName) => (
                  <span key={extraName["id"]}>{ extraName["vorname"] } { extraName["nachname"] } <br/></span>
))}
                </div>
              </div> */}

              <hr/>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-end">
                <Link to="/sites">
                  <button
                    type="submit"
                    value="Submit"
                    className="mx-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-gray-200 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
<svg xmlns="    http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
  <path fill    Rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
</svg>
                    Back
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
     );
}
 
export default ViewSite;