//Função que converte imagens em base64
export default function readFileAsBase64(file, maxWidth, maxHeight, quality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const img = new Image();
  
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
  
          if (width > maxWidth) {
            height = (maxWidth / width) * height;
            width = maxWidth;
          }
  
          if (height > maxHeight) {
            width = (maxHeight / height) * width;
            height = maxHeight;
          }
  
          canvas.width = width;
          canvas.height = height;
  
          const ctx = canvas.getContext('2d');

          ctx.drawImage(img, 0, 0, width, height);
  
          const base64Image = canvas.toDataURL('image/jpeg', quality); 
  
          resolve(base64Image);

        };
  
        img.onerror = () => {
          reject(new Error('Erro ao ler o arquivo de imagem.'));
        };
  
        img.src = event.target.result;

      };
  
      reader.onerror = () => {

        reject(new Error('Erro ao ler o arquivo de imagem.'));
        
      };
  
      reader.readAsDataURL(file);
    });
  }
