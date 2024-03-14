export default function Footer(){

    return(

        <footer className="flex flex-col gap-2 justify-center items-center bg-black h-44">

            <p className="text-white">Siga nos em nossas redes sociais</p>

            <div className="flex gap-4">
                <i className="fa-brands fa-instagram text-xl cursor-pointer text-red-600"></i>
                <i className="fa-brands fa-facebook-f text-xl cursor-pointer text-red-600"></i>
                <i className="fa-brands fa-youtube text-xl cursor-pointer text-red-600"></i>
                <i className="fa-brands fa-whatsapp text-xl cursor-pointer text-red-600"></i>
            </div>

        </footer>

    )

}