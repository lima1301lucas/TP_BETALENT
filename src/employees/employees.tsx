import "./employees.css";
import searchIcon from "../assets/search-icon.png"; 

export function Employees() {
  return (
    <div className="employees-content">
        <div className="container">
            <div className="employees-header">
                <h1>Funcionários</h1>
                <div className="search-box">
                    <form>
                        <input type="text" placeholder="Pesquisar"/>
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
                    </tr>
                </thead>
                <tbody className="employees-table-content">
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                    <tr>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                        <td>TESTE</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
}
