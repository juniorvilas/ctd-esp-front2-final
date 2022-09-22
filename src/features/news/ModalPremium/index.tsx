import * as S from ".././styled"
import { ModalPremimProps } from "./types";

export function ModalPremium({setModal, close, assinarImage}: ModalPremimProps) {
    return (
        <S.ContainerModal>
            <S.CardModal>
                <S.CloseButton onClick={setModal}>
                    <img src={close} alt="close-button" />
                </S.CloseButton>
                <S.ImageModal src={assinarImage} alt="mr-burns-excelent" />
                <S.ContainerTexto>
                    <S.TituloModal>Assine a nossa newsletter</S.TituloModal>
                    <S.DescriptionModal>
                        Assine nossa newsletter e receba novidades de nossos
                        personagens favoritos
                    </S.DescriptionModal>
                    <S.BotaoAssinar
                        onClick={() =>  
                            setTimeout(() => {
                                alert("Suscripto!");
                                setModal()
                            }, 1000)
                        }
                    >
                        Assinar
                    </S.BotaoAssinar>
                </S.ContainerTexto>
            </S.CardModal>
        </S.ContainerModal>
    )
}