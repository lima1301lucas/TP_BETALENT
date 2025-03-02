import { useFetch } from "../hooks/useFetch.tsx";
import { formatDate, formatPhoneNumber,  renderFetchStatus} from '../utils/util.tsx';
import { useToggleDetails } from '../utils/util.tsx';
import './employees.css';
import searchIcon from '../assets/search-icon.png';
import arrowIconDown from '../assets/arrow-down.png';

interface Employee {
    id: number;
    image: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
}

export function Employees() {
    const { data: employees, loading,  error} = useFetch<Employee[]>("http://localhost:3000/employees");
    const { isOpen, toggleDetails } = useToggleDetails();

    const statusMessage = renderFetchStatus(loading, error);
    if (statusMessage) return statusMessage;

    return (
        <div className="employees-content">
            <div className="container">
                <div className="employees-header">
                    <h1>Funcionários</h1>
                    <div className="search-box">
                        <form>
                            <input type="text" placeholder="Pesquisar" />
                            <img src={searchIcon} alt="Ícone de pesquisa" className="search-icon" />
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
                        {employees?.map((employee) => (
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
                                        <img
                                            src={arrowIconDown}
                                            alt="Expandir"
                                            className={`arrow-icon ${isOpen[employee.id] ? "rotated" : ""}`}
                                            onClick={() => toggleDetails(employee.id)}
                                        />
                                    </td>
                                </tr>
                                {isOpen[employee.id] && (
                                    <tr className="extra-row">
                                        <td colSpan={6}>
                                            <div className="extra-content">
                                                <div className="extra-info">
                                                    <span className="extra-label">Cargo</span> {employee.job}
                                                </div>
                                                <div className="extra-info">
                                                    <span className="extra-label">Data de Admissão</span>{formatDate(employee.admission_date)}
                                                </div>
                                                <div className="extra-info">
                                                    <span className="extra-label">Telefone</span>{formatPhoneNumber(employee.phone)}
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
        </div>
    );
}
