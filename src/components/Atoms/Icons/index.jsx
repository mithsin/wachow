import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faChevronUp,
    faChevronDown,
    faPlus,
    faSortDown,
    faMinus,
    faHome,
    faHeart,
    faHeartCirclePlus,
    faFile,
    faUniversity,
    faUser,
    faListAlt,
    faStar,
    faXmark,
    faEllipsisVertical,
    faMagnifyingGlass,
    faMagnifyingGlassLocation
} from '@fortawesome/free-solid-svg-icons';

export const ChevronUp = ({className, onClick, size="1x"}) => <FontAwesomeIcon icon={faChevronUp} className={className} size={size} onClick={onClick}/>;

export const ChevronDown = ({className, onClick, size="1x"}) => <FontAwesomeIcon icon={faChevronDown} className={className} size={size} onClick={onClick}/>;

export const PlusIcon = ({className, onClick, size="1x"}) => <FontAwesomeIcon icon={faPlus} className={className} size={size} onClick={onClick}/>;

export const SortDown = ({className, size="1x"}) => <FontAwesomeIcon icon={faSortDown} className={className} size={size}/>;

export const MinusIcon = ({className, onClick, size="1x"}) => <FontAwesomeIcon icon={faMinus} className={className} size={size}  onClick={onClick}/>;

export const HomeIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faHome} className={className} size={size}/>;

export const FileIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faFile} className={className} size={size}/>;

export const UniversityIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faUniversity} className={className} size={size}/>;

export const UserIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faUser} className={className} size={size}/>;

export const ListAltIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faListAlt} className={className} size={size}/>;

export const StarIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faStar} className={className} size={size}/>;

export const XMarkIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faXmark} className={className} size={size}/>;

export const SearchLocationIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faMagnifyingGlassLocation} className={className} size={size}/>;

export const SearchIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faMagnifyingGlass} className={className} size={size}/>;

export const EllipsisVerticalIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faEllipsisVertical} className={className} size={size}/>;

export const HeartIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faHeart} className={className} size={size}/>;

export const HeartCirclePlusIcon = ({className, size="1x"}) => <FontAwesomeIcon icon={faHeartCirclePlus} className={className} size={size}/>;
