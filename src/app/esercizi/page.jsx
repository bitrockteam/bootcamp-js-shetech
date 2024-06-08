'use-client'
import styles from './styles.module.css'
import Image from "next/image"
import es1 from '/public/es1.png'
import es2 from '/public/es2.png'
import es3 from '/public/es3.png'
import es4 from '/public/es4.png'
import gruppo from '/public/gruppo.jpg'

export default function Esercizi() {


  const esercizi = [
    {
      title: 'Playground',
      subtitle: 'Il playground è uno spazio libero che useremo per prendere familiarità con il codice JavaScript',
      img: '',
      url: 'https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024-playground',
      disabled: false,
    },
    {
      title: 'Esercizio 1: Cambiamo colore allo sfondo della pagina',
      subtitle: 'Lo scopo di questo esercizio è quello di cambiare lo sfondo della pagina in base ad un array di colori che abbiamo definito in precedenza',
      img: es1,
      url: 'https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024',
      disabled: false,
    },
    {
      title: 'Esercizio 2: Contatore',
      subtitle: 'Lo scopo di questo esercizio è quello di far funzionare il contatore, aumentando o diminuendo il suo valore',
      img: es2,
      url: 'https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024-esercizio-2',
      disabled: false,
    },
    {
      title: 'Esercizio 3: Lista della spesa',
      subtitle: 'Lo scopo di questo esercizio è quello di aggiungere degli elementi inseriti dall\'utente ad una lista e mostrarli graficamente sulla pagina',
      img: es3,
      url: 'https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024-esercizio-3',
      disabled: false,
    },
    {
      title: 'Esercizio 4: Disegna',
      subtitle: 'Implementa un\'applicazione di disegno in JavaScript che permetta agli utenti di creare immagini in stile pixel art. L\'applicazione offre un\'area di disegno personalizzabile e strumenti di disegno per colorare i pixel. È un\'opportunità per praticare la manipolazione del DOM, gestire gli eventi utente e implementare la logica di disegno basata su pixel.',
      img: es4,
      url: 'https://stackblitz.com/@BitrockFeStackblitz/collections/shetech-bootcamp-2024-esercizio-4',
      disabled: false,
    },

  ]


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-18 px-6 lg:px-8 xl:grid-cols-1">
        <div className="max-w-12xl text-center md:text-left flex flex-col justify-between gap-20 items-top md:flex-row">
          <div className='max-w-2xl'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Esercizi della giornata di JavaScript</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Di seguito troverai i collegamenti al playground e agli esercizi che verranno affrontati durante la giornata di bootcamp. <br/><br/>Per svolgere gli esercizi e praticare la scrittura del codice, utilizzeremo <a target='blank' href='https://stackblitz.com/'><b>Stackbitz</b></a>, un editor di codice online che consente lo sviluppo direttamente dal browser e la condivisione delle nostre soluzioni con altri sviluppatori.
            </p>
            <p className="mt-6"> • Per accedere agli esercizi, fare clic sul pulsante "Vai all'esercizio" il giorno dell'evento.</p>
            <p className="mt-6"> • I collegamenti saranno attivi dal giorno dell'evento.</p>
            <p className="mt-6"> • Gli esercizi sono strutturati in step: inizia dallo step 1, completa l'esercizio e procedi al successivo (ogni step contiene la soluzione dello step precedente). Confronta poi la tua soluzione con quella fornita.</p>
          </div>
          {<Image src={gruppo} width={400} height={'auto'} />}
        </div>
        {esercizi.map((esercizio) => (
          <div className="my-8 text-center md:text-left flex flex-col justify-between gap-20 items-center md:flex-row">
            <div>
              <h2 className="text-2xl font-bold my-4">{esercizio.title}</h2>
              <p>{esercizio.subtitle}</p>
              <a href={esercizio.url} target="blank"><button disabled={esercizio.disabled} className="bg-orange-500 rounded px-4 py-2 text-white my-5">Vai all'esercizio </button></a>
            </div>
            {esercizio.img && <Image src={esercizio.img} width={250} height={500} />}
          </div>
        ))}
      </div>
    </div>
  )
}
