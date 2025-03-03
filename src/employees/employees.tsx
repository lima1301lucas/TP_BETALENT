import './employees.css';
import { useState } from "react";
import { formatDate, formatPhoneNumber, renderFetchStatus, filterEmployees } from '../utils/util.tsx';
import { useToggleDetails } from '../utils/util.tsx';
import { useFetch } from "../hooks/useFetch.tsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import searchIcon from '../assets/search-icon.png';
import arrowIconDown from '../assets/arrow-down.png';


export interface Employee {
    id: number;
    image: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
}

export function Employees() {
    const url = "http://localhost:3000/employees";
    const { data: employeesData, loading, error } = useFetch<Employee[]>(url);
    const { isOpen, toggleDetails } = useToggleDetails();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

    const statusMessage = renderFetchStatus(loading, error);
    if (statusMessage) return statusMessage;

    if (employeesData && filteredEmployees.length === 0) {
        setFilteredEmployees(employeesData);
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchIconClick = () => {
        const filtered = filterEmployees(employeesData!, searchTerm);
        setFilteredEmployees(filtered);

        if (filtered.length === 0) {
            toast.error('Nenhum registro encontrado!');
        }
    };

    return (
        <div className="employees-content">
            <div className="container">
                <div className="employees-header">
                    <h1>Funcionários</h1>
                    <div className="search-box">
                        <form>
                            <input type="text" placeholder="Pesquisar" value={searchTerm} onChange={handleSearchChange}/>
                            <img src={searchIcon} alt="Ícone de pesquisa" className="search-icon"onClick={handleSearchIconClick}/>
                        </form>
                    </div>
                </div>
    
                <table className="employees-table">
                    <thead className="employees-table-header">
                        <tr>
                            <td className="photo-column">FOTO</td>
                            <td className="name-column">NOME</td>
                            <td className="role-column">CARGO</td>
                            <td className="admission-column">DATA DE ADMISSÃO</td>
                            <td className="phone-column">TELEFONE</td>
                            <td className="more-column">●</td>
                        </tr>
                    </thead>
                    <tbody className="employees-table-content">
                        {filteredEmployees.map((employee) => (
                            <>
                                <tr key={employee.id}>
                                    <td className="photo-column">
                                        <img src={employee.image} className="employee-photo" />
                                    </td>
                                    <td className="name-column">{employee.name}</td>
                                    <td className="role-column">{employee.job}</td>
                                    <td className="admission-column">{formatDate(employee.admission_date)}</td>
                                    <td className="phone-column">{formatPhoneNumber(employee.phone)}</td>
                                    <td className="more-column">
                                        <img src={arrowIconDown} alt="Expandir" className={`arrow-icon ${isOpen[employee.id] ? "rotated" : ""}`} onClick={() => toggleDetails(employee.id)}/>
                                    </td>
                                </tr>
                                {isOpen[employee.id] && (
                                    <tr className="extra-row">
                                        <td colSpan={6}>
                                            <div className="extra-content">
                                                <div className="extra-info">
                                                    <span className="extra-label">Cargo:</span> {employee.job}
                                                </div>
                                                <div className="extra-info">
                                                    <span className="extra-label">Data de Admissão:</span> {formatDate(employee.admission_date)}
                                                </div>
                                                <div className="extra-info">
                                                    <span className="extra-label">Telefone:</span> {formatPhoneNumber(employee.phone)}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick={true} rtl={false}/>
        </div>
    );    
}