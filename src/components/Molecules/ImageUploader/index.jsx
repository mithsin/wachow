import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from "./ImageUploader.module.scss";
import axios from 'axios';

import { Button } from 'components/Atoms/Buttons';
import { Toggle } from 'components/Atoms/Toggle';
import { TextInput } from 'components/Atoms/Inputs';
import { XMarkIcon } from 'components/Atoms/Icons';


const ImageUploader = ({
    id,
    imageListState=[],
    setImageListState
}) => {
    const [image, setImage] = useState('');
    const [inputURL, setInputURL] = useState('');
    const [loading, setLoading] = useState(false);
    const [notImageMessage, setNotImageMessage] = useState(false);

    const [isSetByURL, setIsSetByURL] = useState(false)

    const onSubmitInputURL = () => {
      const addNewImage = {
          id: uuidv4(), 
          itemId: id ?? null, 
          name: `image-${uuidv4()}`, 
          src: inputURL
      }
      setImageListState(imageListState.concat(addNewImage))
      setInputURL('')
    }

    const onImageDelete = (id) => {
        const updateList = imageListState?.filter(image => image?.id !== id)
        setImageListState(updateList)
    }

  const uploadImage = e => {
    setNotImageMessage(false);

    const files = e.target.files[0];
    let imageRegex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/);
    const isImage = (imageRegex.test(files.type));

    // TODO: setup cloudinary
    if(isImage){
        setLoading(true);
        const formData = new FormData();
        formData.append("upload_preset", "pafpay");
        formData.append("file", files);

        axios.post(`${process.env.REACT_APP_CLOUDINARY_URL}`, formData)
          .then(res=> {
            const resUrl = res.data.secure_url;
            const formatURL = resUrl.split('/upload/');
            const url780 = `${formatURL[0]}/upload/c_scale,w_780,ar_1:1,c_fill/${formatURL[1]}`
      
            const addNewImage = {
              id: uuidv4(), 
              itemId: id ?? null, 
              name: files?.name ?? `image-${uuidv4()}`, 
              src: url780
            }
            setImage(url780)
            setImageListState(imageListState.concat(addNewImage))
            setLoading(false)
          })
          .catch(err=> 
              console.log("upload image error: ", err)
          )
    } else {
        setNotImageMessage(true)
        console.log("this is not a image")
    }
}

return (
  <div className={styles.dropbox}>
    <div className={styles.toggleSwitch}>
      <Toggle
        labelOn="add image by link"
        labelOff="upload by file"
        onClick={()=>setIsSetByURL(!isSetByURL)}
      />
    </div>

    <div className={styles.inputWrapper}>
      {
        isSetByURL
          ? (
            <div className={styles.inputUrlWrap}>
              <TextInput
                value={inputURL}
                onChange={(e)=> setInputURL(e.target.value)} />
              <Button
                className={styles.buttonAlign}
                disabled={!inputURL}
                onClick={onSubmitInputURL}
                label="SUBMIT" />
            </div>
          ) : (
            <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={ uploadImage } />
          )
      }
    </div>
    <div>            
      {
        loading ? (
          <h2>Loading image...</h2>
        ): (
          <img src={ image } alt={ image } style={{ width: "100px" }} />
        )
      }
      {notImageMessage ? "this is not image" : null}
    </div>
    {imageListState?.length > 0 && 
      <div className={styles.imagesListBlock}>
        {imageListState?.map((image) => 
          <span key={image?.id} className={styles.imageListItem}>
            <img src={image.src} id={image.id} alt={`${image.id}`} className={styles.imageStyle}/>
            <span id={image.id} onClick={()=>onImageDelete(image.id)} className={styles.iconWrap} >
              <XMarkIcon size="1x" className={styles.iconStyle}/>
            </span>
          </span>
        )}
      </div>
    }
  </div>
)};

export default ImageUploader;
