import { useState } from 'react';
import './employees.css';
import searchIcon from '../assets/search-icon.png';
import arrowIconDown from '../assets/arrow-down.png';

export function Employees() {
    const [isOpen, setIsOpen] = useState<boolean[]>([]);

    const toggleDetails = (index: number) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

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
                        <tr>
                            <td className="photo-column">TESTE</td>
                            <td className="name-column">TESTE</td>
                            <td className="role-column">TESTE</td>
                            <td className="admission-column">TESTE</td>
                            <td className="phone-column">TESTE</td>
                            <td className="more-column"><img src={arrowIconDown} alt="Expandir" className={`arrow-icon ${isOpen[0] ? 'rotated' : ''}`} onClick={() => toggleDetails(0)}/></td>
                        </tr>
                        <tr className="extra-row" style={{ display: isOpen[0] ? 'table-row' : 'none' }}>
                            <td colSpan={6}>
                                <div className="extra-content">
                                    <div className="extra-info">
                                        <span className="extra-label">Cargo</span> Teste
                                    </div>
                                    <div className="extra-info">
                                        <span className="extra-label">Data de Admissão</span> Teste
                                    </div>
                                    <div className="extra-info">
                                        <span className="extra-label">Telefone</span> Teste
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="photo-column">TESTE</td>
                            <td className="name-column">TESTE</td>
                            <td className="role-column">TESTE</td>
                            <td className="admission-column">TESTE</td>
                            <td className="phone-column">TESTE</td>
                            <td className="more-column"><img src={arrowIconDown} alt="Expandir" className={`arrow-icon ${isOpen[1] ? 'rotated' : ''}`} onClick={() => toggleDetails(1)}/></td>
                        </tr>
                        <tr className="extra-row" style={{ display: isOpen[1] ? 'table-row' : 'none' }}>
                            <td colSpan={6}>
                                <div className="extra-content">
                                    <div className="extra-info">
                                        <span className="extra-label">Cargo</span> Teste
                                    </div>
                                    <div className="extra-info">
                                        <span className="extra-label">Data de Admissão</span> Teste
                                    </div>
                                    <div className="extra-info">
                                        <span className="extra-label">Telefone</span> Teste
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
