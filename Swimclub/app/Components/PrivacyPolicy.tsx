import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="mx-auto max-w-3xl px-4 py-8 text-gray-900">
            <h1 className="mb-6 text-3xl font-bold">Integritetspolicy för Shark Swimclub</h1>

            <p className="mb-4">
                Vi på Shark Swimclub värnar om din integritet och skyddet av dina personuppgifter.
                Denna integritetspolicy förklarar hur vi samlar in, använder och skyddar dina uppgifter.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">1. Vilka uppgifter vi samlar in</h2>
            <ul className="mb-4 list-inside list-disc">
                <li>Namn och kontaktinformation</li>
                <li>Födelsedatum (för åldersanpassad träning)</li>
                <li>Medicinsk information (vid behov)</li>
                <li>Betalningsinformation (vid medlemskap)</li>
            </ul>

            <h2 className="mt-6 mb-2 text-xl font-semibold">2. Hur vi använder informationen</h2>
            <p className="mb-4">
                Uppgifterna används för att hantera medlemskap, kommunikation, bokningar av simträningar
                och vid akuta situationer.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">3. Delning av information</h2>
            <p className="mb-4">
                Vi delar inte dina personuppgifter med tredje part, förutom när det krävs enligt lag
                eller vid akuta medicinska behov.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">4. Dina rättigheter</h2>
            <p className="mb-4">
                Du har rätt att få tillgång till, rätta eller radera dina personuppgifter. Kontakta oss
                på info@sharkswimclub.se vid frågor.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">5. Kontakt</h2>
            <p className="mb-4">
                Om du har några frågor om denna policy, vänligen kontakta oss på:
                <br />
                <strong>E-post:</strong> info@sharkswimclub.se
                <br />
                <strong>Adress:</strong> Exempelgatan 1, 123 45 Simstad
            </p>
        </div>
    );
};

export default PrivacyPolicy;
