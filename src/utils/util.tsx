import { useState } from 'react';
import { Employee } from '../employees/employees.tsx';

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

export function renderFetchStatus(loading: boolean, error: string | null) {
    if (loading) 
        return(
            <div className="message-space">
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
                <div className="loader-dot"></div>
            </div>
        );

    if (error) 
        return (
            <div className="message-space">
                <p className="error-message">Erro ao mostrar os dados...</p>
            </div>     
        );

    return null;
}

export function filterEmployees(employees: Employee[], searchTerm: string): Employee[] {
    const searchLower = searchTerm.toLowerCase();
    return employees.filter((employee) => {
        return (
            employee.name.toLowerCase().includes(searchLower) ||
            employee.job.toLowerCase().includes(searchLower) ||
            employee.phone.includes(searchLower)
        );
    });
}

export function handleSearchClick(searchTerm: string,employees: Employee[], setFilteredEmployees: React.Dispatch<React.SetStateAction<Employee[]>>) {
    setFilteredEmployees(filterEmployees(employees, searchTerm));
}