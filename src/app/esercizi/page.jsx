'use-client'
import styles from './styles.module.css'
import Image from "next/image"
import es1 from '/public/es1.png'

export default function Esercizi() {

  const isEventStarted = () => {
    const dataDaConfrontare = new Date('2024-06-08').setHours(8, 0, 0);
    const now = new Date();
    return dataDaConfrontare > now;
  };

  console.log(isEventStarted())

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-18 px-6 lg:px-8 xl:grid-cols-1">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Esercizi della giornata di Javascript</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Qui sotto troverai i link al playground e agli esercizi che faremo durante la giornata di bootcamp.
            Per fare gli esercizi e fare pratica sul codice utilizzeremo <a target="blank" href="https://stackblitz.com">stackbitz</a>, un editor di codice online che ci permette di sviluppare sul proprio browser e condividere con altri sviluppatori quello che abbiamo fatto.
          </p>
          <p className="mt-6"> • Per poter visualizzare gli esercizi clicca sul bottone vai all'esercizio il giorno dell'evento.</p>
          <p className="mt-6"> • I link saranno attivi il giorno dell'evento.</p>
          <p className="mt-6"> • Gli esercizi sono divisi in step, comincia dallo step 1 e svolgi l'esercizio, successivamente passa allo step successivo (all'interno troverai la soluzione di quello precedente) e confronta con quello che hai fatto tu.</p>
        </div>
        <div className="mt-6 flex justify-between">
          <div>
            <h2 className="text-2xl font-bold my-4">Playground:</h2>
            <p> Il playground è uno spazio libero che useremo per prendere familiarità con il codice javascript</p>
            <a href="https://stackblitz.com/edit/vitejs-vite-iwb7pk?file=main.js" target="blank"><button className="bg-orange-500 rounded px-4 py-2 text-white my-5">Vai al playground </button></a>
          </div>
        </div>
        <div className="mt-4 flex align-items-center">
          <div>
            <h2 className="text-2xl font-bold my-4">Esercizio 1: Cambiamo colore allo sfondo della pagina</h2>
            <p> Lo scopo di questo esercizio è quello di cambiare lo sfondo della pagina in base ad un array di colori che abbiamo definito in precedenza</p>
            <a href="https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024" target="blank"><button disabled={isEventStarted()} className="bg-orange-500 rounded px-4 py-2 text-white my-5">Vai all'esercizio </button></a>
          </div>
          <Image src={es1} width={'auto'} height={400} />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold my-4">Esercizio 2: Contatore</h2>
          <p>Lo scopo di questo esercizio è quello di far funzionare il contatore, aumentando o diminuendo il suo valore</p>
          <a href="https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024-esercizio-2" target="blank"><button disabled={isEventStarted()} className="bg-orange-500 rounded px-4 py-2 text-white my-5">Vai all'esercizio </button></a>
          <p></p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold my-4">Esercizio 3: Lista della spesa</h2>
          <p> Lo scopo di questo esercizio è quello di aggiungere degli elementi inseriti dall'utente ad una lista e mostrarli graficamente sulla pagina</p>
          <a href="https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024-esercizio-3" target="blank"><button disabled={isEventStarted()} className="bg-orange-500 rounded px-4 py-2 text-white my-5">Vai all'esercizio </button></a>
          <p></p>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold my-4">Esercizio 4: Disegna</h2>
          <a href="https://stackblitz.com/edit/vitejs-vite-iwb7pk?file=main.js" target="blank"><button disabled={isEventStarted()} className="bg-orange-500 rounded px-4 py-2 text-white my-5">Vai all'esercizio </button></a>
          <p></p>
        </div>
      </div>
    </div>
  )
}
