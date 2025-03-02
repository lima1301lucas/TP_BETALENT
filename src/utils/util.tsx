import { useState } from 'react';

export function formatDate(date: string) {
    const regex = /^(\d{4})-(\d{2})-(\d{2})/;
    const match = date.match(regex);
    
    if (match) {
        const [, year, month, day] = match;
        return `${day}/${month}/${year}`;
    }

    return date;
}

export function formatPhoneNumber(phoneNumber: string) {
    const regex = /(\d{2})(\d{2})(\d{5})(\d{4})/;
    const match = phoneNumber.replace(/\D/g, '').match(regex);

    if (match) {
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
    }

    return phoneNumber;
}

export function useToggleDetails() {
    const [isOpen, setIsOpen] = useState<{ [key: number]: boolean }>({});

    const toggleDetails = (id: number) => {
        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return {
        isOpen,
        toggleDetails
    };
}