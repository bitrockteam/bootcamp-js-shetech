'use-client'
import Image from "next/image"

export default function Risorse() {

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-18 px-6 lg:px-8 xl:grid-cols-1">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Argomenti affrontati durante gli esercizi</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Qui sotto troverai la lista degli argomenti che affronteremo durante gli esercizi e i link che rimandano alla documentazione.
            Ti invitiamo ad usarli durante l'esercitazione, piuttosto che guardare l'esercizio già completo
          </p>
          <ul>
            <li className="my-10">
              <b>1. Oggetto Documento</b>
              <a target="_blank" href="https://www.w3schools.com/jsref/met_document_getelementbyid.asp"><p className="ml-5 my-2 hover:underline"> • document.getElementById</p></a>
              <a target="_blank" href="https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp"></a><p className="ml-5 my-2 hover:underline"> • document.getElementByClass</p>
            </li>
            <li className="my-10">
              <b>2. Tipi di Dato</b>
              <a target="_blank" href="https://www.w3schools.com/js/js_strings.asp"><p className="ml-5 my-2 hover:underline"> • Stringa</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_numbers.asp"><p className="ml-5 my-2 hover:underline"> • Numero</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_booleans.asp"><p className="ml-5 my-2 hover:underline"> • Booleano</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_objects.asp"><p className="ml-5 my-2 hover:underline"> • Oggetto</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_arrays.asp"><p className="ml-5 my-2 hover:underline"> • Array</p></a>
            </li>
            <li className="my-10">
              <b>3. Variabili</b>
              <a target="_blank" href="https://www.w3schools.com/js/js_variables.asp"><p className="ml-5 my-2 hover:underline"> • Dichiarazione di una variabile</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_variables.asp"><p className="ml-5 my-2 hover:underline"> • var, let, const</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_variables.asp"><p className="ml-5 my-2 hover:underline"> • Assegnazione di valore</p></a>
            </li>
            <li className="my-10">
              <b>4. Ascoltatori di Eventi</b>
              <a target="_blank" href="https://www.w3schools.com/jsref/met_document_addeventlistener.asp"><p className="ml-5 my-2 hover:underline"> • addEventListener</p></a>
              <a target="_blank" href="https://www.w3schools.com/jsref/met_element_removeeventlistener.asp"><p className="ml-5 my-2 hover:underline"> • removeEventListener</p></a>
            </li>
            <li className="my-10">
              <b>5. Funzioni</b>
              <a target="_blank" href="https://www.w3schools.com/js/js_function_definition.asp"><p className="ml-5 my-2 hover:underline"> • Sintassi delle Funzioni JavaScript</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_function_invocation.asp"><p className="ml-5 my-2 hover:underline"> • Invocazione della Funzione</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_functions.asp"><p className="ml-5 my-2 hover:underline"> • Return</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_function_parameters.asp"><p className="ml-5 my-2 hover:underline"> • Parametri</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_if_else.asp"><p className="ml-5 my-2 hover:underline"> • If condition</p></a>
            </li>
            <li className="my-10">
              <b>6. Manipoliazione del dom</b>
              <a target="_blank" href="https://www.w3schools.com/jsref/prop_html_innerhtml.asp"><p className="ml-5 my-2 hover:underline"> • Cambiare il Contenuto HTML</p></a>
              <a target="_blank" href="https://www.w3schools.com/js/js_htmldom_css.asp"><p className="ml-5 my-2 hover:underline"> • Cambiare lo Stile HTML</p></a>
              <a target="_blank" href="https://www.w3schools.com/jsref/met_document_createelement.asp"><p className="ml-5 my-2 hover:underline"> • HTML DOM Document createElement</p></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
