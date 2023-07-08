import styles from './Modal.module.scss';
import { XMarkIcon } from 'components/Atoms/Icons';

export const Modal = ({setIsModalOpen, isModalOpen, modalTitle, children}) => {
    return(
        <div className={isModalOpen? styles['bgScreen'] : styles['closeScreen']}>
            <div className={styles.modalBlock}>
                <div className={styles.modalWrap}>
                    <div className={styles.header}>
                        <h2>{modalTitle ?? ''}</h2>
                        <span 
                            className={styles.closeButton} 
                            onClick={()=>setIsModalOpen(!isModalOpen)}>
                                <XMarkIcon size="2x"/>
                        </span>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};