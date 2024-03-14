export default function Message({ message }) {

    const messageCss = {

      display: !message || Object.keys(message).length === 0 ? 'none' : 'block',
      position: 'fixed',
      top: '200px',
      left: '50%',
      transform: 'translateX(-50%)',
      border: '1px solid blue',
      color: 'white',
      borderRadius: '12px',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(0, 0, 0, .4)'

    };
  
    return (

      <div
        style={messageCss}
        className="py-1 px-3 "
        id="box-access-message"
      >
        {message.name} adicionado.
      </div>

    );

  }


  