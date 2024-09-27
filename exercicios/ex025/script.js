document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const day = String(today.getDate()).padStart(2, '0');
    const hora = String(today.getHours()).padStart(2, '0');
    const minuto = String(today.getMinutes()).padStart(2, '0');

    document.getElementById('imes').value = `${year}-${month}`; // Para input:month
    document.getElementById('idia').value = `${year}-${month}-${day}`; // Para input:date
    document.getElementById('ihora').value = `${hora}:${minuto}`;
});
