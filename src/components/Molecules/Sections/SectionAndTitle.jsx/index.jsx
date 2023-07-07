import styles from './SectionAndTitle.module.scss';

export const SectionAndTitle = ({
    title, 
    subTitle="", 
    sectionClass, 
    bodyWrapperClass, 
    children}) => {
    return(
        <div className={sectionClass}>
            { (title || subTitle) && (<div>
                {title && <h2>{title}</h2>}
                {subTitle && <h3>{subTitle}</h3>}
            </div>)}
            <div className={bodyWrapperClass ?? ""}>
                {children}
            </div>
        </div>
    );
};

export default SectionAndTitle;