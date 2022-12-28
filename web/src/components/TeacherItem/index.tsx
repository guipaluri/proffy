import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png" alt="Mrs Puff" />
                <div>
                    <strong>Mrs. Puff</strong>
                    <span>Direção</span>
                </div>
            </header>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /><br />Ipsum doloremque adipisci ipsam unde aperiam tempore modi, itaque dolorum eos architecto labore. Distinctio expedita aliquid harum minima corporis dolor facilis quo!
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;