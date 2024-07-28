const cards = [
    { name: 'El Loco', description: 'Nuevos comienzos, espontaneidad, aventura.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg' },
    { name: 'El Mago', description: 'Habilidad, destreza, poder de manifestación.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg' },
    { name: 'La Sacerdotisa', description: 'Sabiduría, conocimiento secreto, intuición.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg' },
    { name: 'La Emperatriz', description: 'Abundancia, naturaleza, fertilidad.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg' },
    { name: 'El Emperador', description: 'Autoridad, estructura, control.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg' },
    { name: 'El Hierofante', description: 'Tradición, conformidad, moralidad.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg' },
    { name: 'Los Enamorados', description: 'Amor, armonía, relaciones.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg' },
    { name: 'El Carro', description: 'Control, voluntad, éxito.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg' },
    { name: 'La Fuerza', description: 'Valor, compasión, confianza.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg' },
    { name: 'El Ermitaño', description: 'Introspección, soledad, guía interior.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg' },
    { name: 'La Rueda de la Fortuna', description: 'Ciclo, cambio, inevitable destino.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg' },
    { name: 'La Justicia', description: 'Justicia, equidad, verdad.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg' },
    { name: 'El Colgado', description: 'Pausa, rendición, dejar ir.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg' },
    { name: 'La Muerte', description: 'Fin de un ciclo, transición, cambio.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg' },
    { name: 'La Templanza', description: 'Equilibrio, paciencia, propósito.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg' },
    { name: 'El Diablo', description: 'Apego, restricción, adicción.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg' },
    { name: 'La Torre', description: 'Destrucción, cambio radical, revelación.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg' },
    { name: 'La Estrella', description: 'Esperanza, fe, rejuvenecimiento.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg' },
    { name: 'La Luna', description: 'Ilusión, miedo, ansiedad.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg' },
    { name: 'El Sol', description: 'Éxito, vitalidad, optimismo.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg' },
    { name: 'El Juicio', description: 'Renacimiento, absolución, juicio final.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg' },
    { name: 'El Mundo', description: 'Finalización, integración, logro.', image: 'https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg' }
];

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];
    const card = document.querySelector('.card');
    const cardDescription = document.getElementById('cardDescription');

    card.style.backgroundImage = `url(${selectedCard.image})`;
    card.innerHTML = '';
    cardDescription.innerHTML = `<strong>${selectedCard.name}</strong>: ${selectedCard.description}`;


     if (selectedCard.name === 'La Muerte') {
     
        window.open('https://jonatan666-red.vercel.app/', '_blank');
    }
}
