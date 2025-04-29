import { AxiosError } from "axios";

const handleErrors = (error) => {
    if(error instanceof AxiosError) {
        return new AxiosError('Erro de rede. Não foi possível acessar o serviço')
    }
}

export default handleErrors;