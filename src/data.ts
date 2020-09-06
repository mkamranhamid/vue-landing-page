const data = {
    packages: {
        title: "Wähle dein Premiumpaket:",
        list: [
            {
                popular: false,
                duration: "1 Monat",
                fees: "EUR 9.99",
                note: ""
            },
            {
                popular: true,
                duration: "1 Jahr",
                fees: "EUR 49.99",
                note: "Du sparst EUR 5,82 / Monat"
            },
            {
                popular: false,
                duration: "2 Jahr",
                fees: "EUR 79.99",
                note: "Du sparst EUR 6,66 / Monat"
            },
        ]
    },
    advantages: {
        title: "Deine Vorteile von BikerSOS Premium:",
        list: {
            features: [
                "Tourenaufzeichnung",
                "Autom Unfallerkennung",
                "Autom Notruf",
                "Medizinische Daten",
                "Foto-Dokumentation",
                "Live-Tour",
                "Autom Live-Tour",
                "Motorradverwaltung",
                "Beliebig viele motarrader",
                "BikerSOS GPS-Tracker",
            ],
            basic: [
                true,
                true,
                false,
                false,
                true,
                true,
                false,
                true,
                false,
                false,
            ],
            premium: [
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
                true,
            ],
        }
    },
    information: {
        heading: "Wichtige Information für GPS-Tracker Interssierte:",
        minDescripton: "Um einen BikerSOS GPS-Tracker aktivieren zu können, benötigst du mindestens ein 1-Jahres Abo.",
        description: "Die Zahlung wird an deine später gewählte Zahlungsmethode bei Bestätigung des Kaufes verrechnet. Der Kauf verlängert sich automatisch, bis die automatische Verlängerung nicht mindestens 24-Stunden vor Ende der aktuellen Laufzeit durch kontaktieren des Supports deaktiviert worden ist."
    }
}

export default data;