import Image from "next/image"


const people = [

  {
    name: 'Loredana Cascarano',
    role: 'Mentor',
    linkedIn: 'https://www.linkedin.com/in/loredana-cascarano/',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQH_br4K2UrGQA/profile-displayphoto-shrink_400_400/0/1694439578578?e=1720051200&v=beta&t=jFW70gEH1JDldAT-zUR8-nRpiACZ102cFaDbetsMe1M',
  },
  {
    name: 'Gabriella Moro',
    role: 'Mentor',
    linkedIn: 'https://www.linkedin.com/in/gabriellamoro/',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQFprXMDXcr7mg/profile-displayphoto-shrink_800_800/0/1698658965411?e=1720051200&v=beta&t=EqhkWVy1e2eYgP56mv7r6YvA8qp3by-DBm3aLcI67FE',
  },

  {
    name: 'Giuseppe Figliuolo',
    role: 'Mentor',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQFIspJN-UX_2Q/profile-displayphoto-shrink_400_400/0/1613118267649?e=1720051200&v=beta&t=i2Hf3evfaSUItn4i6l0CpWLBcEkoOk2QwqTxvS00l6s',
    linkedIn: 'https://www.linkedin.com/in/giuseppe-figliuolo-51103818a/'
  },
  {
    name: 'Federico Muzzo',
    role: 'Mentor',
    linkedIn: 'https://www.linkedin.com/in/federico-m-475b3869/',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQHfsrYisgPI5w/profile-displayphoto-shrink_400_400/0/1645231240984?e=1720051200&v=beta&t=VZPUIyCVLeQa9L_qdqd06AYQz-vg8ubTwC_2WZrgFy8',
  },
  {
    name: 'Erik Fazio',
    role: 'Mentor',
    linkedIn: 'https://www.linkedin.com/in/erik-fazio/',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQGV-OT6O2AD4A/profile-displayphoto-shrink_400_400/0/1703143215033?e=1720051200&v=beta&t=qLV_FuzIpT6K3DswTuOxMH9Gpt8w-Z2IwrtliBlTmPY',
  },
  {
    name: 'Stefano Bruno',
    role: 'Mentor',
    imageUrl:
      'https://media.licdn.com/dms/image/D4D03AQEuUnPrBrGhqg/profile-displayphoto-shrink_400_400/0/1673878519084?e=1720051200&v=beta&t=l2Dt-oC9lqkiZ-IJi7nIvX304sthFgvxaCb_qloBNMA',
    linkedIn: 'https://www.linkedin.com/in/stefano-bruno',

  },
]

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <div className="max-w-30xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#505050] sm:text-4xl">Conosci i nostri mentor</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
              Scopri i mentor che parteciperanno al nostro bootcamp JavaScript e preparati ad essere guidato in questa nuova sfida.
          </p>
        </div>
        </div>
        <div className="mx-auto my-20 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
        <ul role="list" className="grid gap-x-12 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                {person.imageUrl && <img className="h-28 w-28 rounded-full" src={person.imageUrl} alt="" />}
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-[#505050]">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-[#505050]">{person.role}</p>
                  {person.linkedIn && <a className="mt-3" target="_blank" href={person.linkedIn}> <Image src={'/linkedInicon.png'} width={24} height={24} /></a>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
