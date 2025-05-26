import Image from 'next/image';

interface TeamProps {
    Team: {
        Teamheader: string;
        Description: string;
    };
    Employees: Employee[];
}


interface Employee {
    Employeename: string
    Proffession: string
    About: string
    Employeeavatar:{
        url: string
        formats: {
            small:{
                url: string
            }
        }

    }
}

const teamMembers = [
    {
        name: 'Anna Lindström',
        role: 'Huvudtränare',
        image: '/images/team/anna.png',
        bio: 'Anna har över 15 års erfarenhet inom tävlingssimning och ansvarar för elitgruppen.',
    },
    {
        name: 'Marcus Pettersson',
        role: 'Tekniktränare',
        image: '/images/team/marcus.png',
        bio: 'Marcus fokuserar på simteknik för både nybörjare och tävlingssimmare.',
    },
    {
        name: 'Elin Sjöberg',
        role: 'Barn- och ungdomstränare',
        image: '/images/team/elin.png',
        bio: 'Elin brinner för att utveckla unga simmare och skapa glädje i vattnet.',
    },
    {
        name: 'Oskar Nordin',
        role: 'Fystränare',
        image: '/images/team/oskar.png',
        bio: 'Oskar ansvarar för landträningen och skadeförebyggande övningar.',
    },
];

export default function TeamSection({Team, Employees}: TeamProps) {
    return (
        <div id="team" className="py-16">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <h2 className="text-3xl font-semibold tracking-wide text-blue-600 uppercase">{Team.Teamheader}</h2>

                <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
                    {Team.Description}
                </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
                {Employees.map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="border-2 relative mx-auto h-32 w-32 overflow-hidden rounded-full border-gray-500">
                            <Image
                                src={item.Employeeavatar.formats.small.url}
                                alt="Bild på Anställd"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.Employeename}</h3>
                        <p className="text-lg text-blue-600">{item.Proffession}</p>
                        <p className="text-lg text-gray-500">{item.About}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}