import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import "../css/card-preferencias.css"

export default function CardPreferencias({ mensagem }) {

    const cards = Array.from({ length: 3 });

    const informacoes = Array.from({ length: 5 })

    const [menuAberto, setMenuAberto] = useState(null);

    const handleSelecionado = (index) => {
        setMenuAberto(prev => (prev === index ? null : index));
    };

    return (
        <div className="conteudo-card-preferencias">
            <div className="container-card-map">
                {cards.map((_, index) => (
                    <div className="conteudo-card-input"
                        key={index}>
                        <label htmlFor={`card-dropdown-${index}`} className="label-card-input">
                            {mensagem}
                        </label>
                        <input
                            type="text"
                            id={`card-dropdown-${index}`}
                            className="input-card-input"
                            readOnly
                            value="Selecione"
                            onClick={() => handleSelecionado(index)}
                        />
                        {menuAberto === index && (
                            <div className={`container-dropdown-${menuAberto === index ? "aberto" : ""}`}>
                                <div className="dropdown-opcao">teste 1</div>
                                <div className="dropdown-opcao">teste 2</div>
                                <div className="dropdown-opcao">teste 3</div>
                                <div className="dropdown-opcao">teste 1</div>
                                <div className="dropdown-opcao">teste 2</div>
                                <div className="dropdown-opcao">teste 3</div>
                                <div className="dropdown-opcao">teste 1</div>
                                <div className="dropdown-opcao">teste 2</div>
                                <div className="dropdown-opcao">teste 3</div>
                            </div>
                        )}
                    </div>
                ))}
                <div className="container-botoes-de-acao">
                    <div className="container-botoes-editar-excluir-salvar">
                        <button className="salvar">Salvar</button>
                        <button className="editar">Editar</button>
                        <button className="excluir">Excluir</button>
                    </div>
                </div>
            </div>
            <div className="container-endereco-favorito-e-botoes-de-acao">
                <div className="container-endereco-favorito">
                    <div className="container-endereco-titulo">Endereço favorito de entrega</div>
                    <div className="card-horizontal-endereco">
                        {informacoes.map((_, item) => (
                            <div className="card-map-endereco-favorito" key={item}>
                                <div className="card-map-texto-endereco-favorito">
                                    <p><strong>Matriz</strong></p>
                                    <p>Endereço: Av. Nações Unidas</p>
                                </div>
                                <div className="card-map-icones-endereco-favorito">
                                    <FaStar />
                                    <MdModeEdit />
                                    <FaTrashAlt />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="container-botao-adicionar-endereco">
                        <button className="botao-adicionar-endereco">
                            <FaPlusCircle />
                            Adicionar endereço
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}
