type props = {
    name: string
    email: string
    message: string
}
export const EmailTemplate = ({name, email, message}:props) => (
    <div>
        <h1>Nuevo mensaje desde <b>urubots.uy</b></h1>
        <p>
            Recibiste un nuevo mensaje de {name}  - ({email}).
        </p>
        <p>
            <b>Contenido:</b>
        </p>
        <p>
            {message}
        </p>
    </div>
);
