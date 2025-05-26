'use client';

import { useEffect, useState } from 'react';

export default function CookieAgreement() {    
    return (
        <main className="mx-auto max-w-4xl p-6 pb-40 text-gray-800">
            <h1 className="mb-4 text-2xl font-bold">Cookiepolicy</h1>
            <p className="mb-4">
                Denna webbplats använder cookies för att förbättra användarupplevelsen. Cookies är små textfiler som sparas i din webbläsare och hjälper oss att förstå hur webbplatsen används.
            </p>

            <h2 className="mt-6 mb-2 text-xl font-semibold">Vilka typer av cookies använder vi?</h2>
            <ul className="list-disc space-y-2 pl-6">
                <li><strong>Nödvändiga cookies:</strong> Krävs för att webbplatsen ska fungera korrekt.</li>
                <li><strong>Analytiska cookies:</strong> Hjälper oss att förstå hur besökare använder webbplatsen.</li>
            </ul>

            <h2 className="mt-6 mb-2 text-xl font-semibold">Hur kan du hantera cookies?</h2>
            <p className="mb-4">
                Du kan när som helst ändra dina inställningar i webbläsaren för att blockera eller ta bort cookies.
            </p>

            <p className="mt-8 text-sm text-gray-600">Senast uppdaterad: Maj 2025</p>
        </main>
    );
}
