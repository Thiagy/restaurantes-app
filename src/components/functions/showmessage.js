//Função que exibe mensagem de sucesso ou erro
export default function showMessage(isSuccess, message){

    const boxMessage = document.getElementById('box-access-message');

    boxMessage.innerHTML = `<p style="color: white;">${message}</p>`;

    boxMessage.style.display = 'flex';

    boxMessage.style.border = isSuccess ? '1px solid blue' : '1px solid red';
  
    setTimeout(() => {

      boxMessage.style.display = '';

    }, 4000);

}
  